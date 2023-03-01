#!/usr/bin/env node
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your OpenAI API key: ', (openaiApiKey) => {
    const envData = `OPENAI_API_KEY=${openaiApiKey}`;
    fs.writeFileSync('.env', envData);
    console.log('Environment variable set!');
    rl.close();
});
