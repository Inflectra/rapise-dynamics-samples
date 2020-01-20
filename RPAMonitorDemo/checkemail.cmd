@set MSGFILE=C:\Demo\RPA\replies.json
@set maxbytesize=40

@if exist %MSGFILE% (
    del %MSGFILE%
)

RapiseImapClient.exe /imap:outlook.office365.com /port:993 /user:username /password:password /folder:INBOX /command:list /unread /mark /days:3 /output:%MSGFILE%

@FOR /F "usebackq" %%A IN ('%MSGFILE%') DO @set size=%%~zA

@if %size% LSS 40 (
    echo.File is ^< %maxbytesize% bytes
) else (
    echo.File is ^>= %maxbytesize% bytes
    copy %MSGFILE% c:\Work\Inflectra\Repository\PostInvoice\replies.json
    "C:\Program Files (x86)\Inflectra\Rapise\Bin\RapiseLauncher.exe" -testset:38 -project:8 -minimized
)
