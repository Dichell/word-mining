import { defineStore } from 'pinia'
import { Endpoint, LocalStorageKeys } from '@/enums'
import Api from '@/api' 
import { localStorageMethods } from '@/utils/localStorage'
import { IAltText, IAlternativeTranslations, IExamplesTranslations, ITranslateHistory, ITranslateObject, ITranslateStore, Ilanguages, UpdatableTranslateStore } from '@/types'
import { updateObject } from '@/utils/objectWorker'
import {  v4 as uuidv4 } from 'uuid'

export default defineStore('Translate', {
    state: (): ITranslateStore => ({
        isActive: true,
        loadingTranslate: false,
        loadingAlternatives: false,
        loadingExamples: false,
        languages: [
            { key: 0, name: "Hebrew", value: "hebrew", short:"he" },
            { key: 1, name: "English",  value: "english", short:"en" },
            { key: 2, name: "Russian",  value: "russian", short:"ru" },
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
        translateExplanation: '',
        translateHistory: [],
    }),
    getters: {
        getTranslateObject: (state): ITranslateObject => state.translateObject,
        getInputText: (state): string => state.textInput,
        getSourceLang: (state): Ilanguages => state.languages[state.translateObject.fromLangKey],
        getTargetLang: (state): Ilanguages => state.languages[state.translateObject.toLangKey],
        getExplain: (state): string => state.translateExplanation,
        getExample: (state): IExamplesTranslations[] => state.examplesTranslations,
        getHistory: (state): ITranslateHistory[] => state.translateHistory,
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
        updateTranslateObject(key: keyof ITranslateObject, value: ITranslateObject[typeof key]): void {
            if(key === 'fromLangKey'){
                if(this.translateObject.toLangKey === value) this.translateObject.toLangKey = this.translateObject.fromLangKey
            } else {
                if(this.translateObject.fromLangKey === value) this.translateObject.fromLangKey = this.translateObject.toLangKey
            }
            updateObject(this.translateObject, key, value)
            localStorageMethods.setItem(LocalStorageKeys.TranslateObject, this.translateObject)
        },
        updateTranslateState<K extends keyof UpdatableTranslateStore>(key: K, value: ITranslateStore[K]): void {
            this.$state[key] = value
            if( typeof this.$state[key] == JSON.stringify("ITranslateObject") ) {
                localStorageMethods.setItem(LocalStorageKeys.TranslateObject, this.translateObject)
            }
        },
        reverseLangs(): void {
            this.loading = true
            let midlLang = this.translateObject
            this.translateObject = {
                sourceText: this.textInput = midlLang.translatedText,
                fromLangKey: midlLang.toLangKey,
                toLangKey: midlLang.fromLangKey,
                translatedText: midlLang.sourceText
            }
            localStorageMethods.setItem(LocalStorageKeys.TranslateObject, this.translateObject)
            this.loading = false
        },

        async translate(): Promise<void> {
            this.loading = true

            this.translateObject.translatedText = ''
            this.alternativeTranslations = []
            this.examplesTranslations = []
            this.translateExplanation = ''

            const textData = {
                text: this.translateObject.sourceText, 
                sourceLang: this.getSourceLang.short, 
                targetLang: this.getTargetLang.short
            }
            const response: any = await Api.get<ITranslateObject>(Endpoint.Translate, textData)
            this.translateObject.translatedText = response.data[0].text
            localStorageMethods.setItem(LocalStorageKeys.TranslateObject, this.translateObject)
            this.refillAlternativeTranslations()
            this.refillExamples()
            this.explain()
            this.loading = false
            this.addToTranslateHistory()
        },

// EXPLANATION
        async explain(): Promise<void> {
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
        async refillAlternativeTranslations(): Promise<void> {
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
        async refillExamples(): Promise<void> {
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
        addToTranslateHistory(): void {
            const isExist = this.translateHistory.find((el:ITranslateHistory) => el.sourceText == this.translateObject.sourceText)
            if(!isExist){
                this.translateHistory.push({
                    ...this.translateObject,
                    key: uuidv4()
                })
                localStorageMethods.setItem(LocalStorageKeys.TranslationsHistory, this.translateHistory)
            }
        },
        deleteOneFromHistory(key: string) {
            const filtered = this.translateHistory.filter(el => el.key !== key)
            this.translateHistory = filtered
            localStorageMethods.setItem(LocalStorageKeys.TranslationsHistory, this.translateHistory)
        },
        deleteAllHistory(): void {
            this.translateHistory = []
            localStorage.removeItem(LocalStorageKeys.TranslationsHistory)
        },

// MOUNTING
        mountBaseTranslateSettings(): void {
            const lsTextTranslated = localStorageMethods.getAndToObject<ITranslateObject>(LocalStorageKeys.TranslateObject)
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
            const lsCurrentHistory = localStorageMethods.getAndToObject<ITranslateHistory[]>(LocalStorageKeys.TranslationsHistory)
            if(lsCurrentHistory){
                this.translateHistory = lsCurrentHistory
            }
        }
    }
})
