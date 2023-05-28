const axios = require('axios').default;
import { v4 as uuidv4 } from 'uuid';

let key = "c44c49d497a04da0a48c8c99e5482e16";
let location = "westeurope";
let endpoint = "https://api.cognitive.microsofttranslator.com";
// let endpointAlternative = "https://api.cognitive.microsofttranslator.com/dictionary/lookup";

export async function translate({text, source, target}:{text: string, source: string, target: string}): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': source,
                'to': target
            },
            data: [{
                'text': text
            }],
            responseType: 'json'
        })
    
        return response.data[0].translations
    }
    catch(e){
        console.log(e)
        return { error: 'error'}
    }
}

export async function translateAlternative({text, source, target}:{text: string, source: string, target: string}): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: '/dictionary/lookup',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': key,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': source,
                'to': target
            },
            data: [{
                'Text': text
            }],
            responseType: 'json'
        })
        
        return response
    }
    catch(e){
        console.log(e)
        return { error: 'error'}
    }
}