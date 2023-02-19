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

    async getFrameworkSelectOptionsByLanguageType(language: string): Promise<SelectOptionsType[]>  {
        const frameworks = await this.questionOptionsAccessor.getFrameworksByLanguageType(language);

        let frameworkSelectOptions = [] as SelectOptionsType[]

        for(let i = 0; i < frameworks.length; i++){
            let selectOption = {} as SelectOptionsType;
            selectOption.value = frameworks[i].framework
            frameworkSelectOptions.push(selectOption)
        }

        const notApplicableOption = { value: 'N/A' } as SelectOptionsType
        frameworkSelectOptions.push(notApplicableOption)

        return frameworkSelectOptions;
    }

    async getLanguageSelectOptions(): Promise<SelectOptionsType[]> {
        const languages = await this.questionOptionsAccessor.getLanguages();

        let languageSelectOptions = [] as SelectOptionsType[]

        for (let i = 0; i < languages.length; i++){
            let selectOption = {} as SelectOptionsType
            selectOption.value = languages[i].language
            languageSelectOptions.push(selectOption)
        }

        return languageSelectOptions;
    }

}
