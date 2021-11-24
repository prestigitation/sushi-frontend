<template>
<div class="side_panel">
    <div class="side_panel__container">
        <img class="logo_image" src="../../../public/img/logo.png" @click.prevent="$router.push('/')">
        <span class="logo_sign" @click.prevent="$router.push('/')"> ROMSEM </span>
        <div class="logo_line" />
        <div class="side_panel_categories" v-for="category in categories" :key="category.id">
            <img v-if="category.preview_image" class="category_image" :src="category.preview_image">
            <span v-if="category.preview_image" 
                @click.prevent="$router.push(`/category/${category.slug}`)"
                :class="{'category_empty_preview': !category.preview_image}" 
                class="category_text label">{{category.name}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    data() {
    return {
        categories: null,
        carousel: null,
    }
    },
    async mounted() {
        let {data} = await axios.get('category');
        this.categories = data
        /*await axios.get('product/index_page').then((({data}) => {
            if(data) {
                this.carousel = data
            }
        }))*/
    }
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
    .side_panel_categories {
        width: 215px;
        display: flex;
        justify-content: center;
        margin: 10px 0px 10px 0px;
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
    .logo_sign,.logo_image:hover {
        cursor: pointer;
    }

    .category_text {
        font-family: DIN Pro;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        width: 105px;
    }
    .category_empty_preview {
        text-align: center;
    }
    .category_image {
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }

    @media screen and (max-width:768px) {
        .side_panel {
            display: none;
        }
    }
</style>