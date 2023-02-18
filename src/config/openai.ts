import { Configuration, OpenAIApi } from "openai";
import {config} from 'dotenv'
config();

const configuration = new Configuration({
    organization: "org-ztx4N6SxqcCsZlddThmayfyk",
    apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);
