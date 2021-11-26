<template>
<span class="quantity_selector">
    <span :class="['selector_action', {cart_selector: side_cart}]" v-if="show_minus" @click.prevent="decrementCount">-</span>
    <span :class="['selector_count']" v-if="show_count && !given_quantity">{{count}}</span>
    <span v-else-if="given_quantity" :class="['selector_count', {cart_count: side_cart}]">{{given_quantity}} {{count}}</span>
    <span :class="[{
        cart_selector: side_cart, 
        mobile_selector_action: !show_minus && !show_count,
        selector_action: show_minus && show_count}]" @click.prevent="incrementCount"
    >
        +
    </span>
</span>  
</template>

<script>
export default {
    data() {
        return {
            count: 1,
        }
    },
    props: {
        show_minus: {
            type: Boolean,
            default: () => true
        },
        show_count: {
            type: Boolean,
            default: () => true
        },
        side_cart: {
            type: Boolean,
            default: () => false
        },
        given_quantity: {
            type: Number,
            default: () => 0
        }
    },
    methods: {
        decrementCount() {
            if(this.count > 1) {
                this.count -= 1
            }
        },
        incrementCount() {
            this.count++
        }
    },
    watch: {
        count() {
            this.$emit('changeProductQuantity', this.count)
        }
    }
}
</script>

<style scoped>
.quantity_selector {
    margin-left: 15px;
}
.quantity_selector > span {
    margin: 0 15px 0 15px;
}
.cart_count {
    margin: 0 5px 0 5px !important;
}
.selector_action {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.selector_action:hover {
    background: #F46D40;
    border-radius: 20px;
    color: white;
}
.cart_selector {
    width: 20px !important;
    height: 20px !important;
}
@media screen and (max-width: 768px){
    .mobile_selector_action {
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: #F46D40;
        border-radius: 20px;
        color: white;
    }
}
</style>