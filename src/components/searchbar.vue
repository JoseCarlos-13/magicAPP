<template>
  <el-row>
    <el-col class="searchInput">
      <el-input placeholder="Write the name of a card here" v-model="search" >
      <el-button slot="append" icon="el-icon-search" @click="getCard(search)"></el-button>
      </el-input>
    <h6 align="center">If it does not work, the name may be incorrect</h6>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },

  props: ['getCard']
}
</script>

<style>
  .searchInput{
    width: 300px;
    right: 590px;
    color: white;
  }
</style>
