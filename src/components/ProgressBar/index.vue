<template>
    <div>
        <a-progress :percent="renderPercent" status="active" class="progress-bar"/>
    </div>
</template>
<script>
export default {
    props: ['tasks'],
    computed: {
        renderPercent: function () {
            let countComplete = this.tasks.filter(task => task.isComplete).length
            return countComplete / this.tasks.length * 100
        }
    }
}
</script>