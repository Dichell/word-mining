import { translate, translateAlternative, translateExamples } from '../modules/translations/microsoftTranslate';
import { ITranslateData } from '../types';

class TranslationsController {

    constructor() { }

    async text (dataText: ITranslateData) {
        try {
            const data: any = await translate(dataText)
            return data
        }
        catch(e){
            return new Error("translate are not received")
        }
    }

    async alternative (dataText: ITranslateData) {
        try {
            const data: any = await translateAlternative(dataText)
            return data
        }
        catch(e){
            return new Error("alternative translate are not received")
        }
    }

    async examples (dataText: ITranslateData) {
        try {
            const data: any = await translateExamples(dataText)
            return data
        }
        catch(e){
            return new Error("translate examples are not received")
        }
    }
}

export default new TranslationsController
