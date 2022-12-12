
try {
	node cron.js 
} catch {
	Write-Error $_	
}

Write-Host "Node.js script terminated."