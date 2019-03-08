<template>
<div>
  <el-input placeholder="Write the name of a card here" v-model="input5" class="searchInput">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
</template>

<script>
export default {
  data () {
    return {
      input5: ''
    }
  }
}
</script>

<style>
  .searchInput{
    width: 350px;
    margin-bottom: 30px;
  }
</style>
