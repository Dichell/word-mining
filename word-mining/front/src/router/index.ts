// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import TranslateHistory from '@/views/TranslateHistory.vue'
import Dictionary from '@/views/Dictionary.vue'
import Exercices from '@/views/Exercices.vue'
import Progress from '@/views/Progress.vue'
import About from '@/views/About.vue'
import Account from '@/views/Account.vue'

const routes = [
    {
        path: '/',
        component: Main,
        children: [
          {
            path: 'translate-history',
            name: 'Translate History',
            component: TranslateHistory,
          },
          {
            path: 'dictionary',
            name: 'Dictionary',
            component: Dictionary,
          },
          {
            path: 'exercices',
            name: 'Exercices',
            component: Exercices,
          },
          {
            path: 'progress',
            name: 'Progress',
            component: Progress,
          },
          {
            path: 'about',
            name: 'About',
            component: About,
          },
          {
            path: 'account',
            name: 'Account',
            component: Account,
          }
        ],
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
