import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionOptionsManager {
   getLanguageSelectOptions(): SelectOptionsType[],
   getBaseImageSelectOptions(language: string): SelectOptionsType[],
    getDependencyOptions(language: string): SelectOptionsType[],
}
