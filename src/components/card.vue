<template>
  <el-row v-if="card" type="flex" justify="center">
    <el-col :span="12" :xs="20">
      <el-col class="card">
         <h1><u>{{card.data.cards[0].name}}</u></h1>
        <h2>{{card.data.cards[0].type}}</h2>
        <img :src="card.data.cards[0].imageUrl" class="card-image">

        <p>{{card.data.cards[0].text}}</p>
        <p><i>{{card.data.cards[0].flavor}}</i></p>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');

h1 {
  font-family: 'Libre Baskerville', serif;
}

h2{
  font-family: 'Libre Baskerville', serif;
}

.card{
  color: white;
}

.card-image{
  border-radius: 7px;
  border: solid 3.5px;
  border-color: white;
  width: 250px;
  height: 350px;
}

</style>
