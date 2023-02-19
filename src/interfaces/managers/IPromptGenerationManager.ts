import {UserResponseType} from "../../types/UserResponseType";

export interface IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string;
}
