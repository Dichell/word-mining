import { GeneralStore } from '@/types'
import { defineStore } from 'pinia'

export default defineStore('General', {
    state: () => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false,
        // languages: [
        //     { key: 0, name: "Hebrew", value: "hebrew" },
        //     { key: 1, name: "English",  value: "english" },
        //     { key: 2, name: "Russian",  value: "russian" },
        // ],
        languages: ["hebrew", "english", "russian"],
        sourceText: "",
        sourceLang: "hebrew",
        targetLang: 1,
    }),
    getters: {
        // getCurrentLang(state){
        //     return state.languages[state.sourceLang]
        // }
    },

    actions: {
        setSourceText(value: string){
            this.sourceText = value
        },
        setSourceLang(value: string){
            this.sourceLang = value
        }
    },

})
