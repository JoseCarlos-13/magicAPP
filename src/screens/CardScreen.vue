<template>
  <div>
    <div class="chosedCard" v-if="chosedCard">
      <img :src="chosedCard.image_uris.png" width="300">
    </div>
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
  .chosedCard {
    margin: 50px;
  }
</style>
