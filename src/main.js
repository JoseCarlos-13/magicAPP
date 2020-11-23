// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$MTG = axios.create({
      baseURL: 'https://api.scryfall.com/'
    })
  }
})

Vue.prototype.$MTG.interceptors.request.use(request => {
  console.log(request)
  return request
}, (error) => {
  return error
})

Vue.prototype.$MTG.interceptors.response.use(response => {
  console.log(response)
  return response
}, (error) => {
  return error
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
