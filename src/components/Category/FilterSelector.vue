<template>
<div class="filter">
    <div v-for="filter in filters" :key="filter.name">
        <div class="filter_name" @click.prevent="sortData(filter)">{{filter.name}}</div>
    </div>
</div>
</template>

<script>
export default {
    props: ['data'],
    data() {
        return {
            filters: [
                {
                    name: 'По умолчанию',
                    sorting_field: 'price', 
                    sorting_order: 'asc'
                },
                {
                    name: 'Название',
                    sorting_field: 'name', 
                    sorting_order: 'asc'
                },
                {
                    name: 'Сначала дешевле',
                    sorting_field: 'price', 
                    sorting_order: 'asc'
                },
                {
                    name: 'Сначала дороже',
                    sorting_field: 'price', 
                    sorting_order: 'desc'
                },
                {
                    name: 'Количество кусочков',
                    sorting_field: 'pieces_count', 
                    sorting_order: 'asc'
                },
                {
                    name: 'Вес',
                    sorting_field: 'gram_count', 
                    sorting_order: 'asc'
                },
            ]
        }
    },
    methods: {
        sortData(filter) {
            let filteredArray = this.data.sort((el1, el2) => {
                switch(filter.sorting_field) {
                    case 'price': {
                        return el1.price > el2.price
                    }
                    case 'name': {
                        return el1.name.charCodeAt(0) > el2.name.charCodeAt(0)
                    }
                    case 'pieces_count': {
                        return el1.pieces_count > el2.pieces_count
                    }
                    case 'gram_count': {
                        return el1.gram_count > el2.gram_count
                    }
                }
            })
            if(filter.sorting_order == 'asc') {
                this.$emit('sortData', filteredArray, filter.name)
            } else if (filter.sorting_order == 'desc') {
                this.$emit('sortData', filteredArray.reverse(), filter.name)
            }
        }
    }
}
</script>

<style scoped>
.filter_name {
    margin: 10px 0 10px 0;
    cursor: pointer;
    font-family: DIN Pro;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
}
</style>