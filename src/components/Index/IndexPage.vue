<template>
  <div class="index_page">
    <div class="carousel">
      <div v-if="carousel_data.length" class="carousel__container">
        <VueSlickCarousel :arrows="false" :dots="true">
          <div class="carousel_image" v-for="banner in carousel_data" :key="banner.id">
                <div class="carousel_picture_wrapper">
                <img class="carousel_main_picture" :src="banner.image_path">
              </div>
              <div class="carousel_text_wrapper">
                <div class="carousel_text_block">
                  <div>
                    <div class="carousel_text_head">"{{banner.name}}"</div>
                    <div class="carousel_text_count count">{{banner.gram_count}} грамм {{banner.pieces_count}} кусочков</div>
                  </div>
                  <div>
                    <div class="carousel_text_price">
                      <div v-if="banner.discount_price">{{banner.discount_price}} COM</div>
                      <div class="price" v-if="banner.price">{{banner.price}} COM</div>
                    </div>
                  </div>
                  <div class="carousel_button_wrapper" @click.prevent="$router.push(`/product/${banner.slug}`)">
                    <div class="carousel_product_button">
                      Хочу!
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </VueSlickCarousel>
      </div>
    </div>

    <div class="banner_grid">
        <div class="main_grid">
        <div class="listing_first">
          <router-link class="grid_link" :to='"/category/"+ grid_data.large_images[0].slug'>
            <img id="grid_first_block" :src="grid_data.large_images[0].image">
            <span class="grid_text">{{grid_data.large_images[0].name}}</span>
          </router-link>
        </div>
        <div v-for="category in grid_data.small_images" :key="category.id">
          <div class="listing_first" v-if="category.image"> 
            <router-link class="router_link" :to='"/category/"+ category.slug'>
              <img :src="category.image">
              <span class="grid_text">{{category.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="sub_grid">
        <div v-for="category in grid_data.large_images.slice(1)" :key="category.id">
          <div class="listing_second" v-if="category.image">
            <router-link class="router_link" :to='"/category/"+ category.slug'>
              <img :src="category.image">
              <span class="grid_text">{{category.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile_banner_grid">
      <div class="mobile_grid">1</div>
      <div class="mobile_grid">2</div>
      <div class="mobile_grid">3</div>
      <div class="mobile_grid">4</div>
      <div class="mobile_grid">5</div>
      <div class="mobile_grid">6</div>
      <div class="mobile_grid">7</div>
      <div class="mobile_grid">8</div>
      <div class="mobile_grid">9</div>
      <div class="mobile_grid">10</div>
      <div class="mobile_grid">11</div>
      <div class="mobile_grid">12</div>
      <div class="mobile_grid">13</div>
    </div>
    <SortButtonList :selectedCategory="selectedCategory" 
                    @changeCurrentSortCategory="changeCurrentSortCategory"
    />

    <div class="product_cards_block">
      <div class="product_card_changer left_changer">&lt;</div>
      <div class="product_cards">
        <div v-for="product in product_cards" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
      <div class="product_card_changer right_changer">&gt;</div>
    </div>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SortButtonList from './SortButtonList.vue'
import ProductCard from './ProductCard.vue'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
    SortButtonList,
    ProductCard
  },
  data() {
    return {
      selectedCategory: 'created_at',
      grid_data: null,
      carousel_data: null,
      product_list_data: null,
      product_card_start: 0, // индекс, с которого начинается разбивка карточек товара
      product_card_step: 3,
      product_card_end: 3,
    }
  },
  async mounted() {
    await this.axios.get('category/grid_banner').then(({data}) => { if(data) { this.grid_data = data }} )
    await this.axios.get("product/index_page/products_list", {
        params: {
          filter: this.selectedCategory
        }
      }).then((({data}) => {
        if(data) {
          this.product_list_data = data.products
        }
      }))
    await this.axios.get("product/index_page/carousel").then((({data}) => {
        if(data) {
          this.carousel_data = data.carousel
        }
      }))
  },
  methods: {
    changeCurrentSortCategory(category) {
      this.selectedCategory = category
    },
  },
  computed: {
    product_cards() {
      return this.product_list_data.slice(this.product_card_start, this.product_card_end)
    }
  }
}
</script>

<style scoped>
  .carousel {
    margin-top: 20px;
  }
  .main_grid {
    display: grid;
    grid-template-columns: 470px 224px 224px;
    grid-template-rows: 1fr;
    grid-column-gap: 7px;
  }
  .sub_grid {
    display: grid;
    grid-template-columns: 470px auto;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
  }
  .listing_first,
  .listing_second {
    height: 200px;
    margin: 10px 0px 0px 10px;
    border-radius: 5px;
  }
  .listing_second > img {
    width: 450px;
    height: 200px;
  }
  .listing_second > img:last-child {
    width: 450px;
  }
  .grid_text {
    position: relative;
    bottom: 20%;
    margin-left: 10px;
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    color: white;
  }
  .carousel_image {
    height: 470px;
    width: 100%;
    background: white;
    display: flex !important;
  }
  .carousel_main_picture {
    height: 210px;
    width: 210px;
    position: relative;
    bottom: 0;
  }
  .carousel_picture_wrapper {
    align-items: flex-end;
    display: flex;
  }
  .carousel_text_wrapper {
    justify-content: flex-end;
    display: flex;
    width: inherit;
    text-align: end;
  }
  .carousel_text_block {
    margin: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .carousel_text_price {
    margin: 100px 0 0 0;
  }
  .carousel_text_count {
    margin-top: 20px;
  }
  .carousel_text_head {
    font-family: DIN Pro;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
  }
  .carousel_button_wrapper {
    display: flex;
    justify-content: flex-end;
  }
  .product_cards {
    margin: 20px 10px 20px 10px;
    max-height: 397px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }
  .banner_grid {
    margin-top: 30px;
  }
  .product_cards_block {
    display: flex;
    align-items: center;
  }
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
  .mobile_banner_grid {
    display: none;
  }
  #grid_first_block {
    width: 470px;
    height: 200px;
  }
  @media screen and (max-width: 768px){
    .carousel,
    .main_grid,
    .sub_grid,
    .product_sort_buttons,
    .product_cards_block {
      display: none;
    }
    .mobile_banner_grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: "a a"; 
            ;
      grid-gap: 15px;
    }
    .mobile_grid {
      width: 50px;
      height: 50px;
      background: yellow;
    }
    .mobile_banner_grid:nth-child(2+n) {
      grid-template-rows: "a"; 
    }
  }
</style>
<style>

  .slick-dots li button:hover::before,
  .slick-dots li.slick-active button::before {
    color: #FF9846 !important;
  }
</style>