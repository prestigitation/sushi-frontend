<template>
  <div class="index_page">
    <div class="carousel">
      {{carousel_data}}
      <VueSlickCarousel :arrows="false" :dots="true">
        <div class="carousel_image">1</div>
        <div class="carousel_image">2</div>
        <div class="carousel_image">3</div>
        <div class="carousel_image">4</div>
        <div class="carousel_image">5</div>
      </VueSlickCarousel>
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
          <div class="listing_first"> 
            <router-link class="router_link" :to='"/category/"+ category.slug'>
              <img :src="category.image">
              <span class="grid_text">{{category.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="sub_grid">
        <div v-for="category in grid_data.large_images.slice(1)" :key="category.id">
          <div class="listing_second">
            <router-link class="router_link" :to='"/category/"+ category.slug'>
              <img :src="category.image">
              <span class="grid_text">{{category.name}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <SortButtonList :selectedCategory="selectedCategory" 
                    @changeCurrentSortCategory="changeCurrentSortCategory"
    />
    {{product_list_data}}

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import SortButtonList from './SortButtonList.vue'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel,
    SortButtonList,
  },
  data() {
    return {
      selectedCategory: 'created_at',
      grid_data: null,
      carousel_data: null,
      product_list_data: null,
    }
  },
  async mounted() {
    await this.axios.get('category/grid_banner').then(({data}) => { if(data) { this.grid_data = data }} )
    /*await this.axios.get("product/index_page/", {
        params: {
          filter: this.selectedCategory
        }
      }).then((({data}) => {
        if(data) {
          this.carousel_data = data.carousel
          this.product_list_data = data.products
        }
      }))*/
  },
  methods: {
    changeCurrentSortCategory(category) {
      this.selectedCategory = category
    },
  },
}
</script>

<style scoped>
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
  }
  .banner_grid {
    margin-top: 30px;
  }
  #grid_first_block {
    width: 470px;
    height: 200px;
  }
</style>
<style>

  .slick-dots li button:hover::before,
  .slick-dots li.slick-active button::before {
    color: #FF9846 !important;
  }
</style>