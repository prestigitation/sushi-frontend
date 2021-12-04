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
            <template v-slot:item.action="{item}">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                <template v-slot:activator>
                    <v-btn v-if="!item.courier_id && !item.deliver_start && !item.deliver_end" color="warning" dark @click.prevent="showDelegationModal">
                        Делегировать заказ
                    </v-btn>
                    <div v-else>Нет доступных действий</div>
                </template>

                <v-card>
                    <v-row>
                        <v-col>
                            <div class="text-center pa-5">
                                <div class="h3">Делегировать заказ курьеру</div>
                                <v-select 
                                    :items="couriers"
                                    item-text="name"
                                    item-value="id"
                                    v-model="attached_courier"
                                />
                                <v-btn
                                    color="primary"
                                    text
                                    @click="attachCourierToOrder(item.id)"
                                >
                                    Добавить
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
                </v-dialog>
            </template>

            <template v-slot:item.status="{item}"> 
                <span>{{item.status.name}}</span>
            </template>

            <template v-slot:item.created_at="{item}"> 
                <span>{{new Date(item.created_at).toLocaleString()}}</span>
            </template>

            <template v-slot:item.product_summary="{item}">
                {{ get_product_summary(item.cart) }}
            </template>
        </v-data-table>
    </div>




</div>
</template>

<script>
export default {
    data() {
        return {
            attached_courier: null,
            dialog: false,
            couriers: [],
            orders: [],
            headers: [
            {
                text: 'ID',
                align: 'start',
                value: 'id',
            },
            { text: 'Имя', value: 'name' },
            { text: 'Номер телефона', value: 'phone' },
            { text: 'Сумма заказа', value: 'product_summary'},
            { text: 'Cоздан', value: 'created_at' },
            { text: 'Действие', value: 'action'},
            { text: 'Статус', value: 'status'}
            ],
        }
    },
    async mounted() {
        await this.axios.get('order').then(({data}) => {
            if(data) {
                this.orders = data
            }
        })
        await this.axios.get('dashboard/couriers').then(({data}) => {
            if(data) {
                this.couriers = data
            }
        })
    },
    methods: {
        async showDelegationModal() {
            this.dialog = true
        },
        async attachCourierToOrder(itemId) {
            this.dialog = false
            await this.axios.post(`dashboard/orders/${itemId}/couriers/${this.attached_courier}`)
        },
        get_product_summary(cart) {
            let parsedCart = JSON.parse(cart)
            let summary = 0
            parsedCart.forEach(item => {
                summary += item.quantity * item.price
            })
            return summary
        }
    }
}
</script>

<style scoped>
.table_link_col:hover {
    cursor: pointer;
}
</style>