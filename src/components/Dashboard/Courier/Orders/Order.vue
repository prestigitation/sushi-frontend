<template>
<div>
    <v-subheader>
        Ваши заказы
    </v-subheader>
    <v-data-table
            v-if="orders.length"
            :items="orders"
            :items-per-page="5"
            :headers="headers"
            class="elevation-1"
    > 
        <template v-slot:item.status="{item}">
            <span class="table_link_col text-decoration-underline blue--text cursor-pointer">
                {{item.status.name}}
                <span v-if="item.status.name == 'Делегировано'">вам</span>
            </span>
        </template>

        <template v-slot:item.actions="{item}">
            <v-dialog
                        v-model="dialog"
                        width="500"
                    >
                    <template v-slot:activator>
                        <v-btn @click.prevent="fetchOrder(item.id)" v-if="item.status.name == 'Делегировано' || item.status.name == 'В процессе' || item.status.name == 'Доставлено'" color="success">
                            Просмотреть данные заказа
                        </v-btn>
                    </template>

                    <v-card>
                        <v-subheader>
                            Данные о заказе
                        </v-subheader>
                        <dialog-products 
                            :order="order" 
                            @takeOrder="takeOrder"
                            @finishOrder="finishOrder"
                        />
                    </v-card>
            </v-dialog>
        </template>
    </v-data-table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import DialogProducts from '../../../Product/DialogProducts.vue'

export default {
    components: {
        DialogProducts
        
    },
    data() {
        return {
            dialog: false,
            orders: [],
            headers: [
                { text: 'ID', value: 'id' },
                { text: 'Статус', value: 'status' },
                { text: 'Действия', value: 'actions', },
                { text: 'Дата начала', value: 'deliver_start'},
                { text: 'Дата завершения', value: 'deliver_end'},
            ],
            order: {}
        }
    },
    async mounted() {
        await this.axios.get(`dashboard/couriers/${this.getUser.id}/orders`).then(({data}) => {
            if(data) this.orders = data
        })
    },
    computed: {
        ...mapGetters([
            'getUser'
        ])
    },
    methods: {
        async fetchOrder(id) {
            await this.axios.get(`order/${id}`).then(({data}) => {
                if(data) this.order = data
                this.dialog = true
            })
        },
        async takeOrder(orderId) {
            await this.axios.post(`dashboard/orders/${orderId}/take`).then(() => window.location.reload())
        },
        async finishOrder(orderId) {
            await this.axios.post(`dashboard/orders/${orderId}/complete`).then(() => window.location.reload())
        }
    }
}
</script>

<style>

</style>