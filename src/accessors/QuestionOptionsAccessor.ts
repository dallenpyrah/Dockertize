import {BaseImage, Dependency, Language} from "@prisma/client";
import {PrismaClient} from "@prisma/client";
import {IQuestionOptionsAccessor} from "../interfaces/accessors/IQuestionOptionsAccessor";
import {inject, injectable} from "inversify";
import {TYPES} from "../inversify/Types";

@injectable()
export class QuestionOptionsAccessor implements IQuestionOptionsAccessor {
    private readonly prisma: PrismaClient;

    constructor(@inject(TYPES.PrismaClient) prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async getLanguages(): Promise<Language[]> {
        return await this.prisma.language.findMany();
    }

    async getBaseImagesByLanguageName(language: string): Promise<BaseImage[]> {
        return await this.prisma.baseImage.findMany({
            where : {
                language: {
                    language
                }
            }
        })
    }

    async getDependenciesByLanguageName(language: string): Promise<Dependency[]> {
        return await this.prisma.dependency.findMany({
            where : {
                language: {
                    language
                }
            }
        })
    }
}
