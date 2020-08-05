<template>
  <el-row v-if="actualCard" type="flex" justify="center">
    <el-col :xs="24" :sm="18" class="mainscreen">
      <el-col class="animate__animated animate__fadeIn card">
        <h1><u>{{actualCard.name}}</u></h1>
          <img v-if="actualCard.image_uris"
            :src="actualCard.image_uris.normal"
            class="card-image">
      </el-col>

      <el-col class="animate__animated animate__fadeIn card-description">
        <h3>Type: {{actualCard.type_line}}</h3>
        <h3>Rarity: {{actualCard.rarity}}</h3>
        <p v-if="actualCard.power && actualCard.toughness">
          <b>Power: </b>{{actualCard.power}} |
          <b>Toughness: </b>{{actualCard.toughness}}
        </p>
        <p>{{actualCard.oracle_text}}</p>
        <p><i>{{actualCard.flavor_text}}</i></p>
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
    this.actualCard = this.$route.query.card
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
