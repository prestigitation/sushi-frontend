import { mapGetters } from "vuex";

export default {
    data() {
        return {
            role_mapping: [
                { component_role: 'admin', user_role: 'Администратор' },
                { component_role: 'courier', user_role: 'Курьер' }
            ]
        }
    },
    methods: {
        ucfirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        getUserRole() {
            return this.role_mapping.filter(role => role.user_role == this.getUser.role)[0].component_role
        }
    },
    computed: {
        ...mapGetters([
            'getUser'
        ]),
        dashboard_component() {
            if (this.$route.params.section && this.$route.params.action && !this.$route.params.id) {
                return this.ucfirst(this.getUserRole()) + this.ucfirst(this.$route.params.section) + this.ucfirst(this.$route.params.action)
            } else if (this.$route.params.section && !this.$route.params.action && !this.$route.params.id) {
                return this.ucfirst(this.getUserRole()) + this.ucfirst(this.$route.params.section)
            } else if (this.$route.params.section && !this.$route.params.action && this.$route.params.id) {
                return this.ucfirst(this.getUserRole()) + this.ucfirst(this.$route.params.section) + 'Entity'
            }
        }
    }
}