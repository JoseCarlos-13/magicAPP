import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actualCard: []
  },

  getters: {
    getActualCard(state){
      return state.actualCard
    }
  },

  mutations: {
    setActualCard(state, payload){
      return state.actualCard = payload
    }
  },

  actions: {
    getCardsFromName({commit}, payload){
      console.log(payload)
      this.$MTG.get(`cards/search?q=${payload}`).then(response => {
        commit('setActualCard', response.data.data)
        return response
      }).catch(response => response)
    }
  }
})