import { defineStore } from 'pinia'
import { BaseStore } from '@/types'
import { LocalStorageKeys } from '@/enums'
import useGeneralStore from './general'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/translate',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default defineStore('Reverso', {
    state: () => ({
        isActive: true,
        translatedText: ""
    }),
    getters: {
        getFromGeneralStore() {
            const generalStore = useGeneralStore()
            return generalStore
          },
    },
    actions: {
        mountRevesohIsActive(): void {
            const isActive = localStorage.getItem(LocalStorageKeys.ReversoIsActive)
            if(isActive != null){
                this.isActive = isActive == "true" ? true : false
            }
        },
        toggleReverso(): void {
            this.isActive = !this.isActive
            localStorage.setItem(LocalStorageKeys.ReversoIsActive, this.isActive.toString())
        },
        async translate(){
            const textData = {text: this.getFromGeneralStore.sourceText, targetLang: this.getFromGeneralStore.targetLang.short}
            const response: any = await api.post('', {textData: textData})
            
            this.translatedText = response.data.data[0].text
        }
    }
})
