import {IArtificialResponseManager} from "../interfaces/managers/IArtificialResponseManager";
import {inject, injectable} from "inversify";
import {OpenAIApi} from "openai";
import {TYPES} from "../inversify/Types";
import {openai} from "../config/openai";

@injectable()
export class ArtificialResponseManager implements IArtificialResponseManager{
    private openai: OpenAIApi;

    constructor(@inject(TYPES.OpenAI)openai: OpenAIApi) {
        this.openai = openai;
    }

    async generateDockerFileFromPrompt(createDockerFilePrompt: string): Promise<string | undefined> {
        const response =  await openai.createCompletion({
             model: "text-davinci-003",
             prompt: createDockerFilePrompt,
             max_tokens: 1024,
             n: 1,
             temperature: 0.5,
         });

        console.log(response.data)

        return response.data.choices[0].text;
    }


}
