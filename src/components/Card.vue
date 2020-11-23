<template>
  <el-row v-if="listCards" type="flex" justify="center">
    <el-col :xs="24" :sm="18"
      class="mainscreen animate__animated animate__fadeIn">
      <el-row v-for="card in listCards" :key="card.id" class="card">
        <el-col>
          <h1><u>{{card.name}}</u></h1>
          <img v-if="card.image_uris" :src="card.image_uris.normal"
            class="card-image">
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      listCards: []
    }
  },

  mounted () {
    this.listCards = this.$route.query.card
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
@import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

h1 {
  font-family: 'Libre Baskerville', serif;
}

h2{
  font-family: 'Libre Baskerville', serif;
}

.card{
  color: white;
  margin-top: -10px;
}

.mainscreen{
  margin-top: 50px;
}

.card-description{
  color: white;
  background-color: rgb(40, 49, 49);
  font-family: 'Old Standard TT', serif;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  padding-top: 5px;
  text-align: center;
  padding-bottom: 5px;
  border: 2px solid white;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
}

.card-image{
  border-radius: 7px;
  border: solid 3.5px;
  border-color: white;
  width: 250px;
  height: 350px;
}
</style>
