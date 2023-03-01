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
        const optionsWithOther = [...dependencyOptions, { title: 'Other', value: 'other' }];
        const response = <string[]>await multiselect({
            message: 'Are there any additional dependencies you need installed in your container?',
            options: optionsWithOther,
        });

        const selectedValues = response.map((value) => value);

        if (selectedValues.includes('other')) {
            const customResponse = <string>await text({
                message: 'Please enter any additional dependencies you need installed (comma delimited list):',
                validate: (input: string) => {
                    if (!input) {
                        return 'Dependencies list cannot be left blank';
                    }
                    return undefined;
                },
            });

            return `${selectedValues.filter((value) => value !== 'other').join(', ')}, ${customResponse.trim()}`;
        }

        return selectedValues.join(', ').trim();
    }

    async askEntryPointQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What is the command to start your project?',
            validate: (input: string) => {
                if (input.trim() === '') {
                    return 'Command cannot be left blank';
                }
                return undefined;
            },
        });

        return response.trim();
    }

    async askPortsQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What port(s) does your application listen on?',
            defaultValue: 'N/A',
        });

        return response.trim();
    }

    async askEnvironmentVariablesQuestion(): Promise<string> {
        const response = <string>await text({
            message: 'What environment variables does your application use? (comma delimited list)',
            defaultValue: 'N/A',
        });

        return response.trim() === 'N/A' ? '' : response.trim();
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
            defaultValue: 'N/A',
        });
        return response.trim();
    }
}
