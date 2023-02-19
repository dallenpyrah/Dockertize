import {AxiosResponse} from "axios";

export interface IArtificialResponseManager {
    generateDockerFileFromPrompt(createDockerFilePrompt: string): Promise<string | undefined>
}
