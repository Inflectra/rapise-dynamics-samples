# RPAMonitorDemo

## How it Works

Watch the [video](https://youtu.be/60MvOc76K5o).

## Prerequisies

- Put contents of this folder into `C:\Demo\RPA`
- Put `Rapise\PostInvoice` and `Rapise\RegisterInvoice` into Spira, create a test set for each created test case. Remember project id and test set ids. Update `processinvoice.cmd` and `checkemail.cmd`.
- Spira repository folder should be `c:\Work\Inflectra\Repository`.
- Configure mailbox username/password in `checkemail.cmd`, `Rapise\PostInvoice\sendEmail.cms`
 and `Rapise\RegisterInvoice\sendEmail.cmd`.
- You need a demo instance of Dynamics NAV 2017.
 
## Running

- Start RPA Monitor with `manager.cmd`. Press Start button in RPA Monitor to run agents.
- Copy invoices from `InvoiceArchive` to `Invoices` folder.


