<template>
<div class="business_card">
    <div class="mobile_icon">
        <img class="mobile_icon_image" src="../../../public/img/logo.png">
    </div>
    <div class="business_card_block">
        <div class="business_card_head">Наш телефон</div>
        <div class="business_card_phone">+996 705 188 955</div>
        <div class="business_card_phone">+996 555 188 955</div>
    </div>
    <div class="business_card_block">
        <div class="business_card_work_hours">
        <img class="business_card_work_hours_image" src="../../../public/img/Clock.svg">
        <span class="grey_label business_card_work_hours_text">работаем</span>
        <div class="grey_label"> с 10:00 до 0:00</div>
    </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .mobile_icon {
        display: none;
    }
    .business_card {
        padding: 10px;
        width: 220px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-right: 0.5px solid #A4ACAD;
    }
    .business_card_head {
        text-align: center;
    }
    .business_card_work_hours_text {
        margin-right: 5px;
        margin-left: unset !important;
    }
    .business_card_work_hours_text {
        margin-left: 10px;
        font-family: DIN Pro;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: #A4ACAD;
    }
    .business_card_work_hours {
        display: flex;
        align-items: center;
    }
    .business_card_work_hours_image {
        margin-right: 10px;
    }
    .business_card_phone {
        font-family: DIN Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0em;
        color: #FF9846;
    }
    .business_card_head {
        font-family: DIN Pro;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        letter-spacing: 0em;
    }

    @media screen and (max-width: 768px) {
        .business_card_head {
            margin-bottom: 5px;
        }
        .mobile_icon_image {
            width: 50px;
            height: 50px;
        }
        .business_card {
            flex-direction: row;
            width: 90vh;
            border-right: unset;
            justify-content: space-around;
        }  
        .header_navigation {
            width: 10vh;
        }
        .mobile_icon {
            display: block;
        }
        .business_card_head,
        .business_card_phone,
        .business_card_work_hours {
            font-family: DIN Pro;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 12px;
            letter-spacing: 0em;
            text-align: center;
        }
        .business_card_work_hours > .grey_label {
            font-size: 12px !important;
        }

        .business_card_work_hours {
            flex-direction: column;
        }

        .business_card_work_hours_image {
            margin-right: unset;
        }
    }
</style>