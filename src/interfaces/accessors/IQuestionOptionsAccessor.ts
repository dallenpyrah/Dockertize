import {Framework, Language} from "@prisma/client";

export interface IQuestionOptionsAccessor {
    getLanguages(): Promise<Language[]>
    getFrameworksByLanguageType(language: string): Promise<Framework[]>
}
