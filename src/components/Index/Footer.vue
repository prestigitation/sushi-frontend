<template>
<div class="footer_container">
    <span class="footer_title">Заказать суши в Бишкеке</span>
    <div class="footer_text">
        <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.
        В нашем меню более 20 видов суши:</p>
        <ul>
            <li> Классические с сырым лососем, тунцом, окунем.</li>
            <li>Экзотические с тигровой креветкой, морским гребешком.</li>
            <li>Пикантные с копченым лососем, угрем.</li>
        </ul>
        <p>В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
    </div>
    <hr class="footer_line">
    <div class="footer_sections">
        <div class="section">
            <a class="footer_sections_link" href="#">О компании</a>
            <a class="footer_sections_link" href="#">Доставка и оплата</a>
            <a class="footer_sections_link" href="#">Лента материалов</a>
            <a class="footer_sections_link" href="#">Политика возврата</a>
        </div>
        <div class="section">
            <a class="footer_sections_link bold_link" href="#">О компании</a>
            <span class="footer_phone grey_label">+996 (__) ___ __ __</span>
            <span class="grey_label footer_text">Выберите удобный мессенджер для общения</span>
            <div class="social_networks">
                <img class="social_network_image" src="../../../public/img/Whatsapp.svg" alt="whatsapp">
                <img class="social_network_image" src="../../../public/img/Telegram.svg" alt="telegram">
                <img class="social_network_image" src="../../../public/img/Instagram.svg" alt="instagram">
            </div>
        </div>
        <div class="section" id="last_section">
            <span class="grey_label">Тел:<u>+996 705 188 955</u></span>
            <span class="grey_label">Тел:<u>+996 555 188 955</u></span>
            <span class="grey_label">Адрес:Бакаева 126</span>
        </div>
    </div>
    <div class="mobile_footer">
        <div class="mobile_footer_block">
            <img class="social_network_image" src="../../../public/img/Menu.svg" alt="menu">
            <span class="mobile_footer_text_sign">Меню</span>
        </div>
        <div class="mobile_footer_block">
            <img class="social_network_image" src="../../../public/img/Cart.svg" alt="cart">
            <span class="mobile_footer_text_sign">Корзина</span>
        </div>
        <div class="mobile_footer_block">
            <img class="social_network_image" src="../../../public/img/Replies.svg" alt="cart">
            <span class="mobile_footer_text_sign">Отзывы</span>
        </div>
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style scoped>
    .mobile_footer {
        display: none;
    }
    .footer_text {
        font-family: DIN Pro;
        font-size: 18px !important;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
    .footer_title {
        font-family: DIN Pro;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
    }
    .footer_title,
    .footer_text {
        color: #A4ACAD;
    }
    .footer_line {
        margin-top: 60px;
        height: 2px;
        color: #A4ACAD;
        background-color: #A4ACAD;
        border: none;
    }
    .footer_sections {
        display: flex;
        margin-top: 30px;
        justify-content: space-between;
    }
    .section:nth-child(n+2) {
        border-left: 1px solid #A4ACAD;
        padding-left: 30px;
    }
    .footer_sections_link {
        font-family: DIN Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: none;
        margin: 10px;
        color: black;
    }
    .section {
        display: flex;
        flex-direction: column;
    }
    .section > .bold_link {
        margin: unset !important;
    }
    .section > .grey_label {
        margin-top: 10px;
        margin-bottom: 10px;
        max-width: 200px;
    }
    .social_network_image {
        margin-left: 15px;
        margin-right: 15px;
    }

    #last_section {
        margin-right: 100px;
    }

    @media screen and (max-width: 768px) {
        .footer_sections {
            display: flex;
            flex-direction: column;
            margin-top: unset;
        }
        .section:first-child {
            display: none;
        }
        .section {
            display: flex;
            align-items: center;
            border-left: unset !important;
            padding-left: unset !important;
        }
        .footer_phone {
            display: none;
        }
        .footer_line {
            display: none;
        }
        .section > .footer_text {
            text-align: center;
        }
        #last_section > .grey_label {
            margin: 5px;
        }
        #last_section {
            margin-right: unset;
        }
        .footer_sections_link {
            display: none;
        }
        .mobile_footer {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 70px;
            background: white;
            z-index: 2;
        }
        .mobile_footer_image > img {
            margin-left: 25px;
            margin-right: 25px;
            height: 30px;
        }
        .mobile_footer_block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>