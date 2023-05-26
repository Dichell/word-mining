import { Request, Response, NextFunction } from 'express';
import { translateAzure } from './microsoftTranslate';

class TranslationsRoutes {

    constructor() { }

    async translateText (req: Request, res: Response) {
            try {
                const dataText = {
                    text: req.body.textData.text, 
                    target: req.body.textData.targetLang
                }
                if(!dataText){
                    console.log('"/translate" error: ', "Request data is empty")
                    return res.status(400).json({status: "error", message:"Request data is empty"})
                }
                const response = await translateAzure(dataText)
                return res.status(200).json({data: response, status: "ok", message: ""})
            }
            catch(e){
                console.log('"/translate" error: ', e)
                return res.status(400).json({status: "error", message:"translate no received"})
            }
          }
}

export default new TranslationsRoutes()