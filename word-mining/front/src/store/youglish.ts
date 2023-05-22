import { defineStore } from 'pinia'
import { BaseStore, ObjectSimple, YouglishStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Youglish', {
    state: (): BaseStore => ({
        isActive: true
    }),
    getters: {
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
