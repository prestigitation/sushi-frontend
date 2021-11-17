import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import App from './App.vue'

import axios from 'axios'
Vue.config.productionTip = false
window.Vue = require('vue').default

Vue.use(VueRouter)

Vue.prototype.axios = axios


new Vue({
    render: h => h(App),
    router
}).$mount('#app')