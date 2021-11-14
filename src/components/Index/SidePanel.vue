<template>
<div class="side_panel">
    <div class="side_panel__container">
        <img class="logo_image" src="../../../public/img/logo.png">
        <span class="logo_sign"> ROMSEM </span>
        <div class="logo_line" />
        <div class="side_panel_categories" v-for="category in categories" :key="category.id">
            <img :src="category.preview_image">
            <span>{{category.name}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        categories: Array
    },
}
</script>

<style scoped>
    .side_panel {
        width: 320px;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    .side_panel__container {
        display: flex;
        flex-direction: column;
        margin: 10px;
        align-items: center;
    }
    .logo_sign {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        font-family: Nexa;
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
    }
    .logo_line {
        width: 180px;
        border: 0.5px solid #A4ACAD;
        margin-top: 30px;
    }
    .logo_image {
        width: 130px;
        height: 130px;
    }

    @media screen and (max-width:768px) {
        .side_panel {
            display: none;
        }
    }
</style>