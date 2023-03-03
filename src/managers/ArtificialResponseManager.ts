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
        const response =  await openai.createChatCompletion({
             model: "gpt-3.5-turbo",
             messages: [
                    {
                        role: "user",
                        content: createDockerFilePrompt,
                    }
                ],
             max_tokens: 3500,
             n: 1,
             temperature: 0.3,
         });

        return response.data.choices[0].message?.content.trimLeft();
    }


}
