import { IResponse } from '@/types';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4130/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

class Api {

    constructor(){}

    async get<T>(url: string, reqData: any): Promise<IResponse<T>>{
        const { data } = await api.post<IResponse<T>>(url, {textData: reqData})
        return data
    }
}

export default new Api()