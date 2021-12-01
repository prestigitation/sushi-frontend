<template>
<div class="d-flex justify-center flex-column align-center dashboard_container">
    <span class="d-flex justify-content-center my-3">Cписок заказов</span>
    <div v-if="orders">
        <v-data-table
            :items="orders"
            :items-per-page="5"
            :headers="headers"
            class="elevation-1"
        >
        <template v-slot:item.name="{item}">
            <span 
                class="table_link_col text-decoration-underline blue--text cursor-pointer" 
                @click.prevent="$router.push('/dashboard/order/' + item.id)"
            >
                {{item.name}}
            </span>
        </template>
        </v-data-table>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            headers: [
            {
                text: 'ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Имя', value: 'name' },
            { text: 'E-mail', value: 'email' },
            { text: 'Номер телефона', value: 'phone' },
            { text: 'Cоздан', value: 'created_at' },
            ],
        }
    },
    async mounted() {
        await this.axios.get('order').then(({data}) => {
            if(data) {
                this.orders = data
            }
        })
    }
}
</script>

<style scoped>
.table_link_col:hover {
    cursor: pointer;
}
</style>