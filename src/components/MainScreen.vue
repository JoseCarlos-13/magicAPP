<template>
  <el-row type="flex" justify="center">
    <container></container>
  </el-row>
</template>

<script>
import container from './container'

export default {
  components: {
    'container': container
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background2.jpg');
    background-repeat: no-repeat;
  }

  p{
    color: white;
  }
</style>
