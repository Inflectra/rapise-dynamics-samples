

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
	SeS('Filter').DoClick( );
	SeS('FilterEdit').DoClick( );
	SeS('FilterEdit').DoSetText(params.customerName);
	
	Global.DoSendKeys("{ENTER}");
	Global.DoSleep(2000);
	
	SeS('Brick').DoClick( );

	SeS('_Delete').DoClick();
	SeS('Yes').DoClick();
	SeS('ClearFilter').DoClick( );
	SeS('Home').DoClick();

}

g_load_libraries=["%g_browserLibrary:Firefox HTML%", "DomDynamicsNAV"];


