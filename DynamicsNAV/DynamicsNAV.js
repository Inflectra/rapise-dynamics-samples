
function Test()
{
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 
	
	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var dynamicsPath = pfFolder + "\\Microsoft Dynamics NAV\\100\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe"
	if(!fso.FileExists(dynamicsPath))
	{
	    Tester.Message("Dynamics NAV Client is not installed on this computer");
	    return;
	}
	
	var windows = g_util.FindWindows("regex:.*Microsoft Dynamics NAV", "regex:WindowsForms10.*");
	if (windows.length == 0)
	{
	    Tester.Message("Dynamics NAV Client is not started. Please start it manually and re-run the test.");
	    return;
	}

	SeS('Tree').DoClickNode("Customers");
	
	SeS('_New').DoLClick(12, 17);
	SeS('OK').DoAction();

	SeS('Name').DoLClick(25, 10);
	SeS('Name').DoSetText("John");

	SeS('Address').DoLClick(70, 10);
	SeS('Address').DoSetText("Market street");

	SeS('Address_2').DoLClick(9, 12);
	SeS('Address_2').DoSetText("21400");
	
	var pc = SeS('Post_Code');
	pc.DoClick(pc.GetWidth() + 10);
	
	var grid = SeS('DataGridView');
	var cell = grid.GetCell(3, 2);
	Tester.Message(cell);
	grid.DoClickCell(3, 2);

	SeS('_Delete').DoAction();
	SeS('Yes').DoAction();
}

g_load_libraries=["UIAutomation", "DynamicsNAV"];


