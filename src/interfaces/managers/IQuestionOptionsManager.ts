import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionOptionsManager {
   getLanguageSelectOptions(): Promise<SelectOptionsType[]>,
    getFrameworkSelectOptionsByLanguageType(language: string): Promise<SelectOptionsType[]>
}
