import {Framework, Language} from "@prisma/client";
import {PrismaClient} from "@prisma/client";
import {IQuestionOptionsAccessor} from "../interfaces/accessors/IQuestionOptionsAccessor";
import {inject, injectable} from "inversify";
import {TYPES} from "../inversify/Types";

@injectable()
export class QuestionOptionsAccessor implements IQuestionOptionsAccessor{
    private readonly prisma: PrismaClient;

    constructor(@inject(TYPES.PrismaClient)prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async getLanguages(): Promise<Language[]>{
        return await this.prisma.language.findMany();
    }

    async getFrameworksByLanguageType(language: string): Promise<Framework[]> {
        return await this.prisma.framework.findMany({
            where: {
                language: {
                    language
                }
            }
        });
    }
}
