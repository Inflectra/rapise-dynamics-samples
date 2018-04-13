


function Test(params)
{
	if (typeof params == "undefined")
	{
		params = { customerName: "NoName" };
	}
	
	LaunchDynamicsNAV();
	Global.DoWaitFor('Tree', 30000);
	SeS('Tree').DoClickNode("Customers");
	Global.DoWaitFor('_New');
	SeS('_New').DoClick();
	SeS('DataGridView').DoClickCell("Customer EU", 2);
	SeS('OK').DoClick();
	Global.DoWaitFor('Name');
	SeS('Name').DoClick();
	SeS('Name').DoSetText(params.customerName);
	SeS('Button').DoClick();
	SeS('Scope_selector_for_Type_to_filte').DoClick();
	SeS('Name1').DoClick();
	SeS('Type_to_filter').DoClick();
	SeS('Type_to_filter').DoSetText(params.customerName);
	SeS('Apply__Type_to_filter_').DoClick();
	Tester.AssertEqual("Verify that: RowCount=1", SeS('DataGridView1').GetRowCount(), 1);
	SeS('Apply__Type_to_filter_').DoClick();
}

g_load_libraries=["UIAutomation", "DynamicsNAV"];


