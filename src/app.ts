import "reflect-metadata";
import { intro, outro } from '@clack/prompts';
import {UserResponseType} from "./types/UserResponseType";
import {container} from "./inversify/Container";
import {IQuestionManager} from "./interfaces/managers/IQuestionManager";
import {TYPES} from "./inversify/Types";
import { IQuestionOptionsManager } from './interfaces/managers/IQuestionOptionsManager';
import {IPromptGenerationManager} from "./interfaces/managers/IPromptGenerationManager";

const questionsManager = container.get<IQuestionManager>(TYPES.QuestionsManager);
const questionOptionsManager = container.get<IQuestionOptionsManager>(TYPES.QuestionOptionsManager)
const promptGenerationManager = container.get<IPromptGenerationManager>(TYPES.PromptGenerationManager)

async function main() {
    intro('DockerIt Started');

    const userResponse = {} as UserResponseType;

    const projectOptions = await questionOptionsManager.getLanguageSelectOptions();
    userResponse.language = await questionsManager.askProjectLanguageQuestion(projectOptions);

    const frameworkOptions = await questionOptionsManager.getFrameworkSelectOptionsByLanguageType(userResponse.language)
    userResponse.framework = await questionsManager.askProjectFrameworkQuestion(frameworkOptions);
    userResponse.frameworkVersion = await questionsManager.askFrameworkVersionQuestion();

    userResponse.workingDirectory = await questionsManager.askWorkingDirectoryQuestion();
    userResponse.exposedPorts = await  questionsManager.askExposedPortsQuestion()

    const createDockerFilePrompt = promptGenerationManager.generateCreateDockerFilePrompt(userResponse);
    console.log(createDockerFilePrompt)

    console.log('\nGenerated Dockerfile:\n');

    outro('Dockerfile generated, you are all set!');
}

main().catch(console.error);
