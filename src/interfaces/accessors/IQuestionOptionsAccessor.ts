import {Language} from "../../types/Language";
import {BaseImage} from "../../types/BaseImage";
import {Dependency} from "../../types/Dependency";

export interface IQuestionOptionsAccessor {
    getLanguages(): Language[]
    getBaseImagesByLanguageName(language: string): BaseImage[]
    getDependenciesByLanguageName(language: string): Dependency[]
}
