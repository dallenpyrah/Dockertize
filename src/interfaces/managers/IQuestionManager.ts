import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionManager {
    askProjectLanguageQuestion(projectOptions: SelectOptionsType[]) : Promise<string>
    askProjectFrameworkQuestion(frameworkOptions: SelectOptionsType[]) : Promise<string>
    askLanguageVersionQuestion(): Promise<string>
    askWorkingDirectoryQuestion():  Promise<string>
    askCopyFilesQuestion(): Promise<string>
    askExposedPortsQuestion(): Promise<string>
    askFrameworkVersionQuestion(): Promise<string>;
}
