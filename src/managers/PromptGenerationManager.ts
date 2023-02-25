import {IPromptGenerationManager} from "../interfaces/managers/IPromptGenerationManager";
import {injectable} from "inversify";
import {UserResponseType} from "../types/UserResponseType";

@injectable()
export class PromptGenerationManager implements IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string {
        return ""
    }
}
