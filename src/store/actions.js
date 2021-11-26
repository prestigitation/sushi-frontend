import _ from 'lodash'
export default {
    auth_login(store, user) {
        store.commit('change_user_data', { id: user.id, name: user.name })
    },
    cart_add_product(store, product) {
        store.commit('cart_add_product', product)
    },
    change_product_cart_quantity(store, product) {
        let index = _.findIndex(store.getters.getCart, product)
        console.log(index, product, store.getters.getCart[index])
        if (index != -1) {
            store.commit('change_cart_product', { index, product })
        }
    }
}