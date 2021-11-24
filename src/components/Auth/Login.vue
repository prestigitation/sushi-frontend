<template>
<div class="auth_page">
    <div class="auth_header">Вход</div>
    <form class="auth_form" method="POST" @submit.prevent="loginUser">
        <label for="email">
            Адрес электронной почты
        </label>
        <input v-model="email" class="input_field" type="email" name="email">
        <label for="password">
            Пароль
        </label>
        <input v-model="password" class="input_field" type="password" name="password">
        <input class="submit_button" type="submit" placeholder="Войти">
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        loginUser() {
            let formData = new FormData();
            formData.append('email', this.email)
            formData.append('password', this.password)
            this.axios.post('/auth/login', formData).then(({data}) => {
                if(data.access_token) {
                    localStorage.setItem('access_token', data.access_token)
                    this.$store.dispatch('auth_login', {
                        name: data.name,
                        id: data.id,
                    })
                    this.$router.push('/')
                }
            }).catch(error => console.log(error))
        }
    }
}
</script>

<style>
.auth_form {
    width: 50%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
}
.auth_header {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

.input_field {
    margin: 10px 0 10px 0px;
    border: 1px solid black;
    padding: 5px;
}

.input_field:hover {
    background: #FF9846;
    transition: all 0.3s;
}

.submit_button {
    width: 30%;
    height: 40px;
    padding: 5px;
    margin: 0 auto 0 auto;
    background: #FF9846;
}
.submit_button:hover {
    cursor: pointer;
}
</style>