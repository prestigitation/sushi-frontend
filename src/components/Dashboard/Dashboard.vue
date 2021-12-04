<template>
<div class="dashboard_wrapper">
    <div v-if="$route.name == 'dashboard_main'">dash</div>
    <div v-else>
        <component :is="dashboard_component" />
    </div>
</div>
</template>

<script>
import dashboard_mapping from '../mixins/dashboard_mapping'
import AdminOrder from './Admin/Orders/Order.vue'
import CourierOrder from './Courier/Orders/Order.vue'
import AdminUser from './Admin/Users/User.vue'
export default {
    mixins: [dashboard_mapping],
    async beforeCreate() {
        await this.axios.get('dashboard/access').catch(() => { this.$router.push('/') }) 
        // при отсутствии доступа к админке перенаправляем пользователя на главную
    },
    components: {
        AdminOrder,
        AdminUser,

        CourierOrder,
    },
    mounted() {
        console.log(this.dashboard_component)
    }
}
</script>

<style scoped>
.dashboard_wrapper {
    height: 100vh;
}
</style>