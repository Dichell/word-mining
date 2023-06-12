import { defineStore } from 'pinia'
import { Endpoint, LocalStorageKeys } from '@/enums'
import Api from '@/api' 
import { localStorageMethods } from '@/utils/localStorage'
import { IAltText, IAlternativeTranslations, IExamplesTranslations, ITranslateObject, ITranslateStore, Ilanguages } from '@/types'
import { updateObject } from '@/utils/objectWorker'

export default defineStore('Translate', {
    state: (): ITranslateStore => ({
        isActive: true,
        loadingTranslate: false,
        loadingAlternatives: false,
        loadingExamples: false,
        languages: [
            { key: 0, name: "Hebrew", value: "hebrew", short:"he", helloWord: "שלום" },
            { key: 1, name: "English",  value: "english", short:"en", helloWord: "hello" },
            { key: 2, name: "Russian",  value: "russian", short:"ru", helloWord: "привет" },
        ],
        textInput: "",
        translateObject: { 
            sourceText:"", 
            fromLangKey: 0, 
            toLangKey: 1, 
            translatedText: "" 
        },
        alternativeTranslations: [],
        examplesTranslations: [],
        translateHistory: [],
        translateExplanation: ''
    }),
    getters: {
        getTranslateObject: (state): ITranslateObject => state.translateObject,
        getSourceLang: (state): Ilanguages => state.languages[state.translateObject.fromLangKey],
        getTargetLang: (state): Ilanguages => state.languages[state.translateObject.toLangKey],
        getExplain: (state): string => state.translateExplanation,
        getExample: (state) => state.examplesTranslations,
        getHistory: (state) => state.translateHistory,
        getAlternativeSreings: (state) => {
            const altTexts: IAltText[] = []
            state.alternativeTranslations.forEach((a) => {
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
                sourceLang: this.getSourceLang.short, 
                targetLang: this.getTargetLang.short
            }
            const response: any = await Api.get<ITranslateObject>(Endpoint.Translate, textData)
            this.translateObject.translatedText = response.data[0].text
            localStorageMethods.setItem(LocalStorageKeys.TranslateStore, this.translateObject)
            this.refillAlternativeTranslations()
            this.refillExamples()
            this.explain()
            this.loading = false

                // history translations
                let lsCurrentHistory = localStorage.getItem('translationsHistory')
                let result = []
                let count = 0
                if(lsCurrentHistory){
                    result = JSON.parse(lsCurrentHistory)
                }
                result.forEach((el:ITranslateObject)  => {
                    if (el.sourceText == this.translateObject.sourceText){
                        count++
                    }
                });
                if(count < 1){
                    result.unshift(this.translateObject)
                    this.translateHistory = result
                    localStorageMethods.setItem(LocalStorageKeys.TranslationsHistory, result)
                }
        },

// EXPLANATION
        async explain(){
            this.translateExplanation = ''
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.getSourceLang.value, 
                targetLang: this.getTargetLang.value
            }
            const response: any = await Api.get<ITranslateObject>(Endpoint.TranslateExplain, textData)
            this.translateExplanation = response.data
            localStorageMethods.setItem(LocalStorageKeys.TranslateExplain, this.translateExplanation)
        },

// ALTERNATIVE TRANSLATIONS
        async refillAlternativeTranslations(){
            this.alternativeTranslations = []
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.getSourceLang.short, 
                targetLang: this.getTargetLang.short
            }
            const response = await Api.get<IAlternativeTranslations[]>(Endpoint.TranslateAlternative, textData)
            if(response.data){
                response.data
                    .sort((a,b) => b.confidence - a.confidence)
                    .forEach(a => {
                        this.alternativeTranslations.push(a)
                    })
            }
            localStorageMethods.setItem(LocalStorageKeys.AlternativeTranslations, this.alternativeTranslations)
        },

// EXAMPLES TRANSLATIONS
        async refillExamples(){
            this.examplesTranslations = []
            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.getSourceLang.short, 
                targetLang: this.getTargetLang.short,
                translatedText: this.translateObject.translatedText
            }
            const response = await Api.get<IExamplesTranslations[]>(Endpoint.TranslateExamples, textData)
            if(response.data){
                response.data
                    .forEach(a => {
                        this.examplesTranslations.push(a)
                    })
            }
            localStorageMethods.setItem(LocalStorageKeys.ExamplesTranslations, this.examplesTranslations)
        },

// HISTORY TRANSLATES
        deleteOneFromHistory(i: number) {
            this.translateHistory.splice(i, 1)
            localStorageMethods.setItem(LocalStorageKeys.TranslationsHistory, this.translateHistory)
        },

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
            const lsExamplesTranslations = localStorageMethods.getAndToObject<IExamplesTranslations[]>(LocalStorageKeys.ExamplesTranslations)
            if(lsExamplesTranslations){
                this.examplesTranslations = lsExamplesTranslations
            }
            const lsExplainationTranslations = localStorageMethods.getString(LocalStorageKeys.TranslateExplain)
            if(lsExplainationTranslations){
                this.translateExplanation = lsExplainationTranslations
            }

    // history transltaions, using until db not connected
    let lsCurrentHistory = localStorage.getItem('translationsHistory')
    let result = []
    if(lsCurrentHistory){
        result = JSON.parse(lsCurrentHistory)
    }
    this.translateHistory = result
        }
    }
})
