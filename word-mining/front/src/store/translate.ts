import { defineStore } from 'pinia'
import { LocalStorageKeys } from '@/enums'
import useYouglishlStore from './youglish'
import Api from '@/api' 
import { localStorageMethods } from '@/utils/localStorage'
import { ITranslateObject, ITranslateStore, Ilanguages } from '@/types'
import { updateObject } from '@/utils/objectWorker'

export default defineStore('Translate', {
    state: (): ITranslateStore => ({
        isActive: true,
        languages: [
            { key: 0, name: "Hebrew", value: "hebrew", short:"he", helloWord: "שלום" },
            { key: 1, name: "English",  value: "english", short:"en", helloWord: "hello" },
            { key: 2, name: "Russian",  value: "russian", short:"ru", helloWord: "привет" },
        ],
        textInput: "",
        translateObject: { sourceText:"", fromLangKey: 0, toLangKey: 1, translatedText: "" }
    }),
    getters: {
        getSourceLang(): Ilanguages {
            return this.languages[this.translateObject.fromLangKey]
        },
        getTargetLang(): Ilanguages {
            return this.languages[this.translateObject.toLangKey]
        },
        // getFromYouglishStore() {
        //     const youglishlStore = useYouglishlStore()
        //     return youglishlStore
        // },
    },
    actions: {
        updateTranslateObject(key: keyof ITranslateObject, value: string | number){
            updateObject(this.translateObject, key, value)
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
        },
        reverseLangs(){
            let midlLang = this.translateObject
            this.translateObject = {
                sourceText: this.textInput = midlLang.translatedText,
                fromLangKey: midlLang.toLangKey,
                toLangKey: midlLang.fromLangKey,
                translatedText: midlLang.sourceText
            }
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
        },
        async translate(){
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.languages.find(el => el.key == this.translateObject.fromLangKey)?.short, 
                targetLang: this.languages.find(el => el.key == this.translateObject.toLangKey)?.short
            }
            const response: any = await Api.get('translate', textData)
            this.translateObject.translatedText = response.data.data[0].text
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
        },
// MOUNTING
        mountBaseTranslateSettings(): void {
            let lsTextTranslated = localStorageMethods.getAndToObject<ITranslateObject>(LocalStorageKeys.TranslateStore)
            if(lsTextTranslated){
                this.translateObject = lsTextTranslated
                this.textInput = lsTextTranslated.sourceText
            }
        }
        
    }
})
