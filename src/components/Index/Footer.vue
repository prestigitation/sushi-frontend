<template>
    <component :is="show_footer" /> 
</template>

<script>
import FooterContent from './FooterContent.vue'
export default {
    components: {
        FooterContent
    },
    computed: {
        show_footer() {
            if(Object.keys(this.$route.meta).length === 0 || this.$route.meta.show_footer === true) {
                return FooterContent
            } else return ''
        }
    }
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
        .footer_container {
            max-width: 330px;
            margin-left: auto;
            margin-right: auto;
        }
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
            max-width: unset !important;
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