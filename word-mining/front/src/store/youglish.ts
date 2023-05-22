import { defineStore } from 'pinia'
import { BaseStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Youglish', {
    state: (): BaseStore => ({
        isActive: true
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
