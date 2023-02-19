import {IPromptGenerationManager} from "../interfaces/managers/IPromptGenerationManager";
import {injectable} from "inversify";
import {UserResponseType} from "../types/UserResponseType";

@injectable()
export class PromptGenerationManager implements IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string {
        return `You need to create a Dockerfile for a web application that can be run in a Docker container. The application can be written in any language and can use any framework.\n\n` +
            `The Dockerfile should be designed to work with the latest version of the language runtime or framework. The application should be installed and built using the package manager or build tools recommended for the language or framework.\n` +
            `The application code should be placed in the ${userResponse.workingDirectory} directory of the container, and the container should expose any necessary ports for the application to function correctly. When the container starts, it should run the command required to start the web application.\n\n` +
            `Please generate a Dockerfile for a ${userResponse.language} project with the following specifications:\n` +
            `Framework: ${userResponse.framework}\n` +
            `Framework Version: ${userResponse.frameworkVersion}\n` +
            `Exposed Ports: ${userResponse.exposedPorts}\n\n` +
            `Please use OpenAI's GPT-3 model to generate the Dockerfile.\n`;
    }
}
