import { defineStore } from 'pinia'
import { YouglishLangs, YouglishStore } from '@/types'

export default defineStore('Youglish', {
    state: (): YouglishStore => ({
        languages: [
            { key: 1, value: "hebrew" },
            { key: 2, value: "english" },
            { key: 3, value: "russian" },
        ],
        currentText: "שלום",
        sourceLang: 1,
        targetLang: 3,

        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false
    }),
    getters: {
        getLanguages: (state: YouglishStore): YouglishLangs[] => {
            return state.languages
        },
        getCurrentText: (state: YouglishStore): string => state.currentText,
        getSourceLang: (state: YouglishStore): string => {
            let filtered = state.languages.filter(a => a.key == state.sourceLang)
            return filtered[0].value
        },

        getIsAuth: (state: YouglishStore): boolean => state.isAuth,
        getUserEmail: (state: YouglishStore): string => state.userEmail,
        getIsLoadingStatus: (state: YouglishStore): boolean => state.isLoading,
    },

    actions: {},

})
