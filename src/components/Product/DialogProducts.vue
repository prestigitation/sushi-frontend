<template>
<div class="pa-5">
        <v-card
            v-for="item in cart_data" :key="item.id"
        max-width="400"
        class="mx-auto my-4"
    >
        <div class="dashboard_product_card">
            <span>
                <img class="dashboard_product_image" :src="item.image_path">
            </span>
            <div class="d-flex flex-column justify-space-around">
                <span>
                    {{item.name}}
                </span>

                <div>
                    {{item.price}}(цена) * {{item.quantity}}(кол-во) = <span class="font-weight-bold">{{item.price * item.quantity}} COM</span>
                </div>
            </div>
        </div>
    </v-card>
    <div class="text-decoration-underline">Суммарно : {{get_product_summary(cart_data)}}COM</div>
    <div>Адрес: ул.{{order.street}} дом {{order.house}}</div>
    <div v-if="order.apartment">'Квартира {{order.apartment}}</div>
    <div v-if="order.entrance"> подъезд {{order.entrance}}</div>
    <div v-if="order.floor">Этаж {{order.floor}}</div>
    <div v-if="order.house_code">код {{order.house_code}}</div>
    <div v-if="order.phone && order.name">Телефон: {{order.phone}}, имя : {{order.name}}</div>
    <div v-if="order.comment">Комментарий клиента: {{order.comment}}</div>
    <div class="my-3 d-flex justify-center">
        <v-btn v-if="!order.deliver_start" color="success" class="w-50" @click.prevent="$emit('takeOrder', order.id)">
            Взять заказ
        </v-btn>
        <v-btn v-else-if="order.deliver_start && !order.deliver_end" color="secondary" @click.prevent="$emit('finishOrder', order.id)">
            Отметить выполненным
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            cart_data: []
        }
    },
    props: {
        order: {
            type: Array,
            default: () => []
        }
    },
    async mounted() {
        this.cart_data = JSON.parse(this.order.cart)
    },
    methods: {
        get_product_summary(cart) {
            let summary = 0
            cart.forEach(item => {
                summary += item.quantity * item.price
            })
            console.log(summary)
            return summary
        },
    }
}
</script>

<style scoped>
.dashboard_product_card {
    display: flex;
}
.dashboard_product_image {
    width: 100px !important;
    height: 100px !important;
}
</style>