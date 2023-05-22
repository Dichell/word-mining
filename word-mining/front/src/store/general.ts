import { GeneralStore } from '@/types'
import { defineStore } from 'pinia'

export default defineStore('Youglish', {
    state: (): GeneralStore => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false
    }),
    getters: {
        getIsAuth: (state: GeneralStore): boolean => state.isAuth,
        getUserEmail: (state: GeneralStore): string => state.userEmail,
        getIsLoadingStatus: (state: GeneralStore): boolean => state.isLoading,
    },

    actions: {},

})
