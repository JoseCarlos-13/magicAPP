<template>
  <div>
    <h4>
      Total cards: {{ totalCards }} |
      cards: {{ cardsInScreen }} of {{ totalCards }}
      </h4>
    <el-row v-if="cards">
      <el-col class="list">
        <el-row v-for="card in paginatedCards" :key="card.id" class="card">
          <el-col>
            <img v-if="card.image_uris" :src="card.image_uris.normal"
              class="card-image" @click="chosedCard(card)">
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <Pagination
      :prevText="prevText"
      :nextText="nextText"
      :prevMethod="prevPage"
      :nextMethod="nextPage"
      :totalNumber="totalCards">
    </Pagination>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Pagination from '../components/Pagination.vue'

export default {
  components: { Pagination },

  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      prevText: 'prev-page',
      nextText: 'next-page'
    }
  },

  computed: { ...mapState([ 'cards', 'search' ]),

    indexStart () { return (this.currentPage - 1) * this.pageSize },
    indexEnd () { return this.indexStart + this.pageSize },
    cardsInScreen () { return this.indexStart + this.paginatedCards.length },
    totalCards () { return this.cards.total_cards },

    paginatedCards () {
      let cardsList = this.cards.data
      return cardsList ? cardsList.slice(this.indexStart, this.indexEnd) : []
    }
  },

  watch: {
    search () {
      if (this.search) {
        setTimeout(() => {
          this.loadCardsList(this.search)
        }, 1500)
      }
    }
  },

  methods: {
    ...mapActions([ 'loadCardsList' ]),

    prevPage () { this.currentPage-- },
    nextPage () { this.currentPage++ },

    chosedCard (card) {
      this.$router.push({
        name: 'card',
        params: { id: card.id }
      })
    }
  },

  mounted () { this.loadCardsList(this.search) }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h4 {
    text-align: left;
    margin-left: 45px;
    font-family: 'Libre Baskerville', serif;
    color: rgb(223, 119, 34);
  }

  .list {
    margin-top: 100px;
    margin-bottom: 180px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .list > .card { color: white; margin: 10px; }

  img.card-image {
    border-radius: 7px;
    border: solid 3.5px;
    border-color: white;
    width: 270px;
    height: auto;
    overflow: hidden;
  }

  img.card-image:hover{
    box-shadow: 0px 0px 15px white;
    transition: ease 0.8s;
  }
</style>
