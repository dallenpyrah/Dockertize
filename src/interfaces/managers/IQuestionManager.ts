import {SelectOptionsType} from "../../types/SelectOptionsType";

export interface IQuestionManager {
    askBaseImageQuestion(language: any): Promise<any>;
    askDependenciesQuestion(dependencyOptions: SelectOptionsType[]): Promise<any>;
    askEntryPointQuestion(): Promise<any>;
    askPortsQuestion(): Promise<any>;
    askEnvironmentVariablesQuestion(): Promise<any>;
    askCopyFilesQuestion(): Promise<string>;
    askProjectLanguageQuestion(languageOptions: SelectOptionsType[]): Promise<any>;
}
