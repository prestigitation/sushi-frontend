import VueRouter from "vue-router";
import routes from './routes'

let router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    let access_token = localStorage.getItem('access_token')
    if (to.name !== 'login') {
        if (!access_token && to.name != 'register') {
            return next({
                name: 'login',
            })
        }
    }
    if (to.name === 'login' && access_token) {
        return next({
            name: 'index'
        })
    }

    next()
})
export default router