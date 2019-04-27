import Vue from 'vue'
import Router from 'vue-router'
import TodoBox from '@/components/TodoBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoBox',
      component: TodoBox
    }
  ]
})
