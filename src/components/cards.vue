<template>
  <div>
    <h1><u>{{cards.data.card.name}}</u></h1>
    <h2>{{cards.data.card.type}}</h2>
    <img v-bind:src="cards.data.card.imageUrl" width="300" alt="" class="card-image">
    <p>{{cards.data.card.text}}</p>
    <h4><i>{{cards.data.card.flavor}}</i></h4>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      cards: null
    }
  },

  mounted () {
    axios.get('https://api.magicthegathering.io/v1/cards/129465').then(response => (this.cards = response))
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

h1 {
  font-family: 'Libre Baskerville', serif;
}

.card-image{
  border-radius: 7px;
  border: solid 3.5px;
  border-color: white;
}

div{
  color: white;
}
</style>
