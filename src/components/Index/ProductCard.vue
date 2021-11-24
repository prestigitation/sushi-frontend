<template>
<div v-if="product != {}" :class="['product_card', {product_page_card: on_product_page} ]" @click.prevent="$router.push(`/product/${product.slug}`)">
    <div :class="['product_image_container', {product_page_image_container: on_product_page}]">
        <img class="product_image" :src="product.image_path">
    </div>
    <div :class="['product_info_container', {product_page_info_container: on_product_page}]">
        <div :class="['product_info', {product_page_info: on_product_page}]">
            <div    :class="['product_card_price', {product_page_price: on_product_page, product_mobile_align: no_data}]" 
                    @click.prevent="navigateToProduct()">
                <span v-if="no_data">{{product.name | capitalize}}</span>
                <span v-else> {{product.name}}</span>
            </div>
            <div class="product_card_count">
                <div 
                :class="['carousel_text_count', 'grey_label', {mobile_hide: no_data} ]">
                    {{product.gram_count}} грамм {{product.pieces_count}} кусочков
                </div>
            </div>
        </div>
        <hr class="product_split_line">
        <div :class="['product_footer', {product_page_footer: on_product_page, mobile_hide: no_data}]">
            <span 
            :class="['product_price', 'price', {product_footer_price: on_product_page, 
                    product_footer_row: !on_product_page}]"
            >
                <span>{{product.price}} COM</span>
                <span class="product_quantity_selector" v-if="show_quantity_selector">
                    <QuantitySelector @changeProductQuantity="setProductQuantity" />
                </span> 
            </span>
            <div class="product_page_consists" v-if="on_product_page && product.consists.length">
                <div class="consists_header">Состав</div>
                <span class="consists_name"  v-for="consist in product.consists" :key="consist.id">
                    {{consist.name}} <span v-if="consist.id != product.consists.length">, </span>
                </span>
            </div>
            <slot name="button">
                <span class="carousel_product_button product_button" @click.prevent="handleButtonClick">Хочу!</span>
            </slot>
        </div>
        <div class="mobile_product_consists" v-if="show_mobile_consists && product.consists.length">
            <div class="mobile_consists_header">Состав</div>
            <horizontal-scroll v-if="product.consists">
                <product-slide
                    v-if="product.consists"
                    :products="product.consists"
                    :show_mobile_arrows="false"
                    :no_data="true"
                /> 
            </horizontal-scroll>
        </div>
    </div>
</div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import ProductSlider from '../Product/ProductSlider.vue'
import QuantitySelector from '../Product/QuantitySelector.vue'
export default {
    components: {
        QuantitySelector,
        'product-slide': ProductSlider,
        HorizontalScroll,
    },
    props: {
        product: {
            type: Object,
            default: () => {}
        },
        show_quantity_selector: {
            type: Boolean,
            default: () => false
        },
        show_consists: {
            type: Boolean,
            default: () => false
        },
        on_product_page: {
            type: Boolean,
            default: () => false
        },
        show_mobile_consists: {
            type: Boolean,
            default: () => false
        },
        no_data: {
            type: Boolean,
            default: () => false
        }
    },
    methods: {
        setProductQuantity() { //val
            //TODO:
        },
        navigate_to_product() {
            if(!this.no_data && !this.on_product_page) {
                this.$router.push(`/product/${this.product.slug}`)
            }
        },
        handleButtonClick() {
            if(!this.no_data) {
                this.$router.push(`/product/${this.product.slug}`)
                window.location.reload()
            }
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style scoped>
.mobile_product_consists {
    display: none;
}
.product_suggestions {
    display: none;
}
.product_card {
    height: 397px;
    width: 260px;
    background: rgb(255, 255, 255);
}
.product_image_container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.product_image {
    width: 250px;
    height: 200px;
}
.product_split_line {
    color:grey;
    height:0.15px;
}
.product_info {
    margin: 30px 15px 20px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
}
.product_card_price {
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}
.product_card_price:hover {
    cursor: pointer;
}
.product_footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
}
.product_price {
    font-size: 21px;
}
.product_button {
    width: 150px;
    height: 40px;
    margin-bottom: unset !important;
    margin-right: unset !important;
    border-radius: 5px;
}

@media screen and (max-width: 768px) {
    .product_mobile_align {
        text-align: center !important;
    }
    .mobile_product_consists {
        display: flex;
        flex-direction: column;
    }
    .product_card {
        display: flex;
        width: auto !important;
        height: 120px;
        padding: 10px;
        margin: 10px 0 10px 0;
        border-radius: 10px;
    }
    .product_page_info_container {
        padding: 20px 20px 0px 20px !important;
    }
    .product_quantity_selector,
    .product_page_consists {
        display: none;
    }
    .product_image {
        width: 100px;
        height: 85px;
    }
    .product_info {
        height: unset;
        margin: 20px 10px 0 10px;
    }
    .product_split_line {
        display: none;
    }
    .product_button {
        width: 95px;
        height: 26px !important;
    }
    .product_price,.product_button {
        font-family: DIN Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
    }
    .product_price {
        margin: 0 10px 0 10px;
        font-family: DIN Pro;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
    }
    .product_card_price {
        font-family: DIN Pro;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
    }
    .carousel_text_count {
        font-family: DIN Pro;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
    }
    .product_image_container {
        margin-right: 10px;
    }
    .product_footer {
        justify-content: space-around;
        flex-direction: row;
        max-width: 216px;
        margin-top: 20px;
    }
    .product_suggestions {
        display: flex;
        justify-content: center;
        margin: 30px 0 20px 0;
    }
    .mobile_consists_header {
        display: flex;
        justify-content: center;
    }
}
</style>