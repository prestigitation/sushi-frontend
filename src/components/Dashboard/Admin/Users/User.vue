<template>
<div class="d-flex justify-center flex-column dashboard_container">
    <v-subheader>
        Информация о пользователях
    </v-subheader>
    <v-row class="justify-center align-center">
            <v-col lg="6" class="d-flex align-center">
                <v-text-field class="lg-2 px-2" v-model="search" label="Введите id или имя пользователя" />
                <v-btn color="success" @click.prevent="findUser">Найти</v-btn>
            </v-col>
    </v-row>
    <v-row class="mx-auto" v-if="find_users">
        <v-data-table :items="find_users" :headers="table_headers">
            <template v-slot:item.role>
                <v-select :items="roles" item-text="name" item-value="id"/>
            </template>
            <template v-slot:item.name="{item}">
                <input class="update_input" :placeholder="item.name" />
            </template>
            <template v-slot:item.email="{item}">
                <input class="update_input" :placeholder="item.email" />
            </template>
            <template v-slot:item.actions="{item}">
                <v-icon class="px-2" color="blue" @click.prevent="updateUser(item.id)">
                    mdi-check-outline
                </v-icon>
                <v-icon @click.prevent="deleteUser(item.id)"> class="px-2" color="red">
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
    </v-row>
</div>  
</template>

<script>
export default {
    data() {
        return {
            search: '',
            roles: [],
            find_users: [],
            table_headers: [
                { text: 'ID', value: 'id' },
                { text: 'Никнейм', value: 'name'},
                { text: 'E-mail', value: 'email' },
                { text: 'Роль', value: 'role'},
                { text: 'Действия', value: 'actions'}
            ]
        }
    },
    async mounted() {
        await this.axios.get('role').then(({data}) => {
            if(data) this.roles = data
        })
    },
    methods: {
        async findUser() {
            await this.axios.get('dashboard/user', {
                params: {
                    search: this.search
                }
            }).then(({data}) => {
                if(data) this.find_users = this.parseUsers(data)
            })
        },
        parseUsers(users) {
            let usersList = users
            let result = []
            let tempObject = {}
            usersList.forEach(user => {
                for(let [key,value] of Object.entries(user)) {
                    if(Array.isArray(value)) {
                        tempObject[key] = value[0]
                    } else if(key != 'created_at' && key != 'updated_at' && key != 'email_verified_at') {
                        tempObject[key] = value
                    } 
                }
                result.push(tempObject)
                tempObject = {}
            })
            return result
        },
        async updateUser(userId) {
            let formData = new FormData()
            let parseTextContent = (item) => parseInt(item.textContent)
            let parentNode = Array // находим ноду, которая описывает идентификатор пользователя, которого хотим изменять 
                                .from(document.getElementsByClassName('text-start'))
                                .filter(item => !item.classList.contains('sortable'))
                                .filter(item => parseTextContent(item) === userId)[0].parentNode
            // Берем родителя этой ноды и проходимся по всем текстовым полям его потомков
            for(let i = 0; i < parentNode.childNodes.length; i++) {
                let updatingValue = this.table_headers[i].value
                let childNode = parentNode.childNodes[i]
                if(childNode.childNodes.length === 1 && childNode.childNodes[0].classList && childNode.childNodes[0].classList.contains('update_input')) {
                    if(childNode.childNodes[0].value) {
                        formData.append(updatingValue, childNode.childNodes[0].value)
                    } // если текстовое поле не пустое, включаем его в форму
                } else if (childNode.childNodes[0].classList && childNode.childNodes[0].classList.contains('v-input')) {
                    let selector = childNode.querySelector('.v-select__slot input[type=hidden]')
                    // находим селектор vuetify, который отвечает за выбранное значение
                    if(selector._value >= 0) {
                        formData.append(updatingValue, selector._value)
                    }
                }
            }
            formData.append('_method', 'put')
            await this.axios.post(`user/${userId}`, formData).then((res) => {console.log(res)}).catch((err) => {console.log(err)})
        },
        async deleteUser(userId) {
            let formData = new FormData()
            formData.append('_method', 'delete')
            await this.axios.post(`user/${userId}`, formData).then((res) => {console.log(res)}).catch((err) => {console.log(err)})
        }
    }
}
</script>

<style>

</style>