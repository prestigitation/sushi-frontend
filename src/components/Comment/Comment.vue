<template>
<div class="comment_container">
    <div class="comment_title">
        <span class="comment_title_text">{{comment.user.name}}</span>
        <span class="comment_created_date ml-3">{{new Date(comment.created_at).toLocaleString('ru', options)}}</span>
    </div>
    <div class="comment_content">
        {{comment.content}}
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            date_options: {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC'
            }
        }
    },
    props: {
        comment: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
.comment_container {
    background: white;
    padding: 10px;
}
.comment_title_text {
    font-family: DIN Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
}
.comment_content {
    height: auto;
}
@media screen and (max-width: 768px) {
    .comment_container {
        margin: 10px;
    }
}
</style>