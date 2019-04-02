<template>
<div>
  <el-input placeholder="Write the name of a card here" v-model="search" class="searchInput">
    <el-button slot="append" icon="el-icon-search" @click="getCard(search)"></el-button>
  </el-input>
  <h6 style="margin-left: -1390px;">If it does not work, the name may be incorrect</h6>
</div>
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
    margin-bottom: -5px;
    width: 350px;
    margin: auto;
    left: -680px;
  }
</style>
