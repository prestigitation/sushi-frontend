<template>
<div class="cart_order_container">
    <div v-if="!response_message">
        <div class="cart_order_data">
        <div class="cart_order_header">Ваши данные</div>
        <form method="post" class="cart_order_grid_container">
            <div class="cart_grid">
                
                <div class="cart_input_container">
                    <input class="cart_input" type="text" required v-model="phone" placeholder="Телефон">
                    <input class="cart_input" type="text" required v-model="name" placeholder="Имя">
                </div>
                
                
                <cart-adjacent-selector
                    first_property="Наличными"
                    second_property="Картой"
                    @setSelector="setPaymentType"
                > 
                <div slot="first_image">
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1821 9.0755V6.54563C17.1821 5.68778 16.5167 4.99013 15.676 4.92248L13.3265 0.818851C13.1088 0.439323 12.7572 0.168062 12.3366 0.0554233C11.9179 -0.0564485 11.4801 0.00230624 11.1053 0.220412L3.05136 4.90928H1.63684C0.734385 4.90928 0.000488281 5.64314 0.000488281 6.54563V16.3637C0.000488281 17.2661 0.734347 18 1.63684 18H15.5457C16.4482 18 17.1821 17.2661 17.1821 16.3637V13.8338C17.6572 13.6644 18.0002 13.2145 18.0002 12.6819V10.2274C18.0002 9.69476 17.6572 9.24494 17.1821 9.0755ZM14.7253 4.90928H11.1597L13.8339 3.35236L14.7253 4.90928ZM13.4274 2.64236L9.5336 4.90928H7.91849L13.0236 1.93703L13.4274 2.64236ZM11.5172 0.927501C11.7022 0.819235 11.9183 0.790471 12.1248 0.84562C12.3338 0.901537 12.508 1.03657 12.6162 1.22553L12.6171 1.22703L6.2925 4.90928H4.67747L11.5172 0.927501ZM16.3639 16.3637C16.3639 16.8147 15.9967 17.1818 15.5457 17.1818H1.63684C1.18582 17.1818 0.818682 16.8147 0.818682 16.3637V6.54563C0.818682 6.09462 1.18582 5.72748 1.63684 5.72748H15.5457C15.9967 5.72748 16.3639 6.09462 16.3639 6.54563V9.00014H13.9094C12.5559 9.00014 11.4549 10.1011 11.4549 11.4546C11.4549 12.8081 12.5559 13.9091 13.9094 13.9091H16.3639V16.3637ZM17.1821 12.6819C17.1821 12.9076 16.9987 13.091 16.773 13.091H13.9094C13.0069 13.091 12.273 12.3571 12.273 11.4546C12.273 10.5522 13.0069 9.81829 13.9094 9.81829H16.773C16.9987 9.81829 17.1821 10.0017 17.1821 10.2274V12.6819Z"/>
                    </svg>
                </div>
                <div slot="second_image">
                    <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_24_1854)">
                        <path d="M19.7083 3.66665H2.29165C1.0285 3.66665 0 4.69515 0 5.95834V16.0417C0 17.3048 1.0285 18.3333 2.29165 18.3333H19.7083C20.9715 18.3333 22 17.3048 22 16.0417V5.95834C22 4.69515 20.9715 3.66665 19.7083 3.66665ZM21.0833 16.0416C21.0833 16.7997 20.4664 17.4166 19.7083 17.4166H2.29165C1.53355 17.4166 0.916652 16.7997 0.916652 16.0416V5.95834C0.916652 5.20025 1.53355 4.58334 2.29165 4.58334H19.7083C20.4664 4.58334 21.0833 5.20025 21.0833 5.95834V16.0416H21.0833Z"/>
                        <path d="M21.5417 6.41665H0.458348C0.205348 6.41665 0 6.622 0 6.875V9.625C0 9.878 0.205348 10.0833 0.458348 10.0833H21.5417C21.7947 10.0833 22 9.878 22 9.625V6.875C22 6.622 21.7947 6.41665 21.5417 6.41665ZM21.0833 9.16665H0.916652V7.3333H21.0833V9.16665H21.0833Z"/>
                        <path d="M8.70835 12.8333H3.20835C2.95535 12.8333 2.75 13.0387 2.75 13.2917C2.75 13.5447 2.95535 13.75 3.20835 13.75H8.70835C8.96135 13.75 9.1667 13.5446 9.1667 13.2916C9.1667 13.0386 8.96135 12.8333 8.70835 12.8333Z"/>
                        <path d="M8.70835 14.6667H3.20835C2.95535 14.6667 2.75 14.872 2.75 15.125C2.75 15.378 2.95535 15.5834 3.20835 15.5834H8.70835C8.96135 15.5834 9.1667 15.378 9.1667 15.125C9.16665 14.872 8.96135 14.6667 8.70835 14.6667Z"/>
                        <path d="M17.8751 11.9167H16.9585C16.2004 11.9167 15.5835 12.5336 15.5835 13.2917V14.2083C15.5835 14.9664 16.2004 15.5833 16.9585 15.5833H17.8751C18.6332 15.5833 19.2501 14.9664 19.2501 14.2083V13.2917C19.2501 12.5336 18.6332 11.9167 17.8751 11.9167ZM18.3335 14.2084C18.3335 14.4614 18.1281 14.6667 17.8751 14.6667H16.9585C16.7055 14.6667 16.5001 14.4614 16.5001 14.2084V13.2917C16.5001 13.0387 16.7055 12.8334 16.9585 12.8334H17.8751C18.1281 12.8334 18.3335 13.0387 18.3335 13.2917V14.2084Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_24_1854">
                        <rect width="22" height="22" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                </cart-adjacent-selector>

                <div class="cart_input_container">
                    <span class="sum_select"> <span class="sum_select_rect">✓</span> Подготовить сдачу с </span>
                    <input class="cart_input cart_sum_input" type="text" v-model="sum" placeholder="Сумма">
                </div>

                <div class="cart_input_container">
                    <input type="text" class="cart_input cart_comment" v-model="comment" placeholder="Комментарий к заказу">
                </div>

                <div class="cart_input_container">
                    <input type="text" class="cart_input cart_comment" v-model="promocode" placeholder="Введите промокод">
                </div>
            </div>
            
            
            <div class="cart_grid">
                <cart-adjacent-selector
                    first_property="Курьером"
                    second_property="Самовывоз"
                    @setSelector="setDeliveryType"
                />

                <div class="cart_input_container">
                    <input class="cart_input coordination_street" type="text" required v-model="street" placeholder="Улица">
                    <input class="cart_input coordination_house" type="text" required v-model="house" placeholder="Дом">
                </div>

                <div class="cart_input_container">
                    <input class="cart_input coordination_details" type="text" v-model="apartment" placeholder="Кв.">
                    <input class="cart_input coordination_details" type="text" v-model="entrance" placeholder="Подъезд">
                    <input class="cart_input coordination_details" type="text" required v-model="floor" placeholder="Этаж">
                    <input class="cart_input coordination_details" type="text" v-model="house_code" placeholder="Код">
                </div>

                <cart-adjacent-selector
                    first_property="На сейчас"
                    second_property="На время"
                    @setSelector="setTimeType"
                />

            </div>
        </form>
    </div>
    <div class="cart_order_policy">
        <input type="submit" class="carousel_product_button cart_order_button" placeholder="Отправить заказ" @click.prevent="sendOrder">
        <span class="cart_order_text">Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с Публичной оффертой</span>
    </div>
    </div>
    

    <div v-else class="response_message label">
        <span>{{response_message}}</span>
        <div class="label" @click.prevent="$router.push('/')">
            Вернуться на главную
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartAdjacentSelector from './CartAdjacentSelector.vue'
export default {
    components: { CartAdjacentSelector },
    data() {
        return {
            sum: '',
            name: '',
            phone: '',
            comment: '',
            street: '',
            house: '',
            apartment: '',
            entrance: '',
            house_code: '',
            floor: '',
            promocode: '',
            deliveryType: 1,
            paymentType: 1,
            timeType: 1,
            
            response_message: ''
        }
    },
    methods: {
        setDeliveryType(value) {
            this.deliveryType = value
        },
        setPaymentType(value) {
            this.paymentType = value;
        },
        setTimeType(value) {
            this.timeType = value
        },
        async sendOrder() {
            let formData = new FormData()
            formData.append('sum', this.sum)
            formData.append('name', this.name)
            formData.append('phone', this.phone)
            formData.append('comment', this.comment)
            formData.append('street', this.street),
            formData.append('house', this.house),
            formData.append('apartment', this.apartment),
            formData.append('entrance', this.entrance),
            formData.append('house_code', this.house_code),
            formData.append('floor', this.floor),
            formData.append('delivery_type', this.deliveryType)
            formData.append('payment_type', this.paymentType)
            formData.append('time_type', this.timeType)
            formData.append('cart', JSON.stringify(this.getCart))
            formData.append('promocode', this.promocode)
            
            await this.axios.post('order', formData, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then((response) => {
                this.response_message = response.data.message
                //this.clear_cart()
            }).catch((err) => console.log(err))
        }
    },
    computed: {
        ...mapGetters([
            'getCart'
        ]),
        ...mapActions([
            'clear_cart'
        ])
    }
}
</script>

<style scoped>
.cart_order_container {
    max-width: 760px;
    margin: 0 auto 0 auto;
}
.cart_order_grid_container,
.cart_input_container {
    display: flex;
    justify-content: space-between;
}
.cart_input_container {
    gap: 20px;
}
.cart_input {
    width: 162px;
    height: 34px;
    border-radius: 5px;
}
.cart_grid > div {
    margin: 20px 0 20px 0;
}
.cart_grid {
    width: 360px;
}
.sum_select_rect {
    width: 20px;
    height: 20px;
    background: #FF9846;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 0 10px 0 10px;
}
.cart_sum_input {
    width: 152px;
}
.sum_select {
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart_comment {
    flex-basis: 100% !important;
}
.cart_order_header {
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 20px 0 10px 0;
}
.coordination_street {
    width: 80% !important;
}
.coordination_house {
    width: 20% !important;
}
.coordination_details {
    width: 25% !important;
}
.cart_order_button {
    width: 100% !important;
}
.cart_order_text {
    text-align: center;
    display: flex;
}
.response_message {
    text-align: center;
    margin: 20px 0 20px 0;
}
</style>