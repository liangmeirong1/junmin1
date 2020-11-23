<template>
  <div id="TeamShow">
    <div class="show-head"><span class="iconfont3 icon-biaotizhishi"></span>精英团队<router-link to="/newinfo/team/resourceinfo" class="more">更多++</router-link></div>
    <div class="team-box">
      <ul>
        <li v-for="item in 4" :key="item"><ul id="team-info">
          <li><span class="iconfont7 icon-jiajiabaojie-tubiao-"></span></li>
          <li>团队:</li>
          <li>单位:</li>
          <li>联系人:</li>
          <li>领域:</li>
          <li class="detail-btn"><router-link to="/newinfo/team/teamDetail">详情</router-link></li>
        </ul></li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'TeamShow',
  data () {
    return {
      msg: '精英团队'
    }
  },
    mounted(){
    window.addEventListener("scroll",this.showIcon)
  },
  methods:{
    showIcon(){
      if(!!document.documentElement.scrollTop && document.documentElement.scrollTop>970){
        $('.team-box').fadeIn(2500)
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
#TeamShow{
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 10px;
    min-height: 250px;
}
.show-head{
  font-weight: bolder;
  width: 100%;
  height: 50px;
  text-align: left;
  line-height: 45px;
  border-bottom: 2px solid #323b50;
}
.more{
  float: right;
  text-decoration: none;
}
.team-box{
  display: none;
  text-align: left;
  width: 100%;
  height: 200px;
}
.team-box>ul{
  width: 100%;
  height: 100%;
}
.team-box>ul>li{
  border: 1px solid #efefef;
  border-radius: 20px;
  float: left;
  width: 20%;
  margin-left: 4%;
  height: 100%;
}
.team-box>ul>li:hover{
  background-color: rgb(232, 248, 246);
}

#team-info{
  width: 100%;
  height: 90%;
}
#team-info li{
  height: 15%;
}
.detail-btn{
  text-align: center;
  margin-left: 40%;
  margin-top: 20px;
  width: 50px;
  height: 30px;
  background-color: skyblue;
  border-radius: 30px;
  border: none;
  outline: none;
}
.detail-btn a{
  text-decoration: none;
}
</style>