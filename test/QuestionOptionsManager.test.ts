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
        it("should return empty array if no languages", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub().returns([]),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [];

            const actual = questionOptionsManager.getLanguageSelectOptions();
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for languages", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub().returns([
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

            const actual = questionOptionsManager.getLanguageSelectOptions();
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for languages without hints", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub().returns([
                    {language: "english", hint: "hint1"},
                    {language: "french", hint: "hint2"}
                ]),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "english"},
                {value: "french"}
            ];

            const actual = questionOptionsManager.getLanguageSelectOptions();
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for languages without labels", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub().returns([
                    {language: "english", label: "label1"},
                    {language: "french", label: "label2"}
                ]),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "english"},
                {value: "french"}
            ];

            const actual = questionOptionsManager.getLanguageSelectOptions();
            expect(actual).to.deep.equal(expected);
        });
    });

    describe("getBaseImageSelectOptions", () => {
        it('should return empty array if no base images exist', async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub().returns([]),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [];

            const actual = questionOptionsManager.getBaseImageSelectOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for base images", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub().returns([
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

            const actual = questionOptionsManager.getBaseImageSelectOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for base images without hints", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub().returns([
                    {type: "type1", hint: "hint1"},
                    {type: "type2", hint: "hint2"}
                ]),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "type1"},
                {value: "type2"}
            ];

            const actual = questionOptionsManager.getBaseImageSelectOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for base images without labels", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub().returns([
                    {type: "type1", label: "label1"},
                    {type: "type2", label: "label2"}
                ]),
                getDependenciesByLanguageName: sinon.stub()
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "type1"},
                {value: "type2"}
            ];

            const actual = questionOptionsManager.getBaseImageSelectOptions("english");
            expect(actual).to.deep.equal(expected);
        });
    });

    describe("getDependencyOptions", () => {
        it('should return N/A if no dependencies exist', async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub().returns([])
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "N/A"}
            ];

            const actual = questionOptionsManager.getDependencyOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for dependencies", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub().returns([
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

            const actual = questionOptionsManager.getDependencyOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for dependencies without hints", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub().returns([
                    {name: "dependency1", hint: "hint1"},
                    {name: "dependency2", hint: "hint2"}
                ])
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "N/A"},
                {value: "dependency1"},
                {value: "dependency2"}
            ];

            const actual = questionOptionsManager.getDependencyOptions("english");
            expect(actual).to.deep.equal(expected);
        });

        it("should return select options for dependencies without labels", async () => {
            questionOptionsAccessor = {
                getLanguages: sinon.stub(),
                getBaseImagesByLanguageName: sinon.stub(),
                getDependenciesByLanguageName: sinon.stub().returns([
                    {name: "dependency1", label: "label1"},
                    {name: "dependency2", label: "label2"}
                ])
            }

            questionOptionsManager = new QuestionOptionsManager(questionOptionsAccessor);

            const expected: SelectOptionsType[] = [
                {value: "N/A"},
                {value: "dependency1"},
                {value: "dependency2"}
            ];

            const actual = questionOptionsManager.getDependencyOptions("english");
            expect(actual).to.deep.equal(expected);
        });
    });
});
