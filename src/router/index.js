import Vue from 'vue'
import Router from 'vue-router'
import MainScreen from '../Screens/MainScreen'
import Layout from '../Screens/Layout'
import Card from '../components/Card'
import theCard from '../Screens/TheCard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Layout,
      props: true,
      children: [
        {
          path: '/',
          component: MainScreen
        }
      ]
    },


    {
      path: '/thecard',
      name: 'theCard',
      component: theCard,
      children: [
        {
          path: '/chosedcard',
          name: 'chosedCard',
          component: Card
        }
      ]
    }
  ]
})
