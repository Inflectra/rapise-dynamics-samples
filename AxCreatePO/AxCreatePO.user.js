//Put your custom functions and variables in this file

function ActivateWindow(/**string*/ wndTitle)
{
	var wnd = g_util.FindWindow(wndTitle, "regex:.*");
	if (wnd)
	{
		wnd.Restore();
	}
}