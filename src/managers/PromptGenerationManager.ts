import {IPromptGenerationManager} from "../interfaces/managers/IPromptGenerationManager";
import {injectable} from "inversify";
import {UserResponseType} from "../types/UserResponseType";

@injectable()
export class PromptGenerationManager implements IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string {
        return `Create a Dockerfile for a ${userResponse.language} project.\n\n` +
            `Framework: ${userResponse.framework}\n` +
            `Framework Version: ${userResponse.frameworkVersion}\n` +
            `Working Directory: ${userResponse.workingDirectory}\n` +
            `Exposed Ports: ${userResponse.exposedPorts}\n\n` +
            `Please generate the Dockerfile using OpenAI's GPT-3 model.\n`;
    }
}
