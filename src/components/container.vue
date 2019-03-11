<template>
  <div>
    <searchbar :getCard="getCard"></searchbar>
    <card :card="actualCard"></card>
  </div>
</template>

<script>
import searchBar from './searchbar'
import card from './card'
import axios from 'axios'

export default {
  components: {
    'searchbar': searchBar,
    'card': card
  },

  data () {
    return {
      actualCard: null
    }
  },

  methods: {
    getCard (search) {
      axios.get('https://api.magicthegathering.io/v1/cards?name=' + search).then(response => (this.actualCard = response))
    }
  },

  mounted () {
    this.getCard('')
  }
}
</script>

<style>
</style>
