<template>
  <div>
    <a-select defaultValue="View Status Task" style="width: 120px">
      <a-icon slot="suffixIcon" type="smile"/>
      <a-select-option value="All" @click="$emit('getStatusToRender', 'All')">All Tasks</a-select-option>
      <a-select-option value="Done" @click="$emit('getStatusToRender', 'Done')">Tasks Done</a-select-option>
      <a-select-option value="Going" @click="$emit('getStatusToRender', 'Going')">Tasks Going</a-select-option>
    </a-select>
  </div>
</template>