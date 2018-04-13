//Use 'Record/Learn' button to begin test recording

function Test()
{
	var params = ReadParams();
	Global.DoInvokeTest('%WORKDIR%/CreateCustomer/CreateCustomer.sstest', params);
	Global.DoInvokeTest('%WORKDIR%/BasicSalesOrder/BasicSalesOrder.sstest');
	Global.DoInvokeTest('%WORKDIR%/DeleteCustomer/DeleteCustomer.sstest', params);
}

g_load_libraries=["UIAutomation", "DynamicsNAV"];

