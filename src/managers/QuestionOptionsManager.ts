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

    getLanguageSelectOptions(): SelectOptionsType[] {
        const languages = this.questionOptionsAccessor.getLanguages();

        const languageSelectOptions = [] as SelectOptionsType[]

        for (let i = 0; i < languages.length; i++){
            const selectOption = {} as SelectOptionsType
            selectOption.value = languages[i].language
            languageSelectOptions.push(selectOption)
        }

        return languageSelectOptions;
    }

    getBaseImageSelectOptions(language: string): SelectOptionsType[] {
        const baseImages = this.questionOptionsAccessor.getBaseImagesByLanguageName(language);

        const baseImageSelectOptions = [] as SelectOptionsType[]

        for (let i = 0; i < baseImages.length; i++) {
            const selectOption = {} as SelectOptionsType
            selectOption.value = baseImages[i].type
            baseImageSelectOptions.push(selectOption)
        }

        return baseImageSelectOptions;
    }

    getDependencyOptions(language: string): SelectOptionsType[] {
        const dependencies = this.questionOptionsAccessor.getDependenciesByLanguageName(language);

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
