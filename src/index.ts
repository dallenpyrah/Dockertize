import { intro, outro, select, text } from '@clack/prompts';

async function main() {
    intro('Dockerfile Generator');

    const baseImage = await getBaseImage();
    const exposePort = await getExposedPort();
    const entryPoint = await getEntryPoint();

    const dockerfile = generateDockerfile(baseImage, exposePort, entryPoint);

    console.log('\nGenerated Dockerfile:\n');
    console.log(dockerfile);

    outro('Dockerfile generated, you are all set!');
}

async function getBaseImage() {
    return await select({
        message: 'Select a base image for your Dockerfile:',
        options: [
            { value: 'node:latest', label: 'Node.js (latest)' },
            { value: 'node:14', label: 'Node.js (v14)' },
            { value: 'python:latest', label: 'Python (latest)' },
            { value: 'python:3.9', label: 'Python (v3.9)' },
        ],
    });
}

async function getExposedPort() {
    return await text({
        message: 'Enter the port number to expose in the Dockerfile:',
        initialValue: '3000',
    });
}

async function getEntryPoint() {
    return await text({
        message: 'Enter the entry point for the Dockerfile:',
        initialValue: 'npm start',
    });
}

function generateDockerfile(baseImage: symbol | string, exposePort: string | symbol, entryPoint: string | symbol) {
    return `FROM ${String(baseImage)}
            EXPOSE ${String(exposePort)}
            WORKDIR /app
            COPY . .
            CMD ${String(entryPoint)}`;
}

main().catch(console.error);
