<template>
  <el-pagination
    :prev-text="prevText"
    :next-text="nextText"
    @prev-click="prevMethod"
    @next-click="nextMethod"
    layout="prev, next"
    :total="totalNumber">
  </el-pagination>
</template>

<script>
export default {
  props: ['prevText', 'nextText', 'prevMethod', 'nextMethod', 'totalNumber']
}
</script>

<style>
  .el-pager { color: orange; }
  .el-pager > li.number { background-color: rgba(0, 0, 0, 0); }
  .el-pager > li.active { color: white; }

  .el-pagination > button {
    background-color: rgb(223, 119, 34) !important;
    border-radius: 10px;
    padding: 20px;
    margin-right: 10px !important;
    border: 1px solid white;
  }

  .el-pagination > button > span {
    margin-top: -15px;
    margin-left: 8px;
    margin-right: 8px;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }
</style>
