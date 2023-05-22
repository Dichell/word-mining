import { GeneralStore } from '@/types'
import { defineStore } from 'pinia'

export default defineStore('General', {
    state: (): GeneralStore => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false,
        languages: [
            { key: 0, value: "hebrew" },
            { key: 1, value: "english" },
            { key: 2, value: "russian" },
        ],
        sourceText: "",
        sourceLang: 0,
        targetLang: 1,
    }),
    getters: {
        getIsAuth: (state: GeneralStore): boolean => state.isAuth,
        getUserEmail: (state: GeneralStore): string => state.userEmail,
        getIsLoadingStatus: (state: GeneralStore): boolean => state.isLoading,

        getSourceLang: (state: GeneralStore): string => state.languages[state.sourceLang].value,
        getTargetLang: (state: GeneralStore): string => state.languages[state.targetLang].value
    },

    actions: {
        setSourceText(value: string){
            this.sourceText = value
        }
    },

})
