<template>
  <el-row v-if="listCards">
    <el-col
      class="list animate__animated animate__fadeIn">
      <el-row v-for="card in listCards" :key="card.id" class="card">
        <el-col>
          <img v-if="card.image_uris" :src="card.image_uris.normal"
            class="card-image" @click="chosedCard(card)">
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

  methods: {
    chosedCard (card) {
      console.log(card)
      this.$router.push({
        path: 'chosedcard/:card',
        query: { chosedcard: card }
      })
    }
  },

  mounted () {
    this.listCards = this.$route.query.cardlist
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
@import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

h1 {
  font-family: 'Libre Baskerville', serif;
}

h3{
  font-family: 'Libre Baskerville', serif;
}

.card{
  color: white;
  margin: 10px;
}

.list{
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
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
  height: auto;
}
</style>
