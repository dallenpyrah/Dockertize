import { IQuestionOptionsAccessor } from "../interfaces/accessors/IQuestionOptionsAccessor";
import {inject, injectable} from "inversify";
import {Language} from "../types/Language";
import {BaseImage} from "../types/BaseImage";
import {Dependency} from "../types/Dependency";
import languagesData from "../data/database.json";

@injectable()
export class QuestionOptionsAccessor implements IQuestionOptionsAccessor {
    getBaseImagesByLanguageName(language: string): BaseImage[] {
        const lang = languagesData.languages.find((lang) => lang.language === language);
        if (!lang) {
            return [];
        }
        return lang.baseImages as unknown as BaseImage[];
    }

    getDependenciesByLanguageName(language: string): Dependency[] {
        const lang = languagesData.languages.find((lang) => lang.language === language);
        if (!lang) {
            return [];
        }
        return lang.dependencies as unknown as Dependency[];
    }

    getLanguages(): Language[] {
        return languagesData.languages as unknown as Language[]
    }
}
