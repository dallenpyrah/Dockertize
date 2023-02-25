import { injectable, inject } from 'inversify';
import {multiselect, select, text} from '@clack/prompts';
import { SelectOptionsType } from '../types/SelectOptionsType';
import { IQuestionManager } from '../interfaces/managers/IQuestionManager';

@injectable()
export class QuestionManager implements IQuestionManager {
    async askBaseImageQuestion(selectOptions: SelectOptionsType[]): Promise<string> {
        const response = <string> await select({
            message: 'What base image do you want to use?',
            options: selectOptions
        })

        return response.trim();
    }
    async askDependenciesQuestion(dependencyOptions: SelectOptionsType[]): Promise<string> {
        const response = await multiselect({
            message: 'What dependencies are you using?',
            options: dependencyOptions
        })

        return response.toString().trim()
    }
    askEntryPointQuestion(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    askPortsQuestion(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    askEnvironmentVariablesQuestion(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async askProjectLanguageQuestion(projectOptions: SelectOptionsType[]): Promise<string> {
        const response = <string> await select({
            message: 'What language is your project written in?',
            options: projectOptions
        });
        return response.trim();
    }

    async askCopyFilesQuestion(): Promise<string> {
        const response = <string> await text({
            message: 'Which files/folders do you want to copy into the Docker container? (comma delimited list)',
            validate: (input: string) => {
                if (!input) {
                    return 'Files/folders list cannot be left blank';
                }
                return undefined;
            },
        });
        return response.trim();
    }
}
