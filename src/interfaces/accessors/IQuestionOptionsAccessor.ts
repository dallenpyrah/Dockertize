import {BaseImage, Dependency, Language} from "@prisma/client"


export interface IQuestionOptionsAccessor {
    getLanguages(): Promise<Language[]>
    getBaseImagesByLanguageName(language: string): Promise<BaseImage[]>
    getDependenciesByLanguageName(language: string): Promise<Dependency[]>
}
