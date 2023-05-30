import { Request, Response } from 'express';
import { translate, translateAlternative, translateExamples } from './microsoftTranslate';

class TranslationsController {

    constructor() { }

    async translateText (req: Request, res: Response) {
        console.log(`'translateText' - starting (${req.body.textData.text}) ...`)
            try {
                const dataText = {
                    text: req.body.textData.text, 
                    source: req.body.textData.sourceLang,
                    target: req.body.textData.targetLang
                }
                if(!dataText){
                    console.log('"/translateText" error: ', "Request data is empty")
                    return res.status(400).json({status: "error", message:"Request data is empty"})
                }
                const response: any = await translate(dataText)
                console.log(`'translateText' - finish (${response[0].text})`)
                return res.status(200).json({data: response, status: "ok", message: ""})
            }
            catch(e){
                console.warn("'translateText' - error")
                return res.status(400).json({status: "error", message:"translate no received"})
            }
    }

    async translateAlternative (req: Request, res: Response) {
        console.log(`'translateAlternative' - starting (${req.body.textData.text}) ...`)
            try {
                const dataText = {
                    text: req.body.textData.text, 
                    source: req.body.textData.sourceLang,
                    target: req.body.textData.targetLang
                }
                if(!dataText){
                    console.log('"/translateAlternative" error: ', "Request data is empty")
                    return res.status(400).json({status: "error", message:"Request data is empty"})
                }
                const response: any = await translateAlternative(dataText)
                console.log(`'translateAlternative' - finish (${response.data[0]})`)
                return res.status(200).json({data: response.data[0].translations, status: "ok", message: ""})
            }
            catch(e){
                console.warn("'translateAlternative' - error")
                return res.status(400).json({status: "error", message:"translate no received"})
            }
    }

    async translateExamples (req: Request, res: Response) {
        console.log(`'translateExamples' - starting (${req.body.textData.text}) ...`)
            try {
                const dataText = {
                    text: req.body.textData.text, 
                    source: req.body.textData.sourceLang,
                    target: req.body.textData.targetLang,
                    translation: req.body.textData.translatedText
                }
                if(!dataText){
                    console.log('"/translateExamples" error: ', "Request data is empty")
                    return res.status(400).json({status: "error", message:"Request data is empty"})
                }
                const response: any = await translateExamples(dataText)
                console.log(`'translateExamples' - finish (${response.data[0]})`)
                return res.status(200).json({data: response.data[0].examples, status: "ok", message: ""})
            }
            catch(e){
                console.warn("'translateExamples' - error")
                return res.status(400).json({status: "error", message:"translate no received"})
            }
    }
}

export default new TranslationsController()