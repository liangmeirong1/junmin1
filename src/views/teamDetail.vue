<template>
  <div id="teamDetail">
    <div class="center">
    <div class="team-box">
     <div class="team-head"><span class="iconfont10 icon-UI_icon_gongzuodongtai"></span>精英团队</div>
     <div class="team-show">
       <div class="jianjie">
         <div class="team-img">
           <img src="" alt="">
         </div>
         <div class="team-msg">
           <ul>
            <li>团队名称：</li>
            <li>领队：</li>
            <li>联系方式：</li>
            <li>单位：</li>
           </ul>
         </div>
       </div>
       <div class="neirong"><teamTab2/></div>
     </div>
    </div>
    </div>
  </div>
</template>

<script>
import page from '../components/page'
import teamTab2 from '../components/teamTab2'

export default {
  name: "teamDetail",
  components:{page,teamTab2},
  data () {
      return{
          teamImg:require('../assets/img/pbg.png'),
          msg:'1'
      }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
}
.center{
  width: 100%;
  min-height: 500px;
}
.team-box{
  width: 100%;
  float: left;
  min-height: 200px;
}
.team-head{
  text-align: left;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dddada;
  line-height: 35px;
}
.team-show{
  margin-top: 10px;
  width: 100%;
  min-height: 300px;
}
.jianjie{
    width: 100%;
    height: 200px;
    text-align: left;
    background-color: white;
}
.team-img{
  float: left;
  width: 20%;
  height: 100%;
  border: 1px solid gray;
}
.team-msg{
  float: left;
  height: 100%;
  width: 80%;
}
.team-msg ul li{
  margin-bottom: 10px;
  font-weight: bold;
}
.neirong{
    width: 100%;
    min-height: 250px;
}
</style>