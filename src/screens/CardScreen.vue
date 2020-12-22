<template>
  <div>
    <el-row class="chosedCard" v-if="chosedCard">
      <div>
        <img :src="chosedCard.image_uris.png">
      </div>

      <el-col :xs="24" :sm="24" :md="24" :lg="14"
         class="card-description" v-if="symbology">
        <h2><b>Name: </b>{{ chosedCard.name }}</h2>
        <h3><b>Type: </b>{{ chosedCard.type_line }}</h3>
        <p><b>Mana cost: </b> {{ chosedCard.mana_cost }} </p>
        <p v-show="chosedCard.power && chosedCard.toughness">
          <b>Power/Toughness: </b>
          {{ chosedCard.power }}/{{ chosedCard.toughness }}
        </p>
        <p v-show="chosedCard.oracle_text">
          <b>Description: </b>{{ chosedCard.oracle_text }}
        </p>
        <p v-show="chosedCard.flavor_text">
          <b>Flavor text: </b>{{ chosedCard.flavor_text }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosedCard: null,
      symbology: null
    }
  },

  methods: {
    returnSymbols () {
      this.$MTG.get(`https://api.scryfall.com/symbology`).then(response => {
        this.symbology = response.data.data
      })
    }
  },

  mounted () {
    this.chosedCard = this.$route.query.chosedcard
    this.returnSymbols()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h1 {
    font-family: 'Libre Baskerville', serif;
  }

  h3 {
    font-family: 'Libre Baskerville', serif;
  }

  .chosedCard {
    margin: 50px 0px 50px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .chosedCard img {
    border: 3px solid white;
    overflow: hidden;
    border-radius: 10px;
    width: 300px;
    margin: 0px 0px 20px 0px;
  }

   .card-description {
    color: white;
    background-color: rgb(40, 49, 49);
    font-family: 'Old Standard TT', serif;
    border-radius: 20px;
    text-align: center;
    word-wrap: break-word;
    padding: 20px 30px 20px 30px;
    border: 5px outset white;
    font-size: 20px;
  }
</style>
