import { defineStore } from 'pinia'

export default defineStore('General', {
    state: () => ({
        token: "",
        isAuth: false,
        userEmail: "",
        isLoading: false,
        menu: [
            {name: 'Dictionary', path: 'dictionary', icon: "mdi-book-open-variant"}, 
            {name: 'Translate History', path:'translate-history', icon: "mdi-history"}, 
            {name: 'Exercises', path: 'exercises', icon: "mdi-trophy-outline"}, 
            {name: 'Progress', path: 'progress', icon: "mdi-chart-areaspline"}
        ]
    }),
    getters: {
        getIsAuth: (state): boolean => state.isAuth
    },
    actions: {}
})
