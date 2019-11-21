<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">
       <el-aside align="left">
        <router-link to="/">
          <img src="../assets/Mlogo.png" class="logo">
        </router-link>
        <Searchbar :getCard="getCard"></Searchbar>
      </el-aside>

      <el-row class="main-page">
        <Card :actualCard="actualCard" />
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'
import axios from 'axios'

export default {
  components: {
    'Searchbar': Searchbar,
    Card
  },

  data () {
    return {
      actualCard: null
    }
  },

  methods: {
    getCard (search) {
      axios.get("https://api.magicthegathering.io/v1/cards?name=" + search).then(response => {
        this.actualCard = response.data
      })
    },

    loadingScreen(){
      const screenLoad = this.$loading({
        lock: true,
        background: 'black',
        text: 'Loading'
      })
      setTimeout(() => {
        screenLoad.close()
      }, 2000)
    }
  },

  created () {
    this.loadingScreen()
  },

  mounted () {
    this.getCard('')
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background/background2.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
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
