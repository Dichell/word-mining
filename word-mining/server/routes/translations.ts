import { Router } from "express";
import { Request, Response } from 'express';
import TranslationsController from '../controllers/controller.translations'
import { ITranslateData } from "../types";
import controllerDictionary from "../controllers/controller.dictionary";
import dictionaryModel from "../models/dictionary.model";

class Translations {
    router: Router;
    constructor(){
        this.router = Router();
        this.creteRoutes();
    }
    private creteRoutes(){
        this.router.post("/text", this.translateText)
        this.router.post('/explanation', this.translateExplanation)
        this.router.post('/alternative', this.translateAlternative)
        this.router.post('/examples', this.translateExamples)
        this.router.post('/image', this.translateImage)
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

            let data

        // check DB for translation
            const dbTranslation: any[] = await controllerDictionary.aggregate([
                { $match: { word: req.body.textData.text } },
                { $lookup: {
                    from: "dictionary",
                    localField: `translations.${req.body.textData.targetLang}`,
                    foreignField: "_id",
                    as: "translationsResult"
                }}
              ])

            if(dbTranslation.length > 0){
                data = dbTranslation[0].translationsResult[0].word
                console.log(`'translateText' - mongo: `, dbTranslation[0].translationsResult[0].word);
            }

            if(!dbTranslation || dbTranslation.length == 0){
        // if no, get translation
                const response: any = await TranslationsController.translateText(dataText)
                console.log(`'translateText' - azure (${response[0].text})`)
                data = response
            }



            // add new data to db


        // add word to user-words


        // add word to user-translations


        // return data to client
            return res.status(200).json( {data: data, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateText' - error")
            return res.status(400).json( {status: "error", message: e.message} )
        }
    }

    translateExplanation = async (req: Request, res: Response) => {
        if(!req.body.textData) return res.status(400).json({status: "error", message: "body.textData is required"})
        console.log(`'translateExplanation' - starting (${req.body.textData.text}) ...`)
        try {
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang,
                translation: req.body.textData.translatedText
            }
            const response: string = await TranslationsController.translateExplanation(dataText)
            console.log(`'translateExplanation' - finish`)
            return res.status(200).json( {data: response, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateExplanation' - error")
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

    translateImage = async (req: Request, res: Response) => {
        console.log(`'translateImage' - starting (${req.body.textData.text}) ...`)
        try {   
            const dataText: ITranslateData = {
                text: req.body.textData.text, 
                source: req.body.textData.sourceLang,
                target: req.body.textData.targetLang,
                translation: req.body.textData.translatedText
            }
            const response: any = await TranslationsController.translateExamples(dataText)
            console.log(`'translateImage' - finish (${response.data[0]})`)
            return res.status(200).json( {data: response.data[0].examples, status: "ok", message: ""} )
        }
        catch(e: any){
            console.warn("'translateImage' - error")
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