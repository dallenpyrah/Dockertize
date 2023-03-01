import {BaseImage} from "./BaseImage";
import {Dependency} from "./Dependency";

export type Language = {
    id: number;
    language: string;
    baseImages: BaseImage[];
    dependencies: Dependency[];
    createdAt: Date;
}
