import {Language} from "./Language";

export interface BaseImage {
    id: number;
    type: string;
    languageId: number;
    language: Language;
    createdAt: Date;
}
