<template>
  <el-row>
    <el-input placeholder="Write the card name here"
      v-model="search" @keyup.enter="searchCard">
      <el-button slot="append" icon="el-icon-search"
        @click="searchCard(search)"/>
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

  props: ['searchCard']
}
</script>

<style>
</style>
