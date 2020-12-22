<template>
  <el-row class="topbar">
    <router-link to="/" class="logo">
      <img src="../assets/Mlogo.png" width="250">
    </router-link>

    <Searchbar :searchCard="searchCard" />
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'

export default {
  components: {
    Searchbar
  },

  props: ['searchCard']
}
</script>

<style>
  .topbar{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid white;
    justify-content: flex-start;
    padding: 15px 0px 10px 10px;
    background-image: url('../assets/noma.jpg');
  }

  .logo{
    margin-top: -16px;
  }
</style>
