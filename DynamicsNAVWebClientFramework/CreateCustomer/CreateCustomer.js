

//########## Script Steps ##############

function Test(params)
{
	if (typeof params == "undefined")
	{
		params = { customerName: "NoName" };
	}

	Navigator.Open();

	SeS('Customers').DoClick();
	Global.DoSleep(2000);
	SeS('Create_a_new_entry_').DoClick();
	SeS('OK').DoClick();
	SeS('Name').DoClick();
	SeS('Name').DoSetText(params.customerName);
	SeS('Save_and_close_the_page_').DoClick();
	SeS('Filter').DoClick( );
	SeS('FilterEdit').DoClick( );
	SeS('FilterEdit').DoSetText(params.customerName);
	
	Global.DoSendKeys("{ENTER}");
	Global.DoSleep(2000);
	
	Tester.AssertEqual("Verify that: Enabled=true", SeS('Brick').GetEnabled(), true);
	SeS('ClearFilter').DoClick( );

	SeS('Home').DoClick( );
}

g_load_libraries=["%g_browserLibrary:Firefox HTML%", "DomDynamicsNAV"];


