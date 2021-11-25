export default {
    auth_login(store, user) {
        store.commit('change_user_data', { id: user.id, name: user.name })
    },
    cart_add_product(store, product) {
        store.commit('cart_add_product', product)
    }
}