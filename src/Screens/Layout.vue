<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="20" :md="18" :lg="18">

      <el-aside class="aside">
        <router-link to="/">
          <img src="../assets/Mlogo.png" class="logo">
        </router-link>

        <Searchbar :getCard="getCard" />
      </el-aside>

      <el-row>
        <el-col>
         <router-view />
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'
export default {
  components: {
    Searchbar
  },

  data () {
    return {
      actualCard: null
    }
  },

  methods: {
    getCard (search) {
      this.$MTG.get('cards/search?q=' + search).then(response => {
        this.actualCard = response.data.data
        this.$router.push({
          name: `chosedcard`,
          params: { actualCard: this.actualCard[0] }
        })
      }).catch((e) => {
        console.log(e)
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

  .aside{
    display: flex;
    flex-direction: column;
  }

  .logo{
    width: 250px;
    height: 95px;
  }

  p{
    color: white;
  }
</style>
