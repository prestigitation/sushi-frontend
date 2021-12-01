import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import store from './store/index'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
Vue.config.productionTip = false
window.Vue = require('vue').default

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)

Vue.prototype.axios = axios

new Vue({
    render: h => h(App),
    router,
    vuetify,
    store
}).$mount('#app')