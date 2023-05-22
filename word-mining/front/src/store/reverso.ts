import { defineStore } from 'pinia'
import { ObjectSimple, ReversoStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Reverso', {
    state: (): ReversoStore => ({
        isActive: false,
        languages: [
            { key: 1, value: "hebrew" },
            { key: 2, value: "english" },
            { key: 3, value: "russian" },
        ],
        sourceText: "שלום",
        sourceLang: 1,
        targetLang: 3,
    }),
    getters: {
        getLanguages: (state: ReversoStore): ObjectSimple[] => {
            return state.languages
        },
        getSourceText: (state: ReversoStore): string => state.sourceText,
        getSourceLang: (state: ReversoStore): string => {
            let filtered = state.languages.filter(a => a.key == state.sourceLang)
            return filtered[0].value
        }
    },

    actions: {
        mountRevesohIsActive(){
            const isActive = localStorage.getItem(LocalStorageKeys.ReversoIsActive)
            if(isActive != null){
                this.isActive = isActive == "true" ? true : false
            }
        },
        toggleReverso(){
            this.isActive = !this.isActive
            localStorage.setItem(LocalStorageKeys.ReversoIsActive, this.isActive.toString())
        }
    },

})
