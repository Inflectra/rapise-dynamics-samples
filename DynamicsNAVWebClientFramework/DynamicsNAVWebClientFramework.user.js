//Put your custom functions and variables in this file

if (typeof g_rvlScriptPath == "undefined")
{
	var g_rvlScriptPath = "";
}


function ReadParams()
{
	var cn;
	
	if (typeof g_customerName != "undefined")
	{
		cn = g_customerName;
	}
	else
	{
		Spreadsheet.DoAttach('%WORKDIR%/BasicSalesOrder/Data.xls');
		cn = Spreadsheet.GetCell("CustomerName", 1);
	}
	Tester.Message("CustomerName: " + cn);

	var params = {customerName: cn};
	return params;
}

function CalculateLinePrice(quantity, price, discount)
{
	var p = parseFloat(price.replace(",", "."));
	var q = parseFloat(quantity);
	var d = parseFloat(discount);
	
	return p * q * (1.0 - d/100.0);
}

function ReadActualTotal()
{
	var total = SeS('Total_Excl__VAT__CAD_1').GetText();
	return total.replace(".", "").replace(",", ".");
}
