import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '@/components/MainScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    }
  ]
})
