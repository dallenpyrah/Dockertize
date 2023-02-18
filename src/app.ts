import { intro, outro } from '@clack/prompts';
import {UserResponseType} from "./types/UserResponseType";
import {askProjectFrameworkQuestion, askProjectLanguageQuestion} from "./managers/QuestionManager";
import {getProjectFrameworks, getProjectLanguages} from "./managers/QuestionOptionsManager";

async function main() {
    intro('DockerIt Started');

    const userResponse = {} as UserResponseType;

    const projectOptions = getProjectLanguages();
    userResponse.language = <string>await askProjectLanguageQuestion();

    const frameworkOptions = getProjectFrameworks(userResponse.language)
    userResponse.framework = <string>await askProjectFrameworkQuestion(frameworkOptions);

    console.log('\nGenerated Dockerfile:\n');

    outro('Dockerfile generated, you are all set!');
}

main().catch(console.error);
