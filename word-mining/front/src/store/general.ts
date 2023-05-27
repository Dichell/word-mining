import { defineStore } from 'pinia'

export default defineStore('General', {
    state: () => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false
    }),
    getters: {},
    actions: {}
})
