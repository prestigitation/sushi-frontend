<template>
<div class="card_cart_container" v-if="product">
    <div class="cart_image_container">
        <img :src="product.image_path" class="cart_image">
    </div>
    <div class="cart_info">
        <span class="cart_name">{{product.name}}</span>
        <span class="cart_price_container">
                <quantity-selector :side_cart="true" :given_quantity="product.quantity" @changeProductQuantity="changeProductCartQuantity" />
                <span class="cart_price">{{product.price * product.quantity}} COM</span>
        </span>
    </div>
</div>
</template>

<script>
import QuantitySelector from './QuantitySelector.vue'
export default {
    components: { QuantitySelector },
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        changeProductCartQuantity(quantity) {
            let product = this.product
            product.quantity = quantity
            this.$store.dispatch('change_product_cart_quantity', product)
        }
    }
}
</script>

<style scoped>
.card_cart_container {
    height: 50px;
    display: flex;
    flex-basis: 100%;
    justify-content: space-around;
    align-items: center;
}
.cart_image {
    width: 70px;
    height: 48px;
}

.cart_name {
    margin-left: 5px;
    text-align: left !important;
    text-overflow: ellipsis !important;
}
.cart_info {
    display: flex;
    flex-direction: column;
}
.cart_price_container .quantity_selector{
    margin-left: unset !important;
}
.cart_price {
    font-family: DIN Pro;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
}

</style>