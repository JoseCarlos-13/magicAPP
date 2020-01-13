<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">
      <el-row class="main-page">
          <h1 id="main-text">Write a Card</h1>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    loadingScreen () {
      const screenLoad = this.$loading({
        lock: true,
        background: 'black',
        text: 'Loading'
      })
      setTimeout(() => {
        screenLoad.close()
      }, 3000)
    }
  },

  created () {
    this.loadingScreen()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

  #main-text{
    color: white;
    text-shadow: 1px 1px 3px black;
    margin-left: 50px;
    margin-right: 50px;
  }

  .main-page{
    margin-top: 20px;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }

  .logo{
    width: 250px;
    height: 95px;
  }

  p{
    color: white;
  }
</style>
