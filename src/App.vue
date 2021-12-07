<template>
  <v-app>
    <div class="page_container">
      <SidePanel />
      <div class="page_content">
        <Header />
        <div class="page_inner">
          <router-view />
        </div>
        <Footer />
      </div>
      <CartSidePanel />
    </div>
  </v-app>
</template>

<script>
import SidePanel from './components/Index/SidePanel.vue'
import CartSidePanel from './components/Index/CartSidePanel.vue'
import Header from './components/Index/Header.vue'
import Footer from './components/Index/Footer.vue'
import axios from 'axios'

import './assets/style/index.css'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
import 'vuetify/dist/vuetify.min.css'

axios.defaults.baseURL = 'http://127.0.0.1:80/api/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS",
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token"
axios.interceptors.request.use(config => {
  let access_token = localStorage.getItem("access_token")
  if(access_token) {
    config.headers.authorization = `Bearer ${access_token}`
  }
  return config
})

axios.interceptors.response.use((config) => {
  let access_token = localStorage.getItem("access_token")
  if(access_token) {
    config.headers.authorization = `Bearer ${access_token}`
  }
  return config
},error => {
    if(error.response.status == 401) {
      axios.post('auth/refresh', {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }).then(res => {
        localStorage.setItem('access_token', res.data.access_token);
        error.config.headers.authorization = `Bearer ${res.data.access_token}`
        return axios.request(error.config)
      })
      .catch(err => {
        return Promise.reject(err)
      })
    }
  return Promise.reject(error)
})
export default {
  name: 'App',
  components: {
    SidePanel,
    Header,
    CartSidePanel,
    Footer
  },
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
  .page_inner,
  .footer_container {
    /*width: 90%;*/
    max-width: 950px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  @media screen and (max-width:768px) {
    .page_inner {
      max-width: 100%;
    }
    body {
      overflow-x: hidden;
    }
  }
</style>
