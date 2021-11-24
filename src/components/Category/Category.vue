<template>
<div class="category_page">
    <div class="category_header">
        <div class="category_header_left">
            <img :src="category_data.category.preview_image">
            <span class="category_header_name"> {{ category_data.category.name }} </span>
        </div>
        <div class="desktop_filter_selector">
            <div class="grey_label">Сортировка</div>
            <div class="label">
                <span v-if="!selected_desktop_filter">По умолчанию</span>
                <span v-else>{{selected_desktop_filter}}</span>
                <img class="category_desktop_dropdown" src="../../../public/img/CategoryDropdown.svg" 
                    @click.prevent="is_desktop_sort_selector_opened = !is_desktop_sort_selector_opened"
                >
            </div>
        </div>
        <div v-if="is_desktop_sort_selector_opened" class="desktop_filter_selector">
            <FilterSelector
            :data="category_data.products"
            @sortData="setSortedData" />
        </div>
    </div>
    <div class="category_filter_selector">
        <div class="category_filter_content">
            <img src="../../../public/img/CategorySortImage.svg">
            <span class="category_filter_text" v-if="!selected_mobile_filter">Сортировка</span>
            <span v-else class="category_filter_text">{{selected_mobile_filter}}</span>
        </div>
        <div class="category_filter_dropdown">
            <img src="../../../public/img/CategoryDropdown.svg" 
                @click.prevent="is_mobile_sort_selector_opened = !is_mobile_sort_selector_opened"
            >
        </div>
    </div>
    
    <div v-if="is_mobile_sort_selector_opened" >
        <FilterSelector  class="mobile_filter_selector"
        :data="category_data.products" 
        @sortData="setSortedData" />
    </div>

    <div class="category_products">
        <div v-for="product in category_data.products" :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
</div>
</template>

<script>
import FilterSelector from './FilterSelector.vue'
import ProductCard from '../Index/ProductCard.vue'
export default {
    components: {
        ProductCard,
        FilterSelector
    },
    data() {
        return {
            category_data: {},
            selected_mobile_filter: '',
            selected_desktop_filter: '',
            is_mobile_sort_selector_opened: false,
            is_desktop_sort_selector_opened: false,
        }
    },
    async mounted() {
        await this.axios.get(`category/category_page/${this.$route.params.slug}`).then(({data}) => {
            this.category_data = data
        }).catch((e) => {
            console.log(e)
        })
    },
    methods: {
        setSortedData(val, sorted_criteria) {
            this.category_data.products = val
            this.selected_mobile_filter = sorted_criteria
            this.selected_desktop_filter = sorted_criteria
            if(window.innerWidth < 768) {
                this.is_mobile_sort_selector_opened = false
            } else {
                this.is_desktop_sort_selector_opened = false
            }
        },
        setDesktopSortedData(val) {
            this.category_data = val
        }
    },
    watch: {
        category_data() {
            this.is_mobile_sort_selector_opened = false
        }
    }
}
</script>

<style scoped>
.desktop_filter_selector {
    display: block;
}
.category_header {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.category_products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
}
.category_filter_selector {
    display: none;
}
.mobile_filter_selector {
    display: none;
}
.category_header_name {
    margin-left: 20px;
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
}
.product_card {
    margin-bottom: 30px;
}
.category_desktop_dropdown {
    margin-left: 35px;
}
.category_header_left {
    display: flex;
    align-items: center;
}
@media screen and (max-width: 768px) {
    .category_header {
        justify-content: center;
    }
    .category_page {
        max-width: 330px;
        margin-left: auto;
        margin-right: auto;
    }   
    .category_products {
        flex-direction: column;
        flex-wrap: unset !important;
        justify-content: unset !important;
    }
    .category_filter_selector {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0 15px 0;
        height: 50px;
        background: white;
        border-radius: 10px;
    } 
    .category_filter_content,
    .category_filter_dropdown {
        padding: 10px;
    }
    .category_filter_content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .category_filter_text {
        font-family: DIN Pro;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        margin-left: 15px;
    }
    .mobile_filter_selector {
        width: 330px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        background: white;
    }
    .desktop_filter_selector {
        display: none;
    }
    .product_card {
        flex-direction: row;
    }
}
</style>