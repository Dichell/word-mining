import { Configuration, OpenAIApi } from "openai";
import { config } from "../../config";

const configuration = new Configuration({
    organization: "org-HUn91WUxMWd2U1HhJqsMPPoK",
    apiKey: config.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

enum chatModel {
    textDavinci003 = "text-davinci-003",
    ada = 'ada',
    gpt35Turbo = 'gpt-3.5-turbo',
    curie = 'curie'
}

interface rqConst {
    english: string,
    russian: string
}

const requestConstructor: rqConst = {
    english: 'Meaning of word ',
    russian: 'Значение слова, транскрипция и написание во множественном числе '
}

export const gptCompletion = async (dataText:{text: string, source: string, target: keyof rqConst} ): Promise<string> => {

    try{
        const reqPhrase = requestConstructor[dataText.target] ? requestConstructor[dataText.target] : requestConstructor['english']

        const request = reqPhrase + dataText.text

        console.log(`gptCompletion request; `, request)

        const answer = await openai.createCompletion({
            model: chatModel.textDavinci003,
            prompt: request,
            temperature: 0,
            max_tokens: 200
        });
        return answer.data.choices[0].text ? answer.data.choices[0].text : ''
    }
    catch(e: any){
        console.log(e.response.data.error)
        return `ERROR`
    }

}