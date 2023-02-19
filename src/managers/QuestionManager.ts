import { injectable, inject } from 'inversify';
import { select } from '@clack/prompts';
import { SelectOptionsType } from '../types/SelectOptionsType';
import { IQuestionManager } from '../interfaces/managers/IQuestionManager';

@injectable()
export class QuestionManager implements IQuestionManager {
    async askProjectFrameworkQuestion(frameworkOptions: SelectOptionsType[]): Promise<string | symbol> {
        return await select({
            message: 'What framework is your project using?',
            options: frameworkOptions,
        });
    }

    async askProjectLanguageQuestion(projectOptions: SelectOptionsType[]): Promise<string | symbol> {
        return await select({
            message: 'What language is your project written in?',
            options: projectOptions,
        });
    }
}
