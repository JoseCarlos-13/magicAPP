<template>
  <el-row>
    <logo></logo>
    <container></container>
  </el-row>
</template>

<script>
import logo from './logo'
import container from './container'

export default {
  components: {
    'logo': logo,
    'container': container
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background2.jpg');
    background-repeat: no-repeat;
    height: 100%;
  }

  p{
    color: white;
  }
</style>
