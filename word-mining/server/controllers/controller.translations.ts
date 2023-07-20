import { translate, translateAlternative, translateExamples } from '../modules/translations/microsoftTranslate';
import { gptCompletion } from '../modules/openAi/index'
import { ITranslateData } from '../types';

class TranslationsController {

    constructor() { }

    async translateText (dataText: ITranslateData) {
        try {
            const data: any = await translate(dataText)
            return data
        }
        catch(e){
            return new Error("translate are not received")
        }
    }

    async translateExplanation (dataText: ITranslateData) {
        try {
            const data: any = await gptCompletion(dataText)
            return data
        }
        catch(e){
            return new Error("explanation are not received")
        }
    }

    async translateAlternative (dataText: ITranslateData) {
        try {
            const data: any = await translateAlternative(dataText)
            return data
        }
        catch(e){
            return new Error("alternative translate are not received")
        }
    }

    async translateExamples (dataText: ITranslateData) {
        try {
            const data: any = await translateExamples(dataText)
            return data
        }
        catch(e){
            return new Error("translate examples are not received")
        }
    }

    async translateHistory (dataText: ITranslateData) {
        try {
            const data: any = await translateExamples(dataText)
            return data
        }
        catch(e){
            return new Error("translate history are not received")
        }
    }
}

export default new TranslationsController
