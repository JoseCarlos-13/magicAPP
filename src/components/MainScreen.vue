<template>
  <div>
    <logo></logo>
    <searchBar></searchBar>
    <card></card>
  </div>
</template>

<script>
import cards from './cards'
import logo from './logo'
import searchBar from './searchbar'

export default {
  components: {
    'card': cards,
    'logo': logo,
    'searchBar': searchBar
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background2.jpg');
    background-repeat: no-repeat;
    height: 100%;
  }

  p{
    color: white;
  }
</style>
