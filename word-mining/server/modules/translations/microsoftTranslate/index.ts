const axios = require('axios').default;
import { v4 as uuidv4 } from 'uuid';
import { config } from '../../../config';
import { ITranslateData } from '../../../types';

const endpoint = config.MS_AZURE_ENDPOINT;

const azureHeaders = {
    'Ocp-Apim-Subscription-Key': config.MS_AZURE_KEY,
    'Ocp-Apim-Subscription-Region': config.MS_AZURE_LOCATION,
    'Content-type': 'application/json',
    'X-ClientTraceId': uuidv4().toString()
}

export async function translate({text, source, target}:ITranslateData): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: azureHeaders,
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
    catch(e: any){
        console.log(e)
        throw new Error(e.code)
    }
}

export async function translateAlternative({text, source, target}:ITranslateData): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: '/dictionary/lookup',
            method: 'post',
            headers: azureHeaders,
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
    catch(e: any){
        console.log(e)
        throw new Error(e.code)
    }
}

export async function translateExamples({text, source, target, translation}:ITranslateData): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: '/dictionary/examples',
            method: 'post',
            headers: azureHeaders,
            params: {
                'api-version': '3.0',
                'from': source,
                'to': target
            },
            data: [{
                'text': text,
                'translation': translation
            }],
            responseType: 'json'
        })
        return response
    }
    catch(e: any){
        console.log(e)
        throw new Error(e.code)
    }
}
