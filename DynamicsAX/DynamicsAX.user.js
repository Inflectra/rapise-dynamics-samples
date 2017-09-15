//Put your custom functions and variables in this file

/**
 *  Navigates to General ledger using Menu and Tab Control
 */
function OpenGeneralLedger()
{
	// Print available tabs in the side bar
	var tabCount = SeS('TabControl').GetItemsCount();
	Tester.Message("Tab control contains " + tabCount + " tabs");
	for(var i = 0; i < tabCount; i++)
	{
		var tabName = SeS('TabControl').GetTabName(i);
		Tester.Message("Tab" + (i + 1) + ": " + tabName);
	}
	
	// Test if General ledger tab already available 
	var result = SeS('TabControl')._DoSelectTab("General ledger");
	if (!result)
	{
		// Open General ledger using menu
		SeS('File').DoMenu("File;View;Modules;General ledger");
		// Select General ledger tab
		SeS('TabControl')._DoSelectTab("General ledger");
	}
	var selectedTab = SeS('TabControl').GetSelectedTab();
	result = selectedTab == "General ledger";

	// Verify that General ledger tab is selected
	Tester.Assert('General ledger tab selected', result);
}

/**
 * Opens Currencies list and finds USD there, then checks the description of the selected currency.
 */
function CheckCurrency()
{
	// Open currency table
	SeS('Tree').DoClickNode("General ledger;Setup;Currency;Currencies");
	
	var pd = SeS('Page_down');
	if (pd)
	{
		// Scroll whole view down
		SeS('Page_down').DoClick();
	}
	
	// Select USD from the grid
	SeS('Grid').DoClickCell("USD", 0);
	
	var pu = SeS('Page_up');
	if (pu)
	{
		// Scroll whole view up
		SeS('Page_up').DoClick();
	}
	
	// Click on description field
	SeS('Name').DoLClick(39, 16);
	
	// Wait a bit to give the viewer a chance to see what happens
	Global.DoSleep(1000);
	
	// Verify description
	var description = SeS('Name').GetValue();
	Tester.Assert('USD descrition is "US Dollar"', description == "US Dollar");
	
	// Close the window
	SeS('Close').DoAction();
	
	// Wait until it is completely closed
	Global.DoSleep(1000);
}

/**
 * Navigates to Main accounts using address bar.
 */
function OpenMainAccounts()
{
	var address = SeS('AddressBarContainer').GetText();
	// Print current address to the report
	Tester.Message("Address: " + address);
	
	// Extract company name from the address
	var pos = address.indexOf('/');
	var company = address.substring(0, pos);
	Tester.Message("Company: " + company);
	
	// Navigate to Main accounts
	SeS('AddressBarContainer').DoSetText(company + "/General ledger/Common/Main accounts");
}

/**
 * Prints column names of the Main accounts grid
 */
function CheckGridColumns()
{
	// Get number of columns
	var columnCount = SeS('Grid1').GetColumnCount();
	Tester.Message("Main accounts grid has " + columnCount + " columns");
	
	// Iterate thtough column array
	for(var i = 0; i < columnCount; i++)
	{
		// Print column name
		var columnName = SeS('Grid1').GetColumnName(i);
		Tester.Message("Column: " + columnName);
	}
}
