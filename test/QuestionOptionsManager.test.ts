import {expect} from "chai";
import "reflect-metadata";
import {IQuestionOptionsAccessor} from "../src/interfaces/accessors/IQuestionOptionsAccessor";
import {QuestionOptionsManager} from "../src/managers/QuestionOptionsManager";
import {SelectOptionsType} from "../src/types/SelectOptionsType";
import sinon from "sinon";

describe("QuestionOptionsManager", () => {
    let questionOptionsManager: QuestionOptionsManager;
    let questionOptionsAccessor: IQuestionOptionsAccessor;

    describe("getLanguageSelectOptions", () => {
        it("should return select options for languages", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub().resolves([
                    {language: "english"},
                    {language: "french"}
                ]),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "english"},
                {value: "french"}
            ];

            const actual = await questionOptionsManager.getLanguageSelectOptions();
            expect(actual).to.deep.equal(expected);
        });
    });

    describe("getBaseImageSelectOptions", () => {
        it("should return select options for base images", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub().resolves([
                    {type: "type1"},
                    {type: "type2"}
                ]),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "type1"},
                {value: "type2"}
            ];

            const actual = await questionOptionsManager.getBaseImageSelectOptions("english");
            expect(actual).to.deep.equal(expected);
        });
    });

    describe("getDependencyOptions", () => {
        it("should return select options for dependencies", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub().resolves([
                    {name: "dependency1"},
                    {name: "dependency2"}
                ])
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "N/A"},
                {value: "dependency1"},
                {value: "dependency2"}
            ];

            const actual = await questionOptionsManager.getDependencyOptions("english");
            expect(actual).to.deep.equal(expected);
        });
    });
});
