import { defineStore } from 'pinia'
import { BaseStore, ObjectSimple, ReversoStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Reverso', {
    state: (): BaseStore => ({
        isActive: false
    }),
    getters: {
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
