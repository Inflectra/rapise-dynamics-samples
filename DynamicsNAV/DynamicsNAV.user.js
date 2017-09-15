//Put your custom functions and variables in this file


/** @scenario GridCheck*/
function GridCheck()
{	
	var grid = SeS('DataGridView1');
	
	var cell = grid.GetCell(3, "Name");
	Tester.Message(cell);
	
	var colValues = grid.GetColumnValues(2, 10);
	Tester.Message(colValues.join(','));
	
	grid.DoClickCell("Bilabankinn", "Name");
	grid.DoClickColumn(1);
	grid.DoClickColumn("Name");
		
	var rowCount = grid.GetRowCount();
	Tester.Message(rowCount);
	
	var colCount = grid.GetColumnCount();
	Tester.Message(colCount);
	for(var i = 0; i < colCount; i++)
	{
		var colName = grid.GetColumnName(i);
		Tester.Message("\"" + colName + "\"");
		var colIndex = grid.GetColumnIndex(colName);
		Tester.Message(colIndex);
	}
}
