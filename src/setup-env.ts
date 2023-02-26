import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your OpenAI API key: ', (openaiApiKey) => {
    rl.question('Enter your database URL: ', (databaseUrl) => {
        const envData = `OPENAI_API_KEY=${openaiApiKey}\nDATABASE_URL=${databaseUrl}`;
        fs.writeFileSync('.env', envData);
        console.log('Environment variables set!');
        rl.close();
    });
});
