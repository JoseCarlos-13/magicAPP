<template>
  <el-row class="topbar">
    <router-link to="/" class="logo">
      <img src="../assets/Mlogo.png" >
    </router-link>

    <Searchbar :searchCard="searchCard"/>
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
    padding: 5px 0px -10px 0px;
    flex-wrap: wrap;
    background-color: darkorange;
  }

  .logo img{
    width: 180px;
    height: auto;
  }
</style>