//Put your custom functions and variables in this file


/** @scenario Pdf_GetFullText*/
function Pdf_GetFullText(/**string*/pdfPath)
{
// https://www.pdflib.com/download/tet/
// https://www.pdflib.com/binaries/TET/520/TET-5.2-MSWin32-COM.msi

	var tet = null;
	
	try
	{
		tet = new ActiveXObject("TET_com.TET");
	} catch(e) {
		Tester.Assert('TET library not found. Use links below to download and install', false, [
			new SeSReportLink("https://www.pdflib.com/binaries/TET/520/TET-5.2-MSWin32-COM.msi", "Installable Package"),
			new SeSReportLink("https://www.pdflib.com/download/tet/", "TET Download Page")
		]);
		return "";
	}

	var fulltext = "";
	var globaloptlist ="searchpath={{../data} {../../data}}";
	var pageoptlist = "granularity=page";
	var separator = '\r\n';
	var docoptlist = "";
	
	tet.set_option(globaloptlist);
	var doc = tet.open_document(pdfPath, docoptlist)
	var n_pages = tet.pcos_get_number(doc, "length:pages")

	Log("n_pages: "+n_pages);
	
	for(var pageno=1;pageno<=n_pages;pageno++)
	{
		var page = tet.open_page(doc, pageno, pageoptlist);
		if(page == -1)
		{
			Log("error reading page: "+pageno+" Error: "+tet.get_errnum()+" in "+tet.get_apiname()+" Msg: "+tet.get_errmsg());
		} else {

			do
			{
				var text = tet.get_text(page);
				fulltext += text;
			}
			while(text)

			if( tet.get_errnum() )
			{
				Log("error reading page: "+pageno+" Error: "+tet.get_errnum()+" in "+tet.get_apiname()+" Msg: "+tet.get_errmsg());
			}

		}
		tet.close_page(page);
		
	}
	
	tet.close_document(doc);
	tet = null;
	
	return fulltext;
}

function guid_short() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

/** @scenario SendMail*/
function SendNotificationConfirmationRequired(/**string*/ invoiceNumber, /**sting*/ invoiceFileName)
{
	File.Write("body.txt", "Confirmation required.\r\nInternal Invoice Number: " + invoiceNumber);
	var cmdLine = "sendEmail.cmd \"Invoice No " + invoiceNumber + "\" " + "\"" + invoiceFileName + "\"";
	Tester.Message(cmdLine);
	var wsh = new ActiveXObject("WScript.Shell");
  	var errCode = wsh.Run(cmdLine, 2, true);	
	Tester.Assert('Message sent: ', errCode == 0)
}

/** @scenario SendMail*/
function SendNotificationAutoPosted(/**string*/ invoiceNumber)
{
	File.Write("body.txt", "Internal Invoice Number: " + invoiceNumber);
	var cmdLine = "sendEmail.cmd \"Auto Posted - Invoice No " + invoiceNumber + "\"";
	Tester.Message(cmdLine);
	var wsh = new ActiveXObject("WScript.Shell");
  	var errCode = wsh.Run(cmdLine, 2, true);	
	Tester.Assert('Message sent: ', errCode == 0)
}

var invoiceNumber;
var invoiceDate;
var vendor;
var subject;
var subtotal;

/** @scenario ParseInvoice*/
function ParseInvoice()
{
	var res = false;
	var comment = null;
	
	try
	{
		var invoiceFile = Global.GetFullPath("Invoice.pdf");
		Tester.Message("Processing: " + invoiceFile);
		var text = Pdf_GetFullText(invoiceFile);
		File.Write('Invoice.txt', text);
		Tester.Message(text);
		
		invoiceNumber = guid_short(); //GetLine(text, 5);
		Tester.Message("Invoice No: " + invoiceNumber);
		invoiceDate = GetLine(text, 6);
		Tester.Message("Invoice Date: " + invoiceDate);
		vendor = GetLine(text, 9);
		Tester.Message("Vendor: " + vendor);
		var n = GetLineNumber(text, "Item No.");
		var details = GetLine(text, n + 1);
		subject = details.split(" ")[0];
		Tester.Message("Subject: " + subject);
		subtotal = GetLine(text, n + 2);
		subtotal = subtotal.split(" ")[1];
		Tester.Message("Subtotal: " + subtotal);
		
		if (invoiceNumber && invoiceDate && vendor && subject && subtotal)
		{
			res = true;
		}
	}
	catch(e)
	{
		comment = e.message;
	}
	
	Tester.Assert("Invoice processed", res, comment ? [new SeSReportText(comment)] : null);
}

function GetLine(text, index)
{
	var lines = text.split("\n");
	if (index >= 1 && index <= lines.length)
	{
		return lines[index - 1];
	}
	return "";
}

function GetLineNumber(text, str)
{
	var lines = text.split("\n");
	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i];
		if (line.indexOf(str) != -1)
		{
			return i + 1;
		}
	}
	return -1;
}
