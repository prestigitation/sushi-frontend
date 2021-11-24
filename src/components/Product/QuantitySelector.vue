<template>
<span class="quantity_selector">
    <span class="selector_action" v-if="show_minus" @click.prevent="decrementCount">-</span>
    <span class="selector_count" v-if="show_count">{{count}}</span>
    <span :class="[{selector_action: show_minus && show_count}, {mobile_selector_action: !show_minus && !show_count}]" @click.prevent="incrementCount">+</span>
</span>  
</template>

<script>
export default {
    data() {
        return {
            count: 0,
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
        }
    },
    methods: {
        decrementCount() {
            if(this.count > 0) {
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