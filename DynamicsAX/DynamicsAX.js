
function Test()
{
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 

	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var dynamicsPath = pfFolder + "\\Microsoft Dynamics AX\\60\\Client\\Bin\\Ax32.exe"
	if(!fso.FileExists(dynamicsPath))
	{
		Tester.Message("Dynamics AX Client is not installed on this computer");
		return;
	}
	
	var windows = g_util.FindWindows("regex:.Microsoft Dynamics AX.*", "AxMainFrame");
	if (windows.length == 0)
	{
		Tester.Message("Dynamics AX Client is not started. Please start it manually and re-run the test.");
		return;
	}

	OpenGeneralLedger();
	CheckCurrency();
	OpenMainAccounts();
	CheckGridColumns();
}

g_load_libraries=["UIAutomation", "DynamicsAX"];


