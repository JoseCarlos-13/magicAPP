<template>
  <el-row type="flex" justify="center">
    <el-col :xs="22" :sm="22" :md="22" :lg="22">

      <el-aside>
        <router-link to="/">
          <img src="../assets/Mlogo.png" class="logo">
        </router-link>

        <el-row>
          <el-col class="searchInput">
            <el-input placeholder="Write the name of a card here"
              v-model="search" >
              <el-button slot="append" icon="el-icon-search"
                @click="getCard(search)" />
            </el-input>
          </el-col>
        </el-row>
      </el-aside>

      <el-row>
        <el-col>
          <router-view></router-view>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'
import axios from 'axios'
export default {
  components: {
    'Searchbar': Searchbar
  },
  data () {
    return {
      actualCard: null,
      search: ''
    }
  },

  methods: {
    loadingScreen () {
      // eslint-disable-next-line
      const screenLoad = this.$loading({
        lock: true,
        background: 'black',
        text: 'Loading'
      })
    },

    getCard (search) {
      axios.get('https://api.magicthegathering.io/v1/cards?name=' + search)
        .then(response => {
          this.actualCard = response.data.cards
          this.search = ''
          this.$router.push({
            name: `chosedcard`,
            params: {
              actualCard: this.actualCard[0]
            }
          })
        }).catch((e) => {
          console.log(e)
        })
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
  .main-page{
    margin-top: 20px;
  }

  .logo{
    width: 250px;
    height: 95px;
  }

  p{
    color: white;
  }
</style>
