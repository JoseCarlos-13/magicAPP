<template>
  <div>
    <el-row class="chosedCard" v-if="chosedCard">
      <div>
        <img :src="chosedCard.image_uris.png">
      </div>

      <el-col class="card-description" :xs="24" :sm="24" :md="24" :lg="14">
        <h2>{{chosedCard.name}}</h2>
        <h3><b>Type: </b>{{chosedCard.type_line}}</h3>
        <p><b>Description: </b>{{chosedCard.oracle_text}}</p>
        <p><b>Mana cost: </b>{{chosedCard.mana_cost}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosedCard: null
    }
  },

  mounted () {
    this.chosedCard = this.$route.query.chosedcard
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
    margin: 20px 0px auto 0px;
  }
</style>
