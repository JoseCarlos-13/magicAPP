import Vue from 'vue'
import Vuex from 'vuex'
import { MTG } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    card: null,
    search: ''
  },

  getters: {
    cards (state) { return state.cards },
    card (state) { return state.card },
    search (state) { return state.search }
  },

  mutations: {
    setCards (state, cards) { state.cards = cards },
    setCard (state, card) { state.card = card },
    setSearch (state, search) { state.search = search }
  },

  actions: {
    loadCardsList ({ commit }, payload) {
      return MTG.get(`cards/search?q=${payload}&order=name&unique=cards`)
        .then(response => {
          commit('setCards', response.data)
        }).catch((error) => error)
    },

    loadCard ({ commit }, payload) {
      return MTG.get(`cards/${payload}`).then(response => {
        commit('setCard', response.data)
      }).catch(error => error)
    },

    inputSearch ({ commit }, payload) {
      // eslint-disable-next-line
      commit('setSearch', payload ? payload : '')
    },

    cleanSearchBar ({ commit }) {
      commit('setSearch', '')
    }
  }
})
