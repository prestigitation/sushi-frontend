<template>
<div class="comment_container">
    <div class="comment_header">
        <div class="comment_head label my-6">
            Отзывы
        </div>
        <comment-create-switcher @switchCreateForm="switchForm" />
    </div>

    
    <comment 
        :comment="comment" 
        v-for="comment in comments" 
        :key="comment.id" 
    />

    <comment-create-switcher class="mobile_switcher" @switchCreateForm="switchForm" />
    
    <div class="comment_form d-flex flex-column align-center mt-5" v-if="comment_creating">
        <textarea v-model="comment" placeholder="Оставьте свой отзыв(не более 255 символов)" class="comment_input" />
        <v-btn class="my-3" color="success" @click.prevent="sendComment">Оставить отзыв</v-btn>
    </div>
</div>
</template>

<script>
import Comment from './Comment.vue'
import CommentCreateSwitcher from './CommentCreateSwitcher.vue'
export default {
    components: {
        Comment,
        CommentCreateSwitcher
    },
    data() {
        return {
            comment: '',
            comments: [],
            comment_creating: false, // нажата ли кнопка "оставить отзыв"
            success_message: null,
        }
    },
    async created() {
        await this.axios.get('comment').then(({data}) => {
            if(data) {
                this.comments = data
            }
        })
    },
    methods: {
        async sendComment() {
            await this.axios.post('comment', {text: this.comment}).then(({data}) => {
                if(data) {
                    this.success_message = data.message
                }
            })
        },
        switchForm() {
            this.comment_creating = !this.comment_creating
        }
    }
}
</script>

<style scoped>
.comment_head {
    font-size: 24px !important;
    line-height: 30px !important;
}
.comment_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mobile_switcher {
    display: none;
}

.comment_input {
    min-width: 360px;
}
@media screen and (max-width: 768px) {
    .comment_header {
        justify-content: center;
    }
    .mobile_switcher {
        display: flex !important;
        justify-content: center !important;
    }
}
</style>