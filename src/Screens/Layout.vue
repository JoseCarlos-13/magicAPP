<template>
  <el-row type="flex" justify="center">
    <el-col :sm="20">
      <el-aside>
        <router-link to="/">
          <img src="../assets/Mlogo.png" class="logo">
        </router-link>
        <Searchbar :getCard="getCard"></Searchbar>
      </el-aside>
      <el-row>
        <el-col>
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'
import axios from 'axios'
export default {
  components: {
    'Searchbar': Searchbar
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
        let actualcard = this.actualCard
        this.$router.push({name: 'chosedcard', params: {actualcard}})
      })
    }
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
