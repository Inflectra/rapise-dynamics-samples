//Put your custom functions and variables in this file


var invoicesToPost = [];

/** @scenario SendMail*/
function SendNotification(/**string*/ invoiceNumber)
{
	File.Write("body.txt", "Internal Invoice Number: " + invoiceNumber);
	Math.random
	var cmdLine = "sendEmail.cmd \"Posted - Invoice No " + invoiceNumber + "\"";
	Tester.Message(cmdLine);
	var wsh = new ActiveXObject("WScript.Shell");
  	var errCode = wsh.Run(cmdLine, 2, true);	
	Tester.Assert('Message sent: ', errCode == 0)

}
