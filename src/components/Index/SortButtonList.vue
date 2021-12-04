<template>
<div class="product_sort_buttons">
    <div v-for="category in categoryList" :key="category.id">
    <div class="product_sort_button" 
        :class="{'active': selectedCategory !== category.changingSelector}" 
        @click.prevent="changeCurrentSortCategory(category.changingSelector)">
        {{category.text}}
    </div>
</div>
</div> 
</template>

<script>
export default {
    data() {
        return {
            categoryList: [
                {id: 0, changingSelector: 'created_at', text: 'Новинки'},
                {id: 1, changingSelector: 'order_count', text: 'Популярное'},
            ]
        }
    },
    props: {
        selectedCategory: String
    },
    methods: {
        async changeCurrentSortCategory(category) {
            this.$emit('changeCurrentSortCategory', category)
        }
    }
}
</script>

<style scoped>
.product_sort_buttons {
    margin: 50px 0 0 10px;
    display: flex;
}
.product_sort_button {
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    margin-right: 30px;
    cursor: pointer;
}
.active {
    color: #A4ACAD;
    text-decoration: underline;
}
</style>