import { defineStore } from 'pinia'
import { YouGlishStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Youglish', {
    state: (): YouGlishStore => ({
        isActive: true,
        newTranslationTrigger: 0
    }),
    getters: {},
    actions: {
        mountYouglishIsActive(): void {
            const isActive = localStorage.getItem(LocalStorageKeys.YouglishIsActive)
            if(isActive != null){
                this.isActive = isActive == "true" ? true : false
            }
        },
        toggleYouglish(): void {
            this.isActive = !this.isActive
            localStorage.setItem(LocalStorageKeys.YouglishIsActive, this.isActive.toString())
        }
    },

})
