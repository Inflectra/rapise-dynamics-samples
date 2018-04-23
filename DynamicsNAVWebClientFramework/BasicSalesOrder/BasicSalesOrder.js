


function Test(params)
{
	Navigator.Open();
	RVL.DoPlayScript("%WORKDIR%\\BasicSalesOrder\\BasicSalesOrder.rvl.xlsx");
}

g_load_libraries=["%g_browserLibrary:Firefox HTML%", "DomDynamicsNAV"];


