import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionManager {
    askProjectLanguageQuestion(projectOptions: SelectOptionsType[]) : Promise<string | symbol>
    askProjectFrameworkQuestion(frameworkOptions: SelectOptionsType[]) : Promise<string | symbol>
}
