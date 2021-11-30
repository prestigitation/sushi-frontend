<template>
<div class="dashboard_container">
    <router-view />
</div>
</template>

<script>
export default {
    async beforeCreate() {
        await this.axios.get('dashboard/access').catch(() => { this.$router.push('/') }) 
        // при отсутствии доступа к админке перенаправляем пользователя на главную
    },
}
</script>

<style scoped>

</style>