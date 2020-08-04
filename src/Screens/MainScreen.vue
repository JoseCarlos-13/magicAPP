<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">

      <el-row class="main-page animate__animated animate__fadeInUp">
          <h1 id="main-text">Write the name of a Card</h1>
          <!-- <div v-for="card in listCards" :key="card">
            {{card}}
          </div> -->
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      listCards: null
    }
  }

  // methods: {
  //   loadCards () {
  //     this.$MTG.get().then(response => {
  //       this.listCards = response.data
  //       console.log(this.listCards)
  //     })
  //   }
  // },

  // mounted () {
  //   this.loadCards()
  // }
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
    margin-top: 50px;
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
