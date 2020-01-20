


function Test(params)
{
	var emails = JSON.parse(File.Read('replies.json'));
	var items = emails.items;
	for(var i = 0; i < items.length; i++)
	{
		var item = items[i];
		var subject = item.subject;
		var body = item.body;
		var prefix = "Re: Invoice No ";
		
		if (subject.indexOf(prefix) == 0 && body.toLowerCase().indexOf("yes") != -1)
		{
			var invoiceNumber = subject.replace(prefix, "");
			invoicesToPost.push(invoiceNumber);
		}
	}

	if (invoicesToPost.length > 0)
	{
		RVL.DoPlayScript("Main.rvl.xlsx", "RVL");
	}
	else
	{
		Tester.Assert("Nothing to process", true);
	}
}

g_load_libraries=["UIAutomation", "DynamicsNAV"];


