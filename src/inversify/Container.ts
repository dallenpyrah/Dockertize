import {Container, decorate, injectable} from "inversify";
import {IQuestionManager} from "../interfaces/managers/IQuestionManager";
import { IQuestionOptionsManager } from "../interfaces/managers/IQuestionOptionsManager";
import {QuestionManager} from "../managers/QuestionManager";
import {TYPES} from "./Types";
import {QuestionOptionsManager} from "../managers/QuestionOptionsManager";
import { IQuestionOptionsAccessor } from "../interfaces/accessors/IQuestionOptionsAccessor";
import {QuestionOptionsAccessor} from "../accessors/QuestionOptionsAccessor";
import "reflect-metadata";
import {PrismaClient} from "@prisma/client";
import { IPromptGenerationManager } from "../interfaces/managers/IPromptGenerationManager";
import {PromptGenerationManager} from "../managers/PromptGenerationManager";
import {OpenAIApi} from "openai";
import {openai} from "../config/openai";
import { IArtificialResponseManager } from "../interfaces/managers/IArtificialResponseManager";
import {ArtificialResponseManager} from "../managers/ArtificialResponseManager";
import { IGenerateFileManager } from "../interfaces/managers/IGenerateFileManager";
import {GenerateFileManager} from "../managers/GenerateFileManager";

const prismaClient = new PrismaClient();

const container = new Container()

container.bind<IQuestionManager>(TYPES.QuestionsManager).to(QuestionManager)
container.bind<IQuestionOptionsManager>(TYPES.QuestionOptionsManager).to(QuestionOptionsManager)
container.bind<IQuestionOptionsAccessor>(TYPES.QuestionOptionsAccessor).to(QuestionOptionsAccessor)
container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(prismaClient);
container.bind<IPromptGenerationManager>(TYPES.PromptGenerationManager).to(PromptGenerationManager)
container.bind<OpenAIApi>(TYPES.OpenAI).toConstantValue(openai)
container.bind<IArtificialResponseManager>(TYPES.ArtificialResponseManager).to(ArtificialResponseManager)
container.bind<IGenerateFileManager>(TYPES.GenerateFileManager).to(GenerateFileManager)

export { container }
