import {select} from "@clack/prompts";
import {SelectOptionsType} from "../types/SelectOptionsType";

export const askProjectLanguageQuestion = async (projectOptions: [SelectOptionsType]) : Promise<string | symbol> => {
    return await select({
        message: 'What language is your project written in?',
        options: projectOptions
    });
}

export const askProjectFrameworkQuestion = async (frameworkOptions: [SelectOptionsType]) : Promise<string | symbol> => {
    return await select({
        message: 'What framework is your project using?',
        options: frameworkOptions
    })
}

