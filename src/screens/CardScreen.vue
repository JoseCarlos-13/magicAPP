<template>
  <div>
    <el-row class="chosedCard" v-if="chosedCard">
      <div>
        <img :src="chosedCard.image_uris.png">
      </div>

      <el-col class="card-description" :xs="24" :sm="24" :md="24" :lg="16">
        <h1>{{chosedCard.name}}</h1>
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
    margin: 55px 100px 55px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .chosedCard img {
    border: 3px solid white;
    overflow: hidden;
    border-radius: 10px;
    width: 290px;
  }

  .card-description {
    background-color: rgba(90, 90, 90, 0.803);
    border: 5px inset white;
    padding: 20px 50px auto 50px;
    margin: 0 50px auto 50px;
  }

  .fade-enter {
    opacity: 0
  }

  .fade-enter-to {
    opacity: 1
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
