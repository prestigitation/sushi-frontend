<template>
<div class="auth_page">
    <div class="auth_header">Регистрация</div>
    <form class="auth_form" method="POST" @submit.prevent="registerUser">
        
        <label for="name">
            Логин
        </label>
        <input class="input_field" type="text" v-model="name" name="name" required>
        
        <label for="email">
            Адрес электронной почты
        </label>
        <input required class="input_field" v-model="email" type="email" name="email">
        
        <label for="password">
            Пароль
        </label>
        <input required class="input_field" v-model="password" type="password" name="password">
        
        <input class="submit_button" type="submit" placeholder="Войти">
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        }
    },
    methods: {
        registerUser() {
            let formData = new FormData();
            formData.append('name', this.name)
            formData.append('email', this.email)
            formData.append('password', this.password)
            this.axios.post('/auth/register', formData).then(response => console.log(response)).catch(error => console.log(error))
        }
    }
}
</script>

<style>

</style>