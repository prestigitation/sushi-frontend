<template>
  <div class="page_container">
    <SidePanel :categories="categories" />
    <div class="page_content">
      <Header />
      <div class="page_inner">
        <router-view :categories="categories" />
        <Footer />
      </div>
    </div>
    <CartSidePanel />
  </div>
</template>

<script>
import SidePanel from './components/Index/SidePanel.vue'
import CartSidePanel from './components/Index/CartSidePanel.vue'
import Header from './components/Index/Header.vue'
import Footer from './components/Index/Footer.vue'
import axios from 'axios'

import './assets/style/index.css'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
export default {
  name: 'App',
  components: {
    SidePanel,
    Header,
    CartSidePanel,
    Footer
  },
  data() {
    return {
      categories: null
    }
  },
  async mounted() {
    let {data} = await axios.get('category');
    this.categories = data
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .page_container {
    display: flex;
  }
  .page_content {
    width: 100%;
    background: #F2F2F2;
  }
  .page_inner {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width:768px) {
    .page_inner {
      max-width: 100%;
    }
  }
</style>
