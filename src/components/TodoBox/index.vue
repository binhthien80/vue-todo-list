<template>
  <div class="main">
    <div class="header">
      <Title :count="tasks.length"/>
      <ProgressBar :tasks="tasks" />
      <InsertTask @insertTask="insertTask"/>
      <SelectedStatus @getStatusToRender="getStatusToRender" />
  </div>
    <TaskList @changeStatusTask="changeStatusTask" :tasks="renderFollowStatus"/>
  </div>
</template>
<script>
import Title from './../Title'
import ProgressBar from './../ProgressBar'
import InsertTask from './../InsertTask'
import SelectedStatus from './../SelectedStatus'
import TaskList from './../TaskList'
import local from '@/services/local'

const tasks = [
  { id: 'abc-xxxx-111', description: 'Do Homework', isComplete: false },
  { id: 'abc-x2sxx-123', description: 'Play Game', isComplete: true }
]

export default {
    components: {
        Title,
        ProgressBar,
        InsertTask,
        SelectedStatus,
        TaskList
    },
    data: () => ({
      tasks: local.getTasks() || tasks,
      status: 'All'
    }),
    computed: {
      renderFollowStatus () {
        if (this.status === 'All') {
          return this.tasks
        }
        if (this.status === 'Done') {
          return this.tasks.filter(task => task.isComplete)
        }
        if (this.status === 'Going') {
          return this.tasks.filter(task => !task.isComplete)
        }
      }
    },
    methods: {
      uuidv4 () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        })
      },
      insertTask (e) {
        this.tasks.unshift({
          id: this.uuidv4(),
          description: e.trim(),
          isComplete: false
        })
        local.setTasks(this.tasks)
      },
      changeStatusTask (id) {
        let task = this.tasks.find(task => task.id === id)
        task.isComplete = !task.isComplete
        local.setTasks(this.tasks)
      },
      getStatusToRender (s) {
        this.status = s
      }
    }
}
</script>