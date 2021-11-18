<template>
<div class="product_card" @click.prevent="$router.push(`/product/${product.slug}`)">
    <div class="product_image_container">
        <img class="product_image" :src="product.image_path">
    </div>
    <div class="product_info">
        <div class="product_card_price" @click.prevent="$router.push(`/product/${product.slug}`)">{{product.name}}</div>
        <div class="product_card_count">
            <div class="carousel_text_count grey_label">{{product.gram_count}} грамм {{product.pieces_count}} кусочков</div>
        </div>
    </div>
    <hr style="color:grey;height:0.15px;">
    <div class="product_footer">
        <span class="product_price price">{{product.price}} COM</span> 
        <span class="carousel_product_button product_button">Хочу!</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style scoped>
.product_card {
    height: 397px;
    width: 289px;
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
}
.product_price {
    font-size: 21px !important;
}
.product_button {
    width: 150px !important;
    height: 40px !important;
    margin-bottom: unset !important;
    margin-right: unset !important;
    border-radius: 5px;
}
</style>