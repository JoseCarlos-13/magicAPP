<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">
      <el-aside align="left">
        <img src="../assets/Mlogo.png" class="logo">
        <searchbar :getCard="getCard"></searchbar>
      </el-aside>

      <el-col class="main-page">
        <card :actualCard="actualCard"></card>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import searchBar from './searchbar'
import card from './card'

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
      this.$https.get('cards?name=' + search).then(response => {
        this.actualCard = response
      })
    }
  },

  mounted () {
    this.getCard('')
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background/background2.jpg');
    background-position: absolute;
    background-attachment: fixed;
  }

  .main-page{
    margin-top: 20px;
  }

  .logo{
    width: 250px;
    height: 95px;
  }

  p{
    color: white;
  }
</style>
