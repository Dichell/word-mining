import { defineStore } from 'pinia'
import { BaseStore } from '@/types'
import { LocalStorageKeys } from '@/enums'

export default defineStore('Reverso', {
    state: (): BaseStore => ({
        isActive: true
    }),
    getters: {},
    actions: {
        mountRevesohIsActive(): void {
            const isActive = localStorage.getItem(LocalStorageKeys.ReversoIsActive)
            if(isActive != null){
                this.isActive = isActive == "true" ? true : false
            }
        },
        toggleReverso(): void {
            this.isActive = !this.isActive
            localStorage.setItem(LocalStorageKeys.ReversoIsActive, this.isActive.toString())
        }
    }
})
