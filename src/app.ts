#!/usr/bin/env node
import "reflect-metadata";
import {intro, outro, spinner} from '@clack/prompts';
import {UserResponseType} from "./types/UserResponseType";
import {container} from "./inversify/Container";
import {IQuestionManager} from "./interfaces/managers/IQuestionManager";
import {TYPES} from "./inversify/Types";
import { IQuestionOptionsManager } from './interfaces/managers/IQuestionOptionsManager';
import {IPromptGenerationManager} from "./interfaces/managers/IPromptGenerationManager";
import { IArtificialResponseManager } from "./interfaces/managers/IArtificialResponseManager";
import { IGenerateFileManager } from "./interfaces/managers/IGenerateFileManager";

const questionsManager = container.get<IQuestionManager>(TYPES.QuestionsManager);
const questionOptionsManager = container.get<IQuestionOptionsManager>(TYPES.QuestionOptionsManager)
const promptGenerationManager = container.get<IPromptGenerationManager>(TYPES.PromptGenerationManager)
const artificialResponseManager = container.get<IArtificialResponseManager>(TYPES.ArtificialResponseManager)
const generateFileManager = container.get<IGenerateFileManager>(TYPES.GenerateFileManager)
const spin = spinner();

async function main() {
    try {
        intro('Starting Dockertize...')

        const userResponse = {} as UserResponseType;

        const languageOptions = questionOptionsManager.getLanguageSelectOptions();
        userResponse.language = await questionsManager.askProjectLanguageQuestion(languageOptions);

        const baseImages = questionOptionsManager.getBaseImageSelectOptions(userResponse.language);
        userResponse.baseImage = await questionsManager.askBaseImageQuestion(baseImages);

        userResponse.entryPoint = await questionsManager.askEntryPointQuestion();
        userResponse.ports = await questionsManager.askPortsQuestion();

        userResponse.environmentVariables = await questionsManager.askEnvironmentVariablesQuestion();
        userResponse.copyFiles = await questionsManager.askCopyFilesQuestion();

        spin.start('Generating Dockerfile')

        const createDockerFilePrompt = promptGenerationManager.generateCreateDockerFilePrompt(userResponse);
        const createDockerFileCompletion = await artificialResponseManager.generateDockerFileFromPrompt(createDockerFilePrompt);
        const filePath = await generateFileManager.createDockerFileFromString(createDockerFileCompletion);

        spin.stop('Dockerfile Generated')

        outro(filePath)
    } catch (e) {
        console.error(e)
        spin.stop('There was an error while generating your Dockerfile. Please try again.')
    }
}

main().then()
