//Put your custom functions and variables in this file

function LaunchDynamicsNAV()
{
	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var dynamicsPath = pfFolder + "\\Microsoft Dynamics NAV\\100\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe";

	if (!Tester.Assert("Dynamics NAV Client is installed", File.Exists(dynamicsPath)))
	{
		return false;
	}
	
	var windows = g_util.FindWindows("regex:.*Microsoft Dynamics NAV", "regex:WindowsForms10.*");
	var pid = 1;
	if (windows.length == 0)
	{
		Tester.Message("Dynamics NAV Client is not started. Launching...");
		pid = Global.DoLaunch(dynamicsPath);
	}
	
	if (!Tester.Assert("Dynamics NAV Client is running", pid > 0))
	{
		return false;
	}
	
	return true;
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

function FillSalesOrderLine(ln, description, quantity, price, discount)
{
	// Type
	SeS('OrderLinesGrid').DoClickCell(ln, "Type");
	SeS('Type').DoClick();
	SeS('Type1').DoClick();
	SeS('ItemTypesGrid').DoClickCell("Item", 0);
	
	// Description
	SeS('OrderLinesGrid').DoClickCell(ln, "Description");
	SeS('Description').DoClick();
	SeS('Description1').DoClick();
	SeS('DescriptionsGrid').DoClickCell(description, "Description");
	
	// Quantity
	SeS('OrderLinesGrid').DoClickCell(ln, "Quantity");
	SeS('Quantity').DoClick();
	SeS('Quantity').DoSetText(quantity);
	SeS('OrderLinesGrid').DoClickCell(ln, "Qty. to Assemble to Order");
	SeS('Qty__to_Assemble_to_Order').DoClick();
	
	// Unit Price
	SeS('OrderLinesGrid').DoClickCell(ln, "Unit Price Excl. VAT");
	SeS('Unit_Price_Excl__VAT').DoClick();
	SeS('Unit_Price_Excl__VAT').DoSetText(price);		
	
	SeS('Page_right').DoClick();

	// Discount
	SeS('OrderLinesGrid').DoClickCell(ln, "Line Discount %");
	SeS('Line_Discount_Percent').DoClick();
	SeS('Line_Discount_Percent').DoSetText(discount);
	
	// Qty to Ship & Invoice
	SeS('OrderLinesGrid').DoClickCell(ln, "Qty. to Ship");
	SeS('Qty__to_Ship').DoClick();
	SeS('Qty__to_Ship').DoSetText(quantity);
	SeS('OrderLinesGrid').DoClickCell(ln, "Qty. to Invoice");
	SeS('OK').DoClick();

	SeS('Page_left').DoClick();
	SeS('Line_down').DoClick();
	
	return price * quantity * (1 - discount/100);
}

function VerifyTotal()
{
	g_expectedTotal = Math.floor(g_expectedTotal*100)/100;
	Tester.Message("Expected Total: " + g_expectedTotal);
	var actualTotal = parseFloat(SeS('TotalExclVAT').GetText().replace(",", ""));
	Tester.Message("Actual Total: " + actualTotal);
	Tester.AssertEqual("PO: Total Excl. VAT is correct", g_expectedTotal, actualTotal);
}

/** @scenario FillSalesOrderLines*/
function FillSalesOrderLines()
{
	Spreadsheet.DoAttach('%WORKDIR%/BasicSalesOrder/Items.xls');
	var ln = 0;
	g_expectedTotal = 0.0;
	while(Spreadsheet.DoSequential())
	{
		var description = Spreadsheet.GetCell("Description");
		var quantity = Spreadsheet.GetCell("Quantity");
		var price = Spreadsheet.GetCell("Unit Price");
		var discount = Spreadsheet.GetCell("Discount");
		
		if (!description)
		{
			break;
		}
		
		var subTotal = FillSalesOrderLine(ln, description, quantity, price, discount);
		g_expectedTotal += subTotal;
		ln++;
	}

	VerifyTotal();
}

/** @scenario StartNewPurchaseOrder*/
function StartNewPurchaseOrder()
{
	Global.DoWaitFor('Tree', 60000);
	Spreadsheet.DoAttach('%WORKDIR%/BasicSalesOrder/Items.xls', 'Sheet2');
	var customer = Spreadsheet.GetCell("Customer");
	
	SeS('Tree').DoClickNode("Sales Orders");
	SeS('_New').DoClick();
	SeS('Customer').DoClick();
	SeS('Customer1').DoClick();
	SeS('CustomerGrid').DoClickCell(customer, "Name");
	SeS('Contact').DoClick();
	var poNo = SeS('No_').GetText();
	Global.SetProperty('poNo', poNo);
}

/** @scenario PostPurchaseOrder*/
function PostPurchaseOrder()
{
	SeS('Post___').DoClick();
	SeS('Ship_and_Invoice').DoSetCheck();
	SeS('OK1').DoClick();
	Global.DoSleep(2000);
	SeS('Yes').DoClick();
	var poNo = Global.GetProperty('poNo', 0);
	Tester.AssertEqual("PO No is correct", poNo, SeS('Order_No_').GetText());
	var actualTotal = parseFloat(SeS('Text').GetText().replace(",", ""));
	Tester.AssertEqual("PI: Total Excl. VAT is correct", g_expectedTotal, actualTotal);
	SeS('OK2').DoClick();
	SeS('Close').DoClick();
}
