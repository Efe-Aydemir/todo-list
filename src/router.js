import MNLoginPage from '@/component/MNLoginPage.vue'
import MNError from '@/component/MNError.vue'
import { createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
        name : "Login",
        path : '/',
        component : MNLoginPage,
    },
    {
        name : '404',
        path : '/not-found',
        component : MNError
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.name === undefined) {
        console.log('404 geldi')
        next({
            name : '404'
        })
    } else {
        console.log('logine geldi')
        next()
    }
})

export default router;