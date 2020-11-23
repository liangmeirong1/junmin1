<template>
  <div id="productShow">
    <div class="show-head"><span class="iconfont3 icon-biaotizhishi"></span>产品技术展示<router-link to="/" class="more">更多++</router-link></div>
    <div class="show-box">
      <div class="box" v-for="item in msg" :key="item.index">
        <div class="product-img">
        <router-link to="#">
          <img :src="item.img">
        </router-link>
        </div>
        <div class="product-info">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
        <div class="detail">{{item.detail}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'productShow',
  data () {
    return {
      msg: [{name:"无火焰爆炸泄压装置",img:require('../assets/img/M00+00+B3+ChW8BF87fFSAC6m3AAdusdpVJQI772.png'),time:"2020-10-31",detail:"VZSB系列防爆型工业吸尘器是汇乐结合环保排放要求，及工厂防爆要求研制开发的防爆型工业吸尘asdsadasdasdasdasfeerbvd"},
            {name:"工业防爆吸尘器",img:require('../assets/img/M00+00+B3+ChW8BF87ifGAZXz5AAIGgshWIdg004.jpg'),time:"2020-10-31",detail:"无火焰爆炸泄压装置也称无焰泄压装置或无焰泄压阀，英文全称为Flamelessexplosi"},
            {name:"智能医学影像分析平台",img:require('../assets/img/pbg.png'),time:"2020-10-31",detail:""} 
      ]
    }
  },
  mounted(){
    window.addEventListener("scroll",this.showIcon)
  },
  methods:{
    showIcon(){
      if(!!document.documentElement.scrollTop && document.documentElement.scrollTop>280){
        $('.show-box').fadeIn(2500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
#productShow{
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 10px;
    min-height: 300px;
}
.show-head{
  border-bottom: 1px solid #323b50;
    font-weight: bolder;
    text-align: left;
    width: 100%;
    height: 50px;
    line-height: 45px;
}
.more{
  float: right;
  text-decoration: none;
}
.show-box{
  display: none;
    width: 100%;
    height: 300px;
    border-top: 1px solid #323b50;
}
.box{
  width: 30%;
  height: 250px;
  float: left;
  margin: 0 1.5%;
}
.product-img{
  width: 100%;
  height: 190px;
}
.product-img:hover{
  box-shadow: darkgray 10px 10px 30px 5px;
}
.product-img img{
  width: 100%;
  height: 100%;
}
.product-info{
  font-weight: 600;
  width: 100%;
  height: 35px;
}
.detail{
  font-weight: 500;
  margin-top: 18px;
  word-break: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  width: 100%;
  height: 30px;
}
</style>