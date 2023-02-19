import { injectable, inject } from 'inversify';
import { select, text } from '@clack/prompts';
import { SelectOptionsType } from '../types/SelectOptionsType';
import { IQuestionManager } from '../interfaces/managers/IQuestionManager';

@injectable()
export class QuestionManager implements IQuestionManager {
    async askLanguageVersionQuestion(): Promise<string> {
        const response = <string> await text({
            message: 'What language version are you using?',
            validate: (input: string) => {
                if (!input) {
                    return 'Language version cannot be left blank';
                }
                return undefined;
            },
        });
        return response.trim();
    }

    async askProjectFrameworkQuestion(frameworkOptions: SelectOptionsType[]): Promise<string> {
        const response = <string> await select({
            message: 'What framework is your project using?',
            options: frameworkOptions
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

    async askWorkingDirectoryQuestion(): Promise<string> {
        const response = <string> await text({
            message: <string> 'What do you want the working directory for your project within the Docker container to be?',
            initialValue: 'app',
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

    async askExposedPortsQuestion(): Promise<string> {
        const response = <string> await text({
            message: 'Which ports do you want to expose from your Docker container? (comma delimited list)',
            validate: (input: string) => {
                if (!input) {
                    return 'Exposed ports list cannot be left blank';
                }
                return undefined;
            },
        });
        return response.trim();
    }

    async askFrameworkVersionQuestion(): Promise<string> {
        const response = <string> await text({
            message: 'What framework version are you using?',
        });
        return response.trim();
    }
}
