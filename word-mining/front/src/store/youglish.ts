import { defineStore } from 'pinia'
import { IPronounceData, IYouGlishStore } from '@/types'
import { LocalStorageKeys } from '@/enums'
import useTranslateStore from './translate'
import { localStorageMethods } from '@/utils/localStorage'
import { updateObject } from '@/utils/objectWorker'

export default defineStore('Youglish', {
    state: (): IYouGlishStore => ({
        isActive: true,
        pronounceData: {text: "", speakLanguageValue: ""},
        newTranslationTrigger: 0
    }),
    getters: {
        getFromTranslateStore() {
            const translateStore = useTranslateStore()
            return translateStore
        },
    },
    actions: {
        updatePronounceData(key: keyof IPronounceData, value: string){
            updateObject(this.pronounceData, key, value)
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.pronounceData)

        },
        togglePronounce (): void {
            if (this.pronounceData.speakLanguageValue == this.getFromTranslateStore.getSourceLang.value){
                this.pronounceData = {
                    speakLanguageValue: this.getFromTranslateStore.getTargetLang.value,
                    text: this.getFromTranslateStore.translateObject.translatedText
                }
            }
            else { 
                this.pronounceData = {
                    speakLanguageValue: this.getFromTranslateStore.getSourceLang.value,
                    text: this.getFromTranslateStore.translateObject.sourceText
                }
            }
            localStorageMethods.setItem(LocalStorageKeys.PronounceData, this.pronounceData)
            this.newTranslationTrigger++
        },
        toggleYouglish(): void {
            this.isActive = !this.isActive
            localStorageMethods.setItem(LocalStorageKeys.YouglishIsActive, this.isActive.toString())
        },
        triggerRefresh(){
            setTimeout(()=>{
            this.newTranslationTrigger++
            }, 500)
        },
// MOUNTING
        mountPronounceData(): void {
            const lsPronounceData = localStorageMethods.getAndToObject<IPronounceData>(LocalStorageKeys.PronounceData)
            if(lsPronounceData){
                this.pronounceData = lsPronounceData
            }
            else {
                this.pronounceData.speakLanguageValue = this.getFromTranslateStore.getSourceLang.value
                localStorageMethods.setItem(LocalStorageKeys.PronounceData, this.pronounceData)
            }
        },
        mountYouglishIsActive(): void {
            const isActive = localStorageMethods.getAndToBoolean(LocalStorageKeys.YouglishIsActive)
            if(isActive != null){this.isActive = isActive}
        }
    }
})
