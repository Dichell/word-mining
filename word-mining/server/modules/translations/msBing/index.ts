const axios = require('axios').default;
import { v4 as uuidv4 } from 'uuid';
import { config } from '../../../config';
import { ITranslateData } from '../../../types';

const endpoint = config.MS_BING_HOST;

let subscriptionKey = 'enter key here';
let term = 'tropical ocean';

let request_params = {
    method : 'GET',
    hostname : endpoint,
    path : path + '?q=' + encodeURIComponent(search),
    headers : {
    'Ocp-Apim-Subscription-Key' : subscriptionKey,
    }
};

let req = https.request(request_params, response_handler);
req.end();

// const azureHeaders = {
//     'Ocp-Apim-Subscription-Key': config.MS_AZURE_KEY,
//     'Ocp-Apim-Subscription-Region': config.MS_AZURE_LOCATION,
//     'Content-type': 'application/json',
//     'X-ClientTraceId': uuidv4().toString()
// }

export async function translateImage({text, source, target, translation}:ITranslateData): Promise<object>{
    try{
        const response = await axios({
            baseURL: endpoint,
            url: 'bing/v7.0/images/visualsearch',
            method: 'GET',
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
        return { error: e.code}
    }
}