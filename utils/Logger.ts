import fs from 'fs';
import path from 'path';

export function logLocal({ message, label = 'INFO' }: { message: any, label?: string }) {
    const now = new Date();

    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // เดือนต้อง +1 เพราะเริ่มที่ 0
    const date = String(now.getUTCDate()).padStart(2, '0');
    const timestampFile = `${year}-${month}-${date}`;
    
    const timestamp = new Date().toISOString();
    const logMessage = `[${label}] ${timestamp} - ${JSON.stringify(message)}\n`;
    console.log(logMessage); // Log to console as well

    if (process.env.NODE_ENV === 'production') return ;

    const logDir = path.join(process.cwd(), 'logs');
    const logFile = path.join(logDir, `app_${timestampFile}.log`);

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    

    fs.appendFileSync(logFile, logMessage, 'utf-8');
}
