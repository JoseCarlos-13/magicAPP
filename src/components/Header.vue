<template>
  <el-row class="topbar">
    <router-link to="/">
      <img src="../assets/Mlogo.png" width="150">
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
    flex-wrap: wrap;
    padding: 15px 10px 8px 0px;
    background-color: darkorange;
  }
</style>
