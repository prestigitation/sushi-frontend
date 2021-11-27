<template>
<div class="adjacent_selector">
    <span class="selector_block" :class="[{'active_block': selected_block === 1 }]" @click.prevent="setActiveBlock(1)">
        <span v-if="this.$slots.first_image">
            <slot name="first_image" class="adjacent_selector_image"/>
        </span>
        <span v-if="first_property" :class="[{'active_block': selected_block === 1 }]">
            {{first_property}}
        </span>
    </span>
    <span class="selector_block" :class="[{'active_block': selected_block === 2}]" @click.prevent="setActiveBlock(2)">
        <span v-if="this.$slots.second_image">
            <slot name="second_image" class="adjacent_selector_image"/>
        </span>
        <span v-if="second_property" :class="[{'active_block': selected_block === 2 }]">
            {{second_property}}
        </span>
    </span>
</div>
</template>

<script>
export default {
    props: {
        first_property: {
            type: String,
            default: "",
        },
        second_property: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            selected_block: 1,
        }
    },
    methods: {
        setActiveBlock(block_number) {
            this.selected_block = block_number
            this.$emit('setSelector', block_number)
        }
    }
}
</script>

<style scoped>
.adjacent_selector {
    display: flex;
    height: 40px;
}
.adjacent_selector .selector_block {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    cursor: pointer;
}
.active_block {
    background: #FF9846;
    color: white;
    fill:white;
}
</style>