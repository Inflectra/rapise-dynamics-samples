//Put your custom functions and variables in this file

function TableHasValueInColumn(/**objectid*/ objId, /**string*/ columnName, /**string*/ value)
{
	var grid = SeS(objId);
	if (grid)
	{
		var columnIndex = grid.GetColumnIndex(columnName);
		var values = grid.GetColumnValues(columnIndex);
		if (values)
		{
			for(var i = 0; i < values.length; i++)
			{
				if (values[i] == value)
				{
					return true;
				}
			}
		}
	}
	return false;
}

function GenerateGUID() 
{
	function s4() 
	{
		return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	s4() + '-' + s4() + s4() + s4();
}

function ExpandDropdown(/**objectid*/ objId)
{
	var obj = SeS(objId);
	if (obj)
	{
		obj.DoClick(obj.GetWidth() - 10);
	}
}

var vendors = {};
function VendorProcessed(/**string*/ vendor)
{
	if (typeof(vendors[vendor]) == "undefined")
	{
		vendors[vendor] = 1;
		return false;
	}
	return true;
}

var genres = {};
function GenreProcessed(/**string*/ genre)
{
	if (typeof(genres[genre]) == "undefined")
	{
		genres[genre] = 1;
		return false;
	}
	return true;
}