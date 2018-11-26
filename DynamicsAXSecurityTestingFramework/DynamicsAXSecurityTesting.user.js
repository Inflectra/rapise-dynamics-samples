//Put your custom functions and variables in this file

/**
 * Launches Dynamics AX Desktop Client as User.
 * This function uses PsExec.exe from "%WORKDIR%\\Tools"
 * https://docs.microsoft.com/en-us/sysinternals/downloads/psexec
 * @param userName
 * @param password
 * @param [domain]
 */
function DynamicsAXLaunchAsUser(/**string*/ userName, /**string*/ password, /**string*/ domain)
{
	if (domain)
	{
		userName = domain + "\\" + userName;
	}	
	
	Tester.Message("Launching DAX as " + userName);
	
	var psExecPath = Global.GetFullPath("%WORKDIR%\\Tools\\PsExec.exe");
	var programPath = "C:\\Program Files (x86)\\Microsoft Dynamics AX\\60\\Client\\Bin\\Ax32.exe";
	var cmdLine = '"' + psExecPath + '" -u "' + userName + '" -p "' + password + '" "' + programPath + '"';
	Global.DoLaunch(cmdLine);
	
	if (!saved_script_objects.AddressBar)
	{
		Global.DoLoadObjects('%WORKDIR%/DynamicsAXSecurityTesting.objects.js');
	}
	
	var addressBarObj = Global.DoWaitFor("AddressBar", 30000);
	Tester.Assert("DAX launched successfully", addressBarObj != false);
	if (addressBarObj)
	{
		Global.DoSleep(2000);
	}
}

/**
 * Sets default values for global variables if not defined by execution engine.
 * Variables set: g_userName, g_password, g_domain, g_company
 */
function DynamicsAXLoadDefaultConfig()
{
	if (typeof(g_userName) == "undefined")
	{
		g_userName = "daxadmin";
	}
	
	if (typeof(g_password) == "undefined")
	{
		g_password = "Pass@word1";
	}
	
	if (typeof(g_domain) == "undefined")
	{
		g_domain = "CONTOSO";
	}
	
	if (typeof(g_company) == "undefined")
	{
		g_company = "DAT";
	}
}

/**
 * Selects company by name.
 * @param companyName
 */
function DynamicsAXSelectCompany(/**string*/ companyName)
{
	Tester.Message("Selecting company " + companyName);
	SeS('CompanyButton').DoClick();
	SeS('CompanyGrid').DoClickCell(companyName, "Company");
	SeS('CompanyOK').DoClick();
	Global.DoSleep(2000);
}

/**
 * Makes a screenshot of the main Dynamics AX window and adds it to execution report.
 */
function DynamicsAXCaptureMainWindow()
{
    Tester.CaptureWindowImage("DAX Main Window", "regex:.Microsoft Dynamics AX.*");
}

/** 
 * Reads roles assigned to a user.
 * @param userName
 */
function DynamicsAXGetRolesForUser(/**string*/ userName) /**array*/
{
	SeS("AddressBar").DoSetText('DAT/System administration/Common/Users/Users');
	SeS('UserTable').DoClickCell(userName, "Alias");
	Tester.CaptureObjectImage('Roles for ' + userName, 'RolesForUser');
	return SeS('RolesForUser').GetColumnValues(0);
}

/**
 * Checks that roles assigned to a user match data in Roles.xlsx
 * @param userName
 */
function DynamicsAXCheckRolesForUser(/**string*/ userName)
{
	var roles = DynamicsAXGetRolesForUser(userName);
	var so = SeS("Roles");
	so.DoMoveToFirstRow();
	var cIndex = so.GetColumnIndexByName(userName);
	Tester.Assert("Roles are defined for user '" + userName + "' in Roles.xlsx", cIndex != -1);
	var rowCount = so.GetRowCount();
	for(var i = 1; i < rowCount; i++)
	{
		var roleName = so.GetCell(0, i);
		var roleEnabled = so.GetCell(cIndex, i) == 1;
		var roleExists = false;
		for(var j = 0; j < roles.length; j++)
		{
			if (roles[j] == roleName)
			{
				roleExists = true;
				break;
			}
		}
		Tester.AssertEqual("Role '" + roleName + "' is " + (roleEnabled ? "enabled" : "disabled"), roleEnabled, roleExists);
	}
}

/**
 * Closes Dynamics AX client.
 */
function DynamicsAXClose()
{
	var closeButton = Global.DoWaitFor("Close", 1);
	if (closeButton)
	{
		closeButton.DoClick();
	}
}

/**
 * Iterates through users defined in Users.xlsx and checks roles for them.
 * Launches Dynamics AX client, checks roles and closes the client.
 */
function DynamicsAXCheckRoles()
{
	var so = SeS('Users');
	var adminUserName = so.GetCell("UserName");
	var password = so.GetCell("Password");
	var domain = so.GetCell("Domain");
	DynamicsAXClose();
	DynamicsAXLaunchAsUser(adminUserName, password, domain);
	do
	{
		var userName = so.GetCell("UserName");
		Tester.Message(userName);		
		DynamicsAXCheckRolesForUser(userName);
	} while (so.DoSequential());
	
	DynamicsAXClose();
}

/**
 * Gets list of modules available for a user.
 * @param userName
 */
function DynamicsAXGetNavigationPaneModules(/**string*/ userName)
{
    SeS('_File').DoMenu("File;View;Navigation Pane Options...");
	var modules = [];
	var list = SeS('NavPaneList');
	if (list)
	{	
		var item = list.GetChildAt(0);
		while(item)
		{
			var typeName = item.GetTypeName();
			if (typeName == "CheckBox")
			{
				item = SeSTryMatch(item.instance);
				var moduleName = item.GetName();
				var moduleState = item.GetChecked();
				modules.push({name: moduleName, checked: moduleState});
			}
			item = item.GetNextSibling();		
		}
		Tester.CaptureWindowImage("Modules for " + userName, "regex:.Navigation pane options.*");
	}
	SeS('Cancel').DoClick();
	return modules;
}

/** 
 * Checks that modules available for a user match data in Modules.xlsx
 * @param userName
 */
function DynamicsAXCheckModulesForUser(/**string*/ userName)
{
	var modules = DynamicsAXGetNavigationPaneModules(userName);
	var so = SeS('Modules');
	so.DoMoveToFirstRow();
	var cIndex = so.GetColumnIndexByName(userName);
	Tester.Assert("Modules are defined for user '" + userName + "' in Modules.xlsx", cIndex != -1);
	var rowCount = so.GetRowCount();
	for(var i = 1; i < rowCount; i++)
	{
		var moduleName = so.GetCell(0, i);
		var moduleExpectedState = so.GetCell(cIndex, i);
		if (!moduleExpectedState)
		{
			moduleExpectedState = 0;
		}
		var moduleActualState = 0;
		for(var j = 0; j < modules.length; j++)
		{
			if (modules[j].name == moduleName)
			{
				moduleActualState = modules[j].checked ? 2 : 1;
				break;
			}
		}
		var moduleStates = ["not available", "disabled", "enabled"];
		Tester.AssertEqual("Module '" + moduleName + "' is " + moduleStates[moduleExpectedState], moduleStates[moduleExpectedState], moduleStates[moduleActualState]);
	}
}

/**
 * Checks modules for all users defined in Users.xlsx
 * Launches Dynamics AX client, checks modules and closes the client.
 */
function DynamicsAXCheckModules()
{
	var so = SeS('Users');
	do
	{
		var userName = so.GetCell("UserName");
		var password = so.GetCell("Password");
		var domain = so.GetCell("Domain");
		Tester.Message(userName);
		DynamicsAXClose();
		DynamicsAXLaunchAsUser(userName, password, domain);
		DynamicsAXCheckModulesForUser(userName);
	} while (so.DoSequential());
	
	DynamicsAXClose();
}

