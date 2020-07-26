<template>
  <el-row>
    <el-col class="searchInput">
      <el-input placeholder="Write the name of a card"
        v-model="search" >
        <el-button slot="append" icon="el-icon-search"
          @click="getCard(search)" />
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
    width: 260px;
    right: 590px;
    margin-left: 20px;
  }
</style>
