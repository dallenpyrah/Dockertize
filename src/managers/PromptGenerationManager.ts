import {IPromptGenerationManager} from "../interfaces/managers/IPromptGenerationManager";
import {injectable} from "inversify";
import {UserResponseType} from "../types/UserResponseType";

@injectable()
export class PromptGenerationManager implements IPromptGenerationManager {
    generateCreateDockerFilePrompt(userResponse: UserResponseType): string {
        return `Please generate a Dockerfile for a project written in ${userResponse.language}, using ${userResponse.baseImage} as the base image.

            The project has the following dependencies: ${userResponse.dependencies}.
            
            Please include the following ports in the Dockerfile: ${userResponse.ports}.
            
            Please set the following environment variables: ${userResponse.environmentVariables}.
            
            Please copy the following files/folders into the Docker container: ${userResponse.copyFiles}.
            
            The entry point for the Docker container should be: ${userResponse.entryPoint}.
            
            Please generate a Dockerfile that meets the following requirements:
            1. It should be optimized for production use.
            2. It should use a multi-stage build to minimize the final image size.
            3. It should include all necessary dependencies and configurations.
            4. It should follow best practices for security and performance.
            5. It should be well-documented and easy to maintain.
            
            Based on the information provided, please generate a Dockerfile that meets the requirements above. If any information is missing, please find the most optimal solution.
            
            If environment variables are specified, please pull the values from the given environment variable file, pull the file into the Docker container and reference it so the values are not exposed in the Dockerfile.
            
            Please make sure the start of the generated Dockerfile begins on line 1 and that the environment variables are set correctly and the .env file is included in the Docker container. You can use the COPY command in your Dockerfile to copy the .env file to the container and the ENV command to set the environment variables.
            
            Thank you for your assistance in generating a high-quality Dockerfile for this project.`
    }
}
