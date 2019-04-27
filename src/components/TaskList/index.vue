<template>
  <transition-group
    name="custom-classes-transition"
    enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutRight"
    appear
  >
    <a-alert
      v-for="task in tasks"
      v-bind:key="task.id"
      :message="task.description"
      :type="task.isComplete ? 'success' : 'error'"
      class="task"
      @click.native="changeStatusTask(task.id)"
    />
  </transition-group>
</template>
<script>
export default {
  props: ["tasks"],
  methods: {
      changeStatusTask (id) {
        this.$emit('changeStatusTask', id)
      }
  },
};
</script>