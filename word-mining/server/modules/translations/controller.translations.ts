import { Request, Response } from 'express';
import { translate, translateAlternative } from './microsoftTranslate';

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
                console.warn(`'translateText' - finish (${response[0].text})`)
                return res.status(200).json({data: response, status: "ok", message: ""})
            }
            catch(e){
                console.warn("'translateText' - error: ", e)
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
                console.warn(`'translateAlternative' - finish (${response.data})`)
                return res.status(200).json({data: response.data[0].translations, status: "ok", message: ""})
            }
            catch(e){
                console.warn("'translateAlternative' - error: ", e)
                return res.status(400).json({status: "error", message:"translate no received"})
            }
    }
}

export default new TranslationsController()