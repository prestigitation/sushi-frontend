import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import App from './App.vue'
Vue.config.productionTip = false
window.Vue = require('vue').default

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')