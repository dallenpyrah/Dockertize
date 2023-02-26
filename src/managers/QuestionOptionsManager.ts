import {SelectOptionsType} from "../types/SelectOptionsType";
import {IQuestionOptionsManager} from "../interfaces/managers/IQuestionOptionsManager";
import {IQuestionOptionsAccessor} from "../interfaces/accessors/IQuestionOptionsAccessor";
import {inject, injectable} from "inversify";
import {TYPES} from "../inversify/Types";

@injectable()
export class QuestionOptionsManager implements  IQuestionOptionsManager {
    private questionOptionsAccessor: IQuestionOptionsAccessor;

    constructor(@inject(TYPES.QuestionOptionsAccessor)questionOptionsAccessor: IQuestionOptionsAccessor) {
        this.questionOptionsAccessor = questionOptionsAccessor;
    }

    async getLanguageSelectOptions(): Promise<SelectOptionsType[]> {
        const languages = await this.questionOptionsAccessor.getLanguages();

        const languageSelectOptions = [] as SelectOptionsType[]

        for (let i = 0; i < languages.length; i++){
            const selectOption = {} as SelectOptionsType
            selectOption.value = languages[i].language
            languageSelectOptions.push(selectOption)
        }

        return languageSelectOptions;
    }

    async getBaseImageSelectOptions(language: string): Promise<SelectOptionsType[]> {
        const baseImages = await this.questionOptionsAccessor.getBaseImagesByLanguageName(language);

        const baseImageSelectOptions = [] as SelectOptionsType[]

        for (let i = 0; i < baseImages.length; i++) {
            const selectOption = {} as SelectOptionsType
            selectOption.value = baseImages[i].type
            baseImageSelectOptions.push(selectOption)
        }

        return baseImageSelectOptions;
    }

    async getDependencyOptions(language: string): Promise<SelectOptionsType[]> {
        const dependencies = await this.questionOptionsAccessor.getDependenciesByLanguageName(language);

        const dependencySelectOptions = [] as SelectOptionsType[]
        const noneSelectOption = {} as SelectOptionsType
        noneSelectOption.value = 'N/A'

        dependencySelectOptions.push(noneSelectOption)

        for (let i = 0; i < dependencies.length; i++) {
            const selectOption = {} as SelectOptionsType
            selectOption.value = dependencies[i].name
            dependencySelectOptions.push(selectOption)
        }

        return dependencySelectOptions;
    }

}
