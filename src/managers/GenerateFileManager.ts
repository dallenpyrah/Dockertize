import {IGenerateFileManager} from "../interfaces/managers/IGenerateFileManager";
import {writeFile} from "fs";
import {injectable} from "inversify";

@injectable()
export class GenerateFileManager implements IGenerateFileManager {
    async createDockerFileFromString(createDockerFileCompletion: string | undefined): Promise<string> {
        const currentDir = process.cwd();
        const filePath = `${currentDir}/Dockerfile`;

        if (createDockerFileCompletion != undefined) {
            await writeFile(filePath, createDockerFileCompletion, (error) => {
                if (error) {
                    console.error('Error creating file:', error);
                }
            });
        }

        return filePath
    }

}
