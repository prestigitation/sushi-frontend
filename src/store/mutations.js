export default {
    change_user_data(state, user) {
        state.user.id = user.id;
        state.user.name = user.name;
    },
    cart_add_product(state, product) {
        console.log(product)
        let cart = state.cart
        if (!cart.length) {
            state.cart = [{...product }]
        } else state.cart = [...cart, {...product }]
    },
    change_cart_product(state, data) {
        let cart = state.cart
        cart[data.index] = data.product
        state.cart = cart
    },
    clear(state) {
        state.cart = []
    }
}