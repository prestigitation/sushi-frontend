<template>
<div class="comment_create">
    <div class="comment_button" @click.prevent="$emit('switchCreateForm')">
        + Добавить отзыв
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.comment_button {
    display: flex;
    align-items: center;
    width: 186px;
    height: 36px;
    padding: 20px;
    background: black;
    color: white;
    border-radius: 5px;
}
@media screen and (max-width: 768px) {
    .comment_create {
        display: none;
    }
}
</style>