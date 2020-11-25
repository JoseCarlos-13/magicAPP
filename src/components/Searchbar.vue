<template>
  <el-row>
    <el-input placeholder="Write the card name here"
      v-model="search">
      <el-button slot="append" icon="el-icon-search"
        @click.prevent="searchCard(search)"/>
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
    clearInput () {
      this.$emit('clear-input', this.search = '')
    }
  },

  props: ['searchCard']
}
</script>

<style>
  .el-input__inner{
    margin-left: 10px;
    color: white;
    font-family: fantasy;
    font-size: 16px;
    background-color:rgb(97, 92, 92);
  }
</style>
