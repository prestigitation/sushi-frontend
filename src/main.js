import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/index'
Vue.config.productionTip = false
window.Vue = require('vue').default

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.axios = axios

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')