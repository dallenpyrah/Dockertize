import {Language} from "./Language";

export type Dependency = {
    id: number;
    name: string;
    languageId: number;
    language: Language;
    createdAt: Date;
}
