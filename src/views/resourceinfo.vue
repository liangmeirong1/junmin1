<template>
  <div id="teaminfo">
    <div class="center">
    <div class="team-box">
     <div class="team-head">
     <div class="search-type"><DropList v-on:trans="get"></DropList></div>
       <input  id="result_output"  type="search" v-model="message" placeholder="请输入关键信息"><div class="search-btn" @click="onClick()"><span class="iconfont14 icon-sousuo search-icon"></span></div>
    </div>
     <div class="team-show">
       <ul>
         <li v-for="item in 6" :key="item">
            <h2><span class="iconfont5 icon-fasong"></span>团队:</h2>
            <p>关键技术:</p>
            <p>关键设备:</p>
            <p>技术领域:</p>
            <p>所属单位:</p>
            <button class="xq-btn" @click="Detail()">详情</button>
         </li>
       </ul>
     </div>
     <div class="work-bottom"><pageChange :dataAll="all" :dataCur="cur" :datanum="num" :dataDatanum="dataNum" @change="Change()"></pageChange></div>
    </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import pageChange from '../components/pageChange'
import DropList from '../components/DropList'

export default {
  name: "teaminfo",
  components:{DropList,pageChange},
  data () {
      return{
          teamImg:require('../assets/img/pbg.png'),
          message:"",//搜索关键词
          dplist:"",//搜索类型
          all:40,//总页数
          cur:1,//当前页码
          num:7,//一页显示数量，奇数
          dataNum:400//数据总量
      }
  },
  methods:{
    //点击搜索
    onClick(){
      console.log(this.dplist)
      console.log(this.message)
    },
    //获取搜索类型
    get(data){
      this.dplist = data
    },
    //跳转详情页面
    Detail(){
      this.$router.push('/newinfo/team/teamDetail')
    },
    //获取当前页码
    Change:function(page){
      this.cur = page
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
  text-decoration: none;
}
.center{
  width: 100%;
  min-height: 900px;
}
.team-box{
  float: left;
  min-height: 400px;
  width: 100%;
  border: 1px solid #dddada;
}
.team-head{
  position: relative;
  text-align: left;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dddada;
  line-height: 35px;
}
.search-type{
  position: absolute;
  left: 10px;
  min-width: 80px;
  height: 30px;
  margin-top: 15px;
}
.team-head input[type="search"]{
  position: absolute;
  left: 12%;
  width: 40%;
  border: 1px solid skyblue;
  outline: none;
  border-radius: 15px;
  background: rgb(247, 247, 247);
  padding: 0 20px 0 10px;
  box-sizing: border-box;
  height: 30px;
  color: gray;
  margin-top: 15px;
}
.search-btn{
  position: absolute;
  left: 52%;
  margin-top: 13px;
}
.team-show{
  width: 100%;
  min-height: 750px;
}
.team-show ul li{
  padding-left: 20px;
  text-align: left;
  width: 100%;
  height: 250px;
  border-bottom: 1px solid #cfcfcf;
}
.team-show ul li p{
  margin-top: 20px;
}
.team-show ul li:hover{
  box-shadow: darkgray 10px 10px 20px 5px;
}
.team-show ul li img{
  width: 100%;
  height: 70%;
}
.xq-btn{
  float: right;
  width: 80px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #323b50;
  color: aliceblue;
}
.xq-btn:hover{
  background-color: rgb(138, 217, 248);
}
</style>