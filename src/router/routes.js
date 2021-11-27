import IndexPage from '../components/Index/IndexPage.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Category from '../components/Category/Category.vue'
import Product from '../components/Product/Product.vue'
import Cart from '../components/Cart/Cart.vue'

export default [
    { path: '/', component: IndexPage, name: 'index' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register },
    { path: '/category/:slug', component: Category },
    { path: '/product/:slug', component: Product },
    {
        path: '/cart',
        component: Cart,
        meta: {
            show_footer_text: false
        }
    }
]