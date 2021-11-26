<template>
<div class="product_cards_block" v-if="products">
    <div v-if="show_mobile_arrows" 
        :class="['product_card_changer', 'left_changer', {hide_mobile_arrows: !show_mobile_arrows, hide_desktop_arrows: !show_desktop_arrows}]" 
        @click.prevent="setProductsSlider('left')"
        >&lt;
    </div>
    
    <div class="product_cards">
        <div v-for="product in products_splitted" :key="product.id">
            <product-card 
                :product="product" 
                :show_quantity_selector="false" 
                :show_consists="false"
                :no_data="no_data" 
                :on_product_page="on_product_page"
                :is_recommendation="true"
            >
                <div slot="button" v-if="show_add_button">
                    <quantity-selector
                        :show_minus="false"
                        :show_count="false"
                    />
                </div>
            </product-card>
        </div>
    </div>
    
    <div v-if="show_mobile_arrows" 
        :class="['product_card_changer', 'right_changer', {hide_mobile_arrows: !show_mobile_arrows, hide_desktop_arrows: !show_desktop_arrows}]" 
        @click="setProductsSlider('right')"
        >&gt;
    </div>
</div>
</template>

<script>
import QuantitySelector from './QuantitySelector.vue'
import ProductCard from "../Index/ProductCard.vue"
export default {
    name: 'ProductSlider',
    components: {
        'product-card': ProductCard,
        'quantity-selector': QuantitySelector
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        show_mobile_arrows: {
            type: Boolean,
            default: () => true
        },
        no_data: {
            type: Boolean,
            default: () => false
        },
        show_add_button: {
            type: Boolean,
            default: () => false
        },
        on_product_page: {
            type: Boolean,
            default: () => false
        },
        show_desktop_arrows: {
            type: Boolean,
            default: () => true
        }
    },
    data() {
        return {
            product_card_start: 0, // индекс, с которого начинается разбивка карточек товара
            product_card_step: 3,
            product_card_end: 3,
        }
    },
    computed: {
        products_splitted() {
            return this.products.slice(this.product_card_start, this.product_card_end)
        }
    },
    methods: {
        setProductsSlider(target) {
        switch(target) {
            case 'right': {
            if(this.products[this.product_card_start + this.product_card_step]) {
                this.product_card_start += this.product_card_step
                this.product_card_end+= this.product_card_step
            }
            break
            }
            case 'left': {
            if(this.product_card_start >= this.product_card_step) {
                this.product_card_start -= this.product_card_step
                this.product_card_end -= this.product_card_step
            }
            }
            break
        }
        }
    }
}
</script>

<style scoped>
.product_card_changer {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
} 
.right_changer {
    margin-left: auto;
}
.left_changer {
    margin-right: auto;
}
.product_cards_block {
    display: flex;
    align-items: center;
}
.product_cards {
    display: flex;
    gap: 20px;
}
.hide_desktop_arrows {
    display: none !important;
}
@media screen and (max-width: 768px){
    .hide_mobile_arrows {
        display: none !important;
    }
}
</style>