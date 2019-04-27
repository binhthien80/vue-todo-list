<template>
    <div class="insert-task">
        <a-input placeholder="Input task..." v-model="description"/>
        <a-button @click="insertTask()" type="primary">Insert Task</a-button>
    </div>
</template>
<script>
export default {
    data: () => ({
        description: ''
    }),
    methods: {
        insertTask () {
            this.$emit('insertTask', this.description)
        }
    }
}
</script>