<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="22" :xs="22">

        <el-row class="main-page">
          <h1 id="main-text">Write the name of a Card</h1>
        </el-row>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'cleanSearchBar'
    ])
  },

  mounted () {
    this.cleanSearchBar()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

  #main-text {
    color: white;
    text-shadow: 1px 1px 3px black;
    margin: 200px 0px 429px 0px;
  }

  .main-page {
    margin-top: 50px;
    color: white;
    font-family: 'Libre Baskerville', serif;
  }

  .logo {
    width: 250px;
    height: 95px;
  }
</style>
