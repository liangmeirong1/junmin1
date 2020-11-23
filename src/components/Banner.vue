<template>
<div class="block">
    <el-carousel>
      <el-carousel-item v-for="item in img" :key="item">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data () {
     return {
      img:[require("../assets/img/1.jpg"),
           require("../assets/img/2.jpg"),
           require("../assets/img/3.jpg"),
           require("../assets/img/4.jpg"),
           require("../assets/img/5.jpg")]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block{
  width: 100%;
  height: 100%;
}
.el-carousel__container{
  height: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>