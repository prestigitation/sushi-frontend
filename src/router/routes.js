import IndexPage from '../components/Index/IndexPage.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'

export default [
    { path: '/', component: IndexPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]