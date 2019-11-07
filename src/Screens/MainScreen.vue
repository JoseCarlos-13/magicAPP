<template>
  <el-row type="flex" justify="center">
    <el-col :span="22" :xs="22">
      <el-row class="main-page">
        <h2>Seja bem vindo</h2>
        <el-col class="col1">
          <img src="../assets/symbols/black-symbol.png" class="black">
        </el-col>

        <el-col class="col2">
          <img src="../assets/symbols/white-symbol.png" class="white">
          <img src="../assets/symbols/red-symbol.png" class="red">
        </el-col>

        <el-col class="col3">
          <img src="../assets/symbols/green-symbol.png" class="green">
          <img src="../assets/symbols/blue-symbol.png" class="blue">
        </el-col>

      </el-row>
    </el-col>
  </el-row>
</template>

<script>

</script>

<style>
  .main-page{
    margin-top: 20px;
  }

  h2{
    color: white;
  }

  .white{
    margin-left: 150px;
  }
  .red{
    margin-right: 150px;
  }

  .green{
    margin-left: 200px;
  }

  .blue{
    margin-right: 200px;
  }

  .col1{
    margin-top: 0px;
  }

  .col2{
    display: flex;
    margin-top: 0px;
    justify-content: space-around;
  }

  .col3{
    display: flex;
    margin-top: 100px;
    justify-content: space-evenly;
  }

  img{
    width: 180px;
  }

  .logo{
    width: 250px;
    height: 95px;
  }

  p{
    color: white;
  }
</style>
