import { Router } from "express";
import { Request, Response } from 'express';
import { ITranslateData } from "../types";
import TranslationsController from '../controllers/controller.translations'

class Translations {
    router: Router;
    constructor(){
        this.router = Router();
        this.creteRoutes();
    }
    private creteRoutes(){
        this.router.post("/text", this.translateText)
        this.router.post('/alternative', this.translateAlternative)
        this.router.post('/examples', this.translateExamples)
        this.router.post('/history', this.translateHistory)    
    }
    
    translateText = async(req: Request, res: Response) => {
        if(!req.body.textData) return res.status(400).json( {status: "error", message: "body.textData is required"} )
        console.log(`'translateText' - starting (${req.body.textData.text}) ...`)
        try {
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang
            }

            const response: any = await TranslationsController.translateText(dataText)
            console.log(`'translateText' - azure (${response[0].text})`)

            return res.status(200).json( {data: response, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateText' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }
    }
    
    translateAlternative = async (req: Request, res: Response) => {
        if(!req.body.textData) return res.status(400).json( {status: "error", message: "body.textData is required"} )
        console.log(`'translateAlternative' - starting (${req.body.textData.text}) ...`)
        try {
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang
            }
            const response: any = await TranslationsController.translateAlternative(dataText)
            console.log(`'translateAlternative' - finish (${response.data[0]})`)
            return res.status(200).json( {data: response.data[0].translations, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateAlternative' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }
    }
    
    translateExamples = async (req: Request, res: Response) => {
        console.log(`'translateExamples' - starting (${req.body.textData.text}) ...`)
        try {   
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang,
                translation: req.body.textData.translatedText
            }
            const response: any = await TranslationsController.translateExamples(dataText)
            console.log(`'translateExamples' - finish (${response.data[0]})`)
            return res.status(200).json( {data: response.data[0].examples, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateExamples' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }   
    }
    
    translateHistory = async (req: Request, res: Response) => {
        console.log(`'translateExamples' - starting (${req.body.textData.text}) ...`)
            try {
                const dataText: ITranslateData = {
                    text: req.body.textData.text, 
                    source: req.body.textData.sourceLang,
                    target: req.body.textData.targetLang,
                    translation: req.body.textData.translatedText
                }
                const response: any = await TranslationsController.translateExamples(dataText)
                console.log(`'translateExamples' - finish (${response.data[0]})`)
                return res.status(200).json( {data: response.data[0].examples, status: "ok", message: ""} )
            }
            catch(e: any){
                console.warn("'translateExamples' - error")
                return res.status(400).json( {status: "error", message: e.message} )
            }
    }
}

export default new Translations().router