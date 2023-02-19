export interface IGenerateFileManager {
    createDockerFileFromString(createDockerFileCompletion: string | undefined): Promise<string>
}
