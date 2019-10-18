<template>
<el-row type="flex" justify="left">
  <el-col>
    <el-input placeholder="Write the name of a card here" v-model="search" class="searchInput">
      <el-button slot="append" icon="el-icon-search" @click="getCard(search)"></el-button>
    </el-input>
  <h6>If it does not work, the name may be incorrect</h6>
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
    margin: auto;
    right: 470px;
  }
</style>
