<template>
  <div>
    <el-row v-if="listCards">
      <el-col class="list">
        <el-row v-for="card in listCards" :key="card.id" class="card">
          <el-col>
            <img v-if="card.image_uris" :src="card.image_uris.normal"
              class="card-image" @click="chosedCard(card)">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
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
      this.$MTG.get(`https://api.scryfall.com/cards/named?fuzzy=${card.name}`)
        .then(response => {
          this.$router.push({
            path: 'chosedcard/:card',
            query: { chosedcard: response.data }
          })
        })
    }
  },

  mounted () {
    this.listCards = this.$route.query.cardList
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

  .card {
    color: white;
    margin: 10px;
  }

  .list {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-image {
    border-radius: 7px;
    border: solid 3.5px;
    border-color: white;
    width: 250px;
    height: auto;
  }
</style>
