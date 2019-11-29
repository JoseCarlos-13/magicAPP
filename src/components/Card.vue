<template>
  <el-row v-if="actualCard">
    <el-col :span="16" :xs="24" id="mainscreen">
      <el-col class="card">
        <h1><u>{{actualCard.cards[0].name}}</u></h1>
        <h2>{{actualCard.cards[0].type}}</h2>
        <h2>{{actualCard.cards[0].rarity}}</h2>
        <img :src="actualCard.cards[0].imageUrl" class="card-image">
      </el-col>

      <el-col class="card-description">
        <p>Number: {{actualCard.cards[0].number}}</p>
        <p>Power: {{actualCard.cards[0].power}} /
          Toughness: {{actualCard.cards[0].toughness}}</p>
        <p>{{actualCard.cards[0].text}}</p>
        <p><i>{{actualCard.cards[0].flavor}}</i></p>
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
    this.actualCard = this.$route.query.actualCard
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
