
//########## Script Steps ##############

function Test()
{
	LaunchDynamicsNAV();
	StartNewPurchaseOrder();
	FillSalesOrderLines();
	PostPurchaseOrder();

	//RVL.DoPlayScript();
}

g_load_libraries=["UIAutomation","DynamicsNAV"];



