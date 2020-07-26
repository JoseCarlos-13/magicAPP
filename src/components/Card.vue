<template>
  <el-row v-if="actualCard" display="flex" justify="center">
    <el-col id="mainscreen"
      :xs="24">
      <el-col class="animate__animated animate__fadeIn card">
        <h1><u>{{actualCard.name}}</u></h1>
        <h2>{{actualCard.type}}</h2>
        <h2>{{actualCard.rarity}}</h2>
        <img :src="actualCard.imageUrl" class="card-image">
      </el-col>

      <el-col class="animate__animated animate__fadeIn card-description">
        <p>Number: {{actualCard.number}}</p>
        <p>Power: {{actualCard.power}} /
          Toughness: {{actualCard.toughness}}</p>
        <p>{{actualCard.text}}</p>
        <p><i>{{actualCard.flavor}}</i></p>
      </el-col>

    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      actualCard: []
    }
  },

  mounted () {
    this.actualCard = this.$route.params.actualCard
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
}

.card-description{
  background-color: rgb(40, 49, 49);
  font-family: 'Old Standard TT', serif;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 20px;
  padding-top: 5px;
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
