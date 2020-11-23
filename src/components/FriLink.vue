<template>
  <div id="FriLink">
    <div class="Link-head"><span class="iconfont3 icon-biaotizhishi"></span>友情链接</div>
    <div class="Link-box">
      <ul>
        <li v-for="item in Link" :key="item"><img :src="item"></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FriLink',
  data () {
    return {
      msg: '友情链接',
      Link: [require('../assets/img/link1.jpg'),require('../assets/img/link2.jpg'),require('../assets/img/link3.jpg'),require('../assets/img/link4.jpg'),require('../assets/img/link5.jpg'),
      require('../assets/img/link6.jpg'),require('../assets/img/link7.jpg'),require('../assets/img/link8.jpg')]
    }
  },
    mounted(){
    window.addEventListener("scroll",this.showIcon)
  },
  methods:{
    showIcon(){
      if(!!document.documentElement.scrollTop && document.documentElement.scrollTop>1270){
        $('.Link-box').fadeIn(2500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#FriLink{
    position: relative;
    width: 80%;
    height: 250px;
    left: 10%;
    margin-top: 10px;
}
.Link-head{
  font-weight: bolder;
  width: 100%;
  height: 50px;
  text-align: left;
  line-height: 45px;
  border-bottom: 2px solid #323b50;
}
.Link-box{
  display: none;
}
.Link-box ul li{
  float: left;
  width: 20%;
  height: 50px;
  margin-top: 25px;
  margin-left: 45px;
  border-radius: 10px;
}
.Link-box ul li img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>