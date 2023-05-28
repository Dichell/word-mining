import { defineStore } from 'pinia'
import { Endpoint, LocalStorageKeys } from '@/enums'
import Api from '@/api' 
import { localStorageMethods } from '@/utils/localStorage'
import { IAltText, IAlternativeTranslations, ITranslateObject, ITranslateStore, Ilanguages } from '@/types'
import { updateObject } from '@/utils/objectWorker'

export default defineStore('Translate', {
    state: (): ITranslateStore => ({
        isActive: true,
        loadingTranslate: false,
        loadingAlternatives: false,
        languages: [
            { key: 0, name: "Hebrew", value: "hebrew", short:"he", helloWord: "שלום" },
            { key: 1, name: "English",  value: "english", short:"en", helloWord: "hello" },
            { key: 2, name: "Russian",  value: "russian", short:"ru", helloWord: "привет" },
        ],
        textInput: "",
        translateObject: { sourceText:"", fromLangKey: 0, toLangKey: 1, translatedText: "" },
        alternativeTranslations: []
    }),
    getters: {
        getSourceLang(): Ilanguages {
            return this.languages[this.translateObject.fromLangKey]
        },
        getTargetLang(): Ilanguages {
            return this.languages[this.translateObject.toLangKey]
        },
        getAlternativeSreings(){
            const altTexts: IAltText[] = []
            this.alternativeTranslations.forEach((a) => {
                if(a.displayTarget && a.backTranslations){
                    let itemText: string = a.displayTarget
                    let itemTrans: string = ""
                    for(let j = 0; j < a.backTranslations.length; j++){
                        a.backTranslations[j].displayText != a.backTranslations[a.backTranslations.length-1].displayText ?
                            itemTrans += a.backTranslations[j].displayText + ", " :
                            itemTrans += a.backTranslations[j].displayText
                    }
                    altTexts.push({itemText, itemTrans})
                }
            })
            return altTexts
        }
    },
    actions: {
// TRANSLATING
        updateTranslateObject(key: keyof ITranslateObject, value: string | number){
            updateObject(this.translateObject, key, value)
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
        },
        reverseLangs(){
            this.loading = true
            let midlLang = this.translateObject
            this.translateObject = {
                sourceText: this.textInput = midlLang.translatedText,
                fromLangKey: midlLang.toLangKey,
                toLangKey: midlLang.fromLangKey,
                translatedText: midlLang.sourceText
            }
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
            this.loading = false
        },
        async translate(){
            this.loading = true
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.languages.find(el => el.key == this.translateObject.fromLangKey)?.short, 
                targetLang: this.languages.find(el => el.key == this.translateObject.toLangKey)?.short
            }
            const response: any = await Api.get<ITranslateObject>(Endpoint.Translate, textData)
            this.translateObject.translatedText = response.data[0].text
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
            this.refillAlternativeTranslations()
            this.loading = false
        },
// ALTERNATIVE TRANSLATIONS
        async refillAlternativeTranslations(){
            this.loadingAlternatives = true
            this.alternativeTranslations = []
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.languages.find(el => el.key == this.translateObject.fromLangKey)?.short, 
                targetLang: this.languages.find(el => el.key == this.translateObject.toLangKey)?.short
            }
            const response = await Api.get<IAlternativeTranslations[]>(Endpoint.TranslateAlternative, textData)
            if(response.data){
                response.data.forEach(a => {
                    this.alternativeTranslations.push(a)
                })
            }
            localStorageMethods.setItem(LocalStorageKeys.AlternativeTranslations, this.alternativeTranslations)
            this.loadingAlternatives = false
        }, //TODO param type ?
// MOUNTING
        mountBaseTranslateSettings(): void {
            const lsTextTranslated = localStorageMethods.getAndToObject<ITranslateObject>(LocalStorageKeys.TranslateStore)
            if(lsTextTranslated){
                this.translateObject = lsTextTranslated
                this.textInput = lsTextTranslated.sourceText
            }
            const lsAlternativeTranslations = localStorageMethods.getAndToObject<IAlternativeTranslations[]>(LocalStorageKeys.AlternativeTranslations)
            if(lsAlternativeTranslations){
                this.alternativeTranslations = lsAlternativeTranslations
            }
        }
        
    }
})
