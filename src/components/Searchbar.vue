<template>
  <el-row>
    <el-input placeholder="Write the card name here"
      v-model="search" @keyup.enter="searchCard">
        <el-button slot="append" icon="el-icon-search"
        @click="searchingCard(search)"/>
    </el-input>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },

  methods: {
    searchingCard (search) {
      this.$router.push({
        name: `cardlist`,
        query: { cardsList: search }
      })
    }
  }
}
</script>

<style>
  .el-input__inner{
    background-color: rgb(104, 104, 104);
    color: white;
  }
</style>
