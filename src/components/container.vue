<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="20">
      <el-col align="left">
        <img src="../assets/Mlogo.png" class="logo">
        <searchbar :getCard="getCard"></searchbar>
      </el-col>
      <el-col class="main-page">
        <card :card="actualCard"></card>
      </el-col>
    </el-col>
  </el-row>
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
  .logo{
    width: 300px;
    height: 120px;
  }
</style>
