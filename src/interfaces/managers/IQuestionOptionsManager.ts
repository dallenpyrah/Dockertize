import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionOptionsManager {
   getLanguageSelectOptions(): Promise<SelectOptionsType[]>,
   getBaseImageSelectOptions(language: string): Promise<SelectOptionsType[]>,
    getDependencyOptions(language: string): Promise<SelectOptionsType[]>,
}
