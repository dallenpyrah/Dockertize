import {IPromptGenerationManager} from "../interfaces/managers/IPromptGenerationManager";
import {injectable} from "inversify";
import {UserResponseType} from "../types/UserResponseType";

@injectable()
export class PromptGenerationManager implements IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string {
        return `Please generate a Dockerfile for a project written in ${userResponse.language}, using ${userResponse.baseImage} as the base image.
            Please include the following ports in the Dockerfile: ${userResponse.ports}, if equal to N/A do not specify a port.
            Please set the following environment variables ONLY IF it is not equal to N/A: ${userResponse.environmentVariables}, if equal to N/A do not add env variables or the ENV keyword.
            Please copy the following files/folders into the Docker container: ${userResponse.copyFiles}, if equal to N/A do not copy any extra files besides what is necessary.
            The entry point for the Docker container should be: ${userResponse.entryPoint}.
            If any values are equal to N/A then that means the user does not want/have anything for that specific question.
            
            Please generate a Dockerfile that meets the following requirements:
            1. It should be optimized for production use.
            2. It should use a multi-stage build to minimize the final image size.
            3. It should include all necessary dependencies and configurations.
            4. It should follow best practices for security and performance.
            5. It should be well-documented and easy to maintain.
            
            Based on the information provided, please generate a Dockerfile that meets the requirements above. If any information is missing, please find the most optimal solution.
            Thank you for your assistance in generating a high-quality Dockerfile for this project.`
    }
}
