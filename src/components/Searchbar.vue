<template>
  <el-row>
    <el-col>
      <el-input placeholder="Write the complete card name"
        v-model="search" >
        <el-button slot="append" icon="el-icon-search"
          @click.prevent="searchCard(search)"/>
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

  props: ['searchCard']
}
</script>

<style>
  .el-input__inner{
    width: 223px;
    right: 590px;
    margin-left: 20px;
    color: white;
    font-family: fantasy;
    font-size: 16px;
    background-color:rgb(97, 92, 92);
  }
</style>
