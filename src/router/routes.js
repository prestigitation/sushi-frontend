import IndexPage from '../components/Index/IndexPage.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Category from '../components/Category/Category.vue'
import Product from '../components/Product/Product.vue'
import Cart from '../components/Cart/Cart.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import Section from '../components/Dashboard/Section.vue'
import Action from '../components/Dashboard/Action.vue'
import Update from '../components/Dashboard/Update.vue'
import Delete from '../components/Dashboard/Delete.vue'

export default [
    { path: '/', component: IndexPage, name: 'index' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/category/:slug', component: Category, name: 'category' },
    { path: '/product/:slug', component: Product, name: 'product' },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
        meta: {
            show_footer_text: false
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard_main',
        meta: {
            show_footer_text: false
        },
        children: [{
                path: ':section/:action',
                name: 'action',
                component: Action,
                meta: {
                    show_footer_text: false
                }
            },
            {
                path: ':section',
                name: 'section',
                component: Section,
                meta: {
                    show_footer_text: false
                }
            },
            {
                path: ':section/:id/update',
                name: 'update',
                component: Update,
                meta: {
                    show_footer_text: false
                }
            },
            {
                path: ':section/:id/delete',
                name: 'delete',
                component: Delete,
                meta: {
                    show_footer_text: false
                }
            },
        ]
    }
]