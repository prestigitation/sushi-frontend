<template>
<div>
    <component :is="dashboard_component" />
</div>  
</template>

<script>
import dashboard_mapping from '../mixins/dashboard_mapping'
export default {
    mixins: [dashboard_mapping]
}
</script>

<style>

</style>