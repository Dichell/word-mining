import { LocalStorageKeys } from '@/enums'
import { GeneralStore, languages } from '@/types'
import { defineStore } from 'pinia'

export default defineStore('General', {
    state: (): GeneralStore => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false,
        languages: [
            { key: 0, name: "Hebrew", value: "hebrew", helloWord: "שלום" },
            { key: 1, name: "English",  value: "english", helloWord: "hello" },
            { key: 2, name: "Russian",  value: "russian", helloWord: "привет" },
        ],
        sourceText: "",
        inputText: "",
        sourceLang: { key: 0, name: "Hebrew", value: "hebrew", helloWord: "שלום" },
        targetLang: { key: 1, name: "English",  value: "english", helloWord: "hello" }
    }),
    getters: {},
    actions: {
        setSourceText(): void {
            this.sourceText = this.inputText
            localStorage.setItem(LocalStorageKeys.SourceText, this.inputText)
        },
        setSourceLang(value: languages): void {
            this.sourceLang = value
            if(this.sourceLang.key == this.targetLang.key){
                this.targetLang = this.languages.filter(a => a.key != this.sourceLang.key)[0]
            }
            localStorage.setItem(LocalStorageKeys.SourceLang, JSON.stringify(this.sourceLang))
            localStorage.setItem(LocalStorageKeys.TargetLang, JSON.stringify(this.targetLang))
        },
        setTargetLang(value: languages): void {
            this.targetLang = value
            localStorage.setItem(LocalStorageKeys.TargetLang, JSON.stringify(this.targetLang))
        },
        reverseLangs(){
            let midlLang = this.sourceLang
            this.sourceLang = this.targetLang
            this.targetLang = midlLang
            localStorage.setItem(LocalStorageKeys.SourceLang, JSON.stringify(this.sourceLang))
            localStorage.setItem(LocalStorageKeys.TargetLang, JSON.stringify(this.targetLang))
        },
        mountLangs(): void {
            let lsSoureLang = localStorage.getItem(LocalStorageKeys.SourceLang)
            let lsTargetLang = localStorage.getItem(LocalStorageKeys.TargetLang)

            if(lsSoureLang && lsTargetLang){
                this.sourceLang = JSON.parse(lsSoureLang)
                this.targetLang = JSON.parse(lsTargetLang)
            }
        },
        mountSourceText(): void {
            let lsHelloWord = localStorage.getItem(LocalStorageKeys.SourceText)
            if(lsHelloWord) {
                this.sourceText = this.inputText = lsHelloWord
            } else {
                this.sourceText = this.inputText = this.languages[this.sourceLang.key].helloWord 
            }
        }
    }
})
