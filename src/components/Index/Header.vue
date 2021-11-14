<template>
  <div class="header">
      <BusinessCard />
      <Navigation />
  </div>
</template>

<script>
import BusinessCard from '../Header/BusinessCard.vue'
import Navigation from '../Header/Navigation.vue'
export default {
    components: {
        BusinessCard,
        Navigation,
    }
}
</script>

<style scoped>
    .header {
        height: 95px;
        width: 100%;
        display: flex;
        border-bottom: 0.5px solid #A4ACAD;
    }

    @media screen and (max-width: 768px) {
        .header {
            background: white;
            height: 50px;
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

</style>