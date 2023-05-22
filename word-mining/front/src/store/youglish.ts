import { defineStore } from 'pinia'
import { ObjectSimple, YouglishStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Youglish', {
    state: (): YouglishStore => ({
        isActive: true,
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
        getIsActive: (state: YouglishStore): boolean => {
            return state.isActive
        },
        getLanguages: (state: YouglishStore): ObjectSimple[] => {
            return state.languages
        },
        getSourceText: (state: YouglishStore): string => state.sourceText,
        getSourceLang: (state: YouglishStore): string => {
            let filtered = state.languages.filter(a => a.key == state.sourceLang)
            return filtered[0].value
        }
    },

    actions: {
        mountYouglishIsActive(){
            const isActive = localStorage.getItem(LocalStorageKeys.YouglishIsActive)
            if(isActive != null){
                this.isActive = isActive == "true" ? true : false
            }
        },
        toggleYouglish(){
            this.isActive = !this.isActive
            localStorage.setItem(LocalStorageKeys.YouglishIsActive, this.isActive.toString())
        }
    },

})
