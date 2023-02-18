import {PrismaClient} from "@prisma/client/scripts/default-index";

export const getProjectLanguages = async (prisma: PrismaClient): Promise<any> => {
    try {
        return prisma.language.findMany();
    } catch (e) {
        console.log(e)
    } finally {
        await prisma.$disconnect()
    }
}
