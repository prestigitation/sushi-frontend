<template>
<div class="card_container">
        <div class="card_inner">
            <div class="card_image" v-if="image">
                <img src="../../../public/img/Map.svg">
                <div class="card_location_rectangle">
                    <div class="rectangle">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7:1440)">
                        <path d="M19 0C11.8889 0 6.10352 5.78532 6.10352 12.8964C6.10352 15.754 7.7859 20.0999 11.3981 26.5731C13.863 30.9899 16.3166 34.7206 16.4201 34.8778L18.1935 37.5658C18.3723 37.8369 18.6752 38 19 38C19.3248 38 19.6278 37.8369 19.8066 37.5658L21.5799 34.878C21.6824 34.7226 24.1181 31.0241 26.6019 26.5731C30.2141 20.1002 31.8965 15.7543 31.8965 12.8964C31.8965 5.78532 26.1111 0 19 0ZM24.9144 25.6313C22.4651 30.0201 20.0679 33.6605 19.9669 33.8135L19 35.2791L18.0334 33.8139C17.9319 33.6597 15.5163 29.9866 13.0856 25.6313C9.73498 19.6268 8.03605 15.3422 8.03605 12.8964C8.03605 6.85092 12.9544 1.93254 19 1.93254C25.0456 1.93254 29.964 6.85092 29.964 12.8964C29.964 15.3425 28.2651 19.627 24.9144 25.6313Z" fill="#F2F2F2"/>
                        <path d="M19 5.6655C15.0572 5.6655 11.8496 8.8732 11.8496 12.8159C11.8496 16.7586 15.0572 19.9663 19 19.9663C22.9428 19.9663 26.1504 16.7586 26.1504 12.8159C26.1504 8.8732 22.9428 5.6655 19 5.6655ZM19 18.0337C16.1228 18.0337 13.7821 15.693 13.7821 12.8159C13.7821 9.93872 16.1228 7.59803 19 7.59803C21.8772 7.59803 24.2178 9.93872 24.2178 12.8159C24.2178 15.693 21.8772 18.0337 19 18.0337Z" fill="#F2F2F2"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_7:1440">
                        <rect width="38" height="38" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <slot name="card_head"></slot>
            <div class="card_head_text label">
                <slot name="card_head_text" />
            </div>
            <div class="card_text grey_label">
                <slot name="card_text" />
            </div>
            <div class="card_button" v-if="button">
                Бесплатная доставка от 800 COM
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: {
        button: Boolean,
        image: Boolean,
    }
}
</script>

<style scoped>
    .cart_container {
        width: 430px;
    }
    .card_inner {
        width: 290px;
        text-align: center;
        background: #F2F2F2;
        border-radius: 5px;
    }
    .card_container {
        display: flex;
        justify-content: center;
    }
    .card_head_text {
        margin-top: 20px;
    }
    .card_text {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .grey_label {
        font-size: 18px !important;
    }
    .card_button {
        margin-top: 25px;
        height: 40px;
        background: #FF9846;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card_location_rectangle {
        display: flex;
        justify-content: center;
        margin-top: -35px;
    }
    .rectangle {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #FF9846;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #center_image {
        margin-top: -35px;
    }

</style>