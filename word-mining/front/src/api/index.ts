import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

class Api {

    constructor(){}

    async get(url: string, data: any){
        const response = await api.post(url, {textData: data})
        return response
    }
}

export default new Api()