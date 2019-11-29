import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '../Screens/MainScreen'
import Layout from '../Screens/Layout'
import Card from '../components/Card'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'mainscreen',
      component: Layout,
      children: [
        {
          path: 'mainscreen',
          component: MainScreen,
          name: 'mainscreen'
        },

        {
          path: 'thecard',
          component: Card,
          name: 'chosedcard'
        }
      ]
    }
  ]
})
