<template>
  <el-row>
    <el-col class="searchInput">
      <el-input placeholder="Write the name of a card here" v-model="search" >
        <el-button slot="append" icon="el-icon-search" @click="getCard(search)" />
      </el-input>
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
