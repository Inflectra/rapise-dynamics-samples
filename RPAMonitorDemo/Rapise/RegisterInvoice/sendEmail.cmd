call sendemail.exe -s smtp.office365.com:587 -o tls=yes message-file=body.txt -xu username -xp password -f fromuser -t touser -u %1 -a %2 %3 %4 %5
