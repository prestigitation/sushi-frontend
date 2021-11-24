import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import state from './state'
import Vue from 'vue';
Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [createPersistedState()],
    state,
    actions,
    mutations,
    getters
})