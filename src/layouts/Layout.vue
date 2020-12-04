<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <Header :searchCard="searchCard" />

      <el-main>
        <router-view />
      </el-main>

      <Footer/>
    </el-col>
  </el-row>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },

  data () {
    return {
      actualCard: null
    }
  },

  methods: {
    searchCard (search) {
      this.$router.replace(
        this.$MTG.get(`cards/search?q=${search}`).then(response => {
          this.actualCard = response.data.data
          this.$router.push({
            name: `chosedcard`,
            query: { card: this.actualCard }
          })
        })
      )
    }
  }
}
</script>

<style>
  body{
    background-image: url('../assets/background/background2.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  p{
    color: white;
  }
</style>
