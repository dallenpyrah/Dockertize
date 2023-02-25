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
    async askEntryPointQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What is the entry point for your project?',
            validate: (input: string) => {
                if (!input) {
                    return 'Entry point cannot be left blank';
                }
                return undefined;
            },
        });

        return response.trim();
    }

    async askPortsQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What port(s) does your application listen on?',
            validate: (input: string) => {
                if (!input) {
                    return 'Port(s) cannot be left blank';
                }
                return undefined;
            },
        });

        return response.trim();
    }

    async askEnvironmentVariablesQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What environment variables does your application use? (comma delimited list)',
            validate: (input: string) => {
                if (!input) {
                    return 'Environment variables list cannot be left blank';
                }
                return undefined;
            },
        });

        return response.trim();
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
