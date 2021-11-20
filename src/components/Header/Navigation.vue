<template>
<div class="header_navigation">
    <div class="header_location">
        <div class="grey_label">Город</div>
        <div class="label">Бишкек</div>
    </div>
    <div class="header_info">
        <div class="label">Отзывы</div>
        <div class="label">Доставка и оплата</div>
            <router-link class="router_link auth_link" to="/login">
                <div class="label">
                    Вход
                </div>
            </router-link>
            <router-link class="router_link auth_link" to="/register">
                <div class="label">
                    Регистрация
                </div>
            </router-link>
        <img class="search_image" src="../../../public/img/Search.svg">
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .auth_link {
        color: black;
        margin: 0px 0px 0px 10px;
    }
    .header_navigation {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header_navigation > div {
        margin: 20px;
    }
    .header_info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .header_info > div {
        margin-left: 10px;
    }
    .search_image {
        margin-left: 30px;
    }
    @media screen and (max-width:768px) {
        .header_location {
            display: none;
        }
        .header_info > .label {
            display: none;
        }
        .header_navigation {
            justify-content: flex-end;
            width: 10vh;
        }
        .auth_link {
            display: none;
        }
    }
</style>