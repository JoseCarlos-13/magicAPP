<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">
      <el-aside align="left">
        <router-link to="/">
          <img src="../assets/Mlogo.png" class="logo">
        </router-link>
        <Searchbar :getCard="getCard"></Searchbar>
      </el-aside>

      <el-col class="main-page">
        <router-view />
      </el-col>
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
    'Card': Card
  },

  data () {
    return {
      actualCard: null
    }
  },

  methods: {
    getCard (search) {
      axios.get(`https://api.magicthegathering.io/v1/cards?name="${search}"`).then(response => {
        this.actualCard = response.data
      })
      let actualcard = this.actualCard
      this.$router.push({path: '/thecard/chosedcard'})
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
@import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

h1 {
  font-family: 'Libre Baskerville', serif;
}

h2{
  font-family: 'Libre Baskerville', serif;
}

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
