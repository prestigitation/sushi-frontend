<template>
<div class="cart">
    <div class="cart_container">
        <div v-if="!getCart.length">
            <CartPanelCard :button='true'>
                <span slot="card_head_text">Ваша корзина пуста.</span>
                <span slot="card_text">Добавьте же скорее что-нибудь!</span>
            </CartPanelCard> 
            <CartPanelCard :image="true">
                <span slot="card_head_text">Укажите адрес</span>
                <span slot="card_text">И узнайте время доставки</span>
            </CartPanelCard>
        </div>

        <div v-else>
            <CartPanelCard :button='false' :cart="true">
                <span slot="card_head_text">Корзина</span>
            </CartPanelCard> 
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartPanelCard from './CartPanelCard.vue'
export default {
    components: {
        CartPanelCard,
    },
    computed: {
        ...mapGetters([
            'getCart'
        ])
    }
}
</script>

<style scoped>
    .cart_container {
        margin-top: 55px;
        width: 430px;
    }
    .cart_container > .card_container {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media  (max-width: 768px) {
        .cart {
            display: none;
        }       
    }
</style>