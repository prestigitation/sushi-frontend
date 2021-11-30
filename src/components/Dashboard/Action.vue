<template>
<div>
    <component :is="dashboard_component" />
</div>
</template>

<script>
import dashboard_mapping from '../mixins/dashboard_mapping'
import AdminOrderCreate from './Admin/Orders/Create.vue'
export default {
    components: {
        AdminOrderCreate
    },
    mixins: [dashboard_mapping]
}
</script>

<style>

</style>