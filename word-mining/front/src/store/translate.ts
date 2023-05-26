import { defineStore } from 'pinia'
import { LocalStorageKeys } from '@/enums'
import useGeneralStore from './general'
import useYouglishlStore from './youglish'
import Api from '@/api' 

export default defineStore('Translate', {
    state: () => ({
        isActive: true,
        translatedText: ""
    }),
    getters: {
        getFromGeneralStore() {
            const generalStore = useGeneralStore()
            return generalStore
        },
        getFromYouglishStore() {
            const youglishlStore = useYouglishlStore()
            return youglishlStore
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
            const response: any = await Api.get('translate', textData)
            
            this.translatedText = response.data.data[0].text
            this.getFromYouglishStore.newTranslationTrigger++
        }
    }
})
