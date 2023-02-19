import "reflect-metadata";
import { intro, outro } from '@clack/prompts';
import {UserResponseType} from "./types/UserResponseType";
import {container} from "./inversify/Container";
import {IQuestionManager} from "./interfaces/managers/IQuestionManager";
import {TYPES} from "./inversify/Types";
import { IQuestionOptionsManager } from './interfaces/managers/IQuestionOptionsManager';

const questionsManager = container.get<IQuestionManager>(TYPES.QuestionsManager);
const questionOptionsManager = container.get<IQuestionOptionsManager>(TYPES.QuestionOptionsManager)

async function main() {
    intro('DockerIt Started');

    const userResponse = {} as UserResponseType;

    const projectOptions = await questionOptionsManager.getLanguageSelectOptions();
    userResponse.language = <string>await questionsManager.askProjectLanguageQuestion(projectOptions);

    const frameworkOptions = await questionOptionsManager.getFrameworkSelectOptionsByLanguageType(userResponse.language)
    userResponse.framework = <string>await questionsManager.askProjectFrameworkQuestion(frameworkOptions);

    console.log('\nGenerated Dockerfile:\n');

    outro('Dockerfile generated, you are all set!');
}

main().catch(console.error);
