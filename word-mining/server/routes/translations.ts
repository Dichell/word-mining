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
        this.router.post("/text", this.text)
        this.router.post('/alternative', this.alternative)
        this.router.post('/examples', this.examples)
    }
    
    text = async(req: Request, res: Response) => {
        if(!req.body.textData) return res.status(400).json( {status: "error", message: "body.textData is required"} )
        console.log(`'text' - starting (${req.body.textData.text}) ...`)
        try {
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang
            }

            const response: any = await TranslationsController.text(dataText)

            if(response.data){
                console.log(`'text' - azure (${response[0].text})`)
                return res.status(200).json( {data: response, status: "ok", message: ""} )
            } else {
                return res.status(204).json( {data: [], status: "empty", message: ""} )    
            }
        }
        catch(e: any){
            console.warn("'text' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }
    }
    
    alternative = async (req: Request, res: Response) => {
        if(!req.body.textData) return res.status(400).json( {status: "error", message: "body.textData is required"} )
        console.log(`'alternative' - starting (${req.body.textData.text}) ...`)
        try {
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang
            }
            const response: any = await TranslationsController.alternative(dataText)

            if(response.data){
                console.log(`'alternative' - finish (${response.data[0]})`)
                return res.status(200).json( {data: response.data[0].translations, status: "ok", message: ""} )    
            } else {
                return res.status(204).json( {data: [], status: "empty", message: ""} )    
            }
        }
        catch(e: any){
            console.warn("'alternative' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }
    }
    
    examples = async (req: Request, res: Response) => {
        console.log(`'examples' - starting (${req.body.textData.text}) ...`)
        try {   
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang,
                translation: req.body.textData.translatedText
            }
            const response: any = await TranslationsController.examples(dataText)
            
            if(response.data){
                console.log(`'examples' - finish (${response.data[0]})`)
                return res.status(200).json( {data: response.data[0].examples, status: "ok", message: ""} )
            } else {
                return res.status(204).json( {data: [], status: "empty", message: ""} )    
            }    
        }
        catch(e: any){
            console.warn("'examples' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }   
    }
}

export default new Translations().router