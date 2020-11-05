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
      Link: [require('../assets/link1.jpg'),require('../assets/link2.jpg'),require('../assets/link3.jpg'),require('../assets/link4.jpg'),require('../assets/link5.jpg'),
      require('../assets/link6.jpg'),require('../assets/link7.jpg'),require('../assets/link8.jpg')]
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
  border-bottom: 1px solid #323b50;
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