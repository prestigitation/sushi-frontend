<template>
<div class="product_page">
    <div class="product_controls" @click.prevent="$router.go(-1)">
        <div>
            <img src="../../../public/img/product_controls.svg">
        </div>
        <div class="label">Назад</div>
    </div>
    <div v-show="product_data.product">
        <ProductCard 
            :product="product_data.product"
            :show_quantity_selector="true" 
            :on_product_page="true"
            :show_mobile_consists="true"
        />
        <div class="product_recommendations">
            <div class="product_recommendations_header">
                Рекомендуем к этому товару
            </div>
            <div class="mobile_scroll">
                <horizontal-scroll >
                    <product-slider
                        :products="product_data.recommendations" 
                        :show_mobile_arrows="false"
                        :show_add_button="true"
                        :no_data="false"
                        :on_product_page="true"
                    />
                </horizontal-scroll>
            </div>
            <div class="desktop_scroll">
                <product-slider
                    :products="product_data.recommendations" 
                    :show_mobile_arrows="true"
                    :no_data="false"
                    :on_product_page="true"
                    :hide_desktop_arrows="true"
                />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import ProductCard from '../Index/ProductCard.vue'
import ProductSlider from './ProductSlider.vue'
export default {
    components: {
        ProductCard,
        'product-slider': ProductSlider,
        HorizontalScroll
    },
    data() {
        return {
            product_data: null,
            inMobile: null,
        }
    },
    async mounted() {
        await this.axios.get(`product/${this.$route.params.slug}`).then(({data}) => {
            if(data) this.product_data = data
        }).catch((e) => {console.error(e)})
    },
    watch: {
        'window.innerWidth': function(val) {
            if(val < 768) {
                this.inMobile = true
            } else this.inMobile = false
        }
    }
}
</script>

<style scoped>
.product_controls {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
}
.product_recommendations {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.product_recommendations_header {
    display: flex;
    justify-content: center;
    margin: 30px 0 20px 0;
}
@media screen and (max-width: 768px){
    
}
</style>

<style>
.product_page_card {
    display: flex !important;
    width: unset !important;
} 
.product_page_image_container {
    flex-basis: 50% !important;
}
.product_page_info_container {
    padding: 20px 20px 0 20px;
    flex-basis: 50% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-evenly !important;
}
.product_page_price { 
    font-family: DIN Pro !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 30px !important;
    letter-spacing: 0em !important;
}
.product_footer_price {
    margin: 0 10px 0 0 !important;
}
.product_page_info {
    margin: unset !important;
}
.product_page_footer {
    align-items: flex-start !important;
    justify-content: flex-start !important;
    flex-direction: column !important;
}
.product_page_price {
    font-family: DIN Pro !important;
    font-size: 48px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: 60px !important;
    letter-spacing: 0em !important;
}
.product_page_consists {
    margin: 0 0 30px 0 !important;
}
.product_footer_row {
    flex-direction: row !important;
}
.product_price {
    flex-direction: column !important;
}
.product_footer_price {
    margin-bottom: 15px !important;
}
.product_controls {
    padding: 10px;
}
.mobile_scroll {
    display: none;
}
.desktop_scroll {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.product_recommendations {
    margin-bottom: 20px;
}
@media screen and (max-width: 768px){
    .product_card {
        flex-direction: column;
        height: unset !important;
    }
    .product_page_footer {
        width: 100% !important;
        max-width: unset !important;
        justify-content: space-between !important;
        flex-direction: row !important;
    }
    .product_controls {
        height: 50px !important;
    }
    .mobile_scroll {
        display: block;
    }
    .desktop_scroll {
        display: none;
    }
}
</style>