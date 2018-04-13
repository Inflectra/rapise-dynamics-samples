


function Test(params)
{
	if (typeof params == "undefined")
	{
		params = { customerName: "NoName" };
	}

	SeS('Tree').DoClickNode("Customers");
	SeS('Scope_selector_for_Type_to_filte').DoClick();
	SeS('Name').DoClick();
	SeS('Type_to_filter').DoClick();
	SeS('Type_to_filter').DoSetText(params.customerName);
	SeS('Apply__Type_to_filter_').DoClick();
	SeS('DataGridView').DoClickCell(params.customerName, 2);
	SeS('_Delete').DoClick();
	SeS('Yes').DoClick();
	SeS('Apply__Type_to_filter_').DoClick();
}

g_load_libraries=["UIAutomation", "DynamicsNAV"];


