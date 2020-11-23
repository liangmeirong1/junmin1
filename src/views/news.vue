<template>
  <div id="news">
    <div class="center">
    <div class="new-box">
     <div class="new-head"><span class="iconfont10 icon-tongzhigonggao"></span>通知公告</div>
     <div class="new-show">
       <ul>
         <li v-for="item in 20" :key="item"><router-link to="/newinfo/notice/newsDetail"><span class="iconfont11 icon-wenjian"></span>关于水动力学重点实验室、船舶振动噪声重点实验室和省绿色船舶技术重点实验室2020年开放基金项目申报指南</router-link><span class="time">2020-11-5</span></li>
       </ul>
     </div>
     <div class="new-bottom"><pageChange :dataAll="all" :dataCur="cur" :datanum="num" :dataDatanum="dataNum" @change="Change()"></pageChange></div>
    </div>
    </div>
  </div>
</template>

<script>
/* import page from '../components/page' */
import pageChange from '../components/pageChange'

export default {
  name: "news",
  components:{top,pageChange},
  data () {
      return{
          all:40,//总页数
          cur:1,//当前页码
          num:7,//一页显示数量，奇数
          dataNum:400//数据总量
      }
  },
  methods:{
    Change:function(page){
      this.cur = page
    }
  }
}
</script>

<style scoped>
*{
  list-style: none;
  padding: 0;
  margin: 0;
}
.center{
  width: 100%;
  min-height: 1000px;
}
.nav{
  float: left;
  width: 20%;
}
.new-box{
  min-height: 400px;
  border: 1px solid #dddada;
}
.new-head{
  text-align: left;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dddada;
  line-height: 35px;
}
.new-show{
  margin-top: 10px;
  width: 90%;
  margin-left: 5%;
}
.new-show ul{
  text-align: left;
  width: 100%;
  height: 100%;
}
.new-show ul li{
  margin-bottom: 10px;
  overflow: hidden;
  height: 35px;
  white-space: nowrap;
	text-overflow: ellipsis;
}
.new-show ul li a{
  text-decoration: none;
	width: 90%;
	overflow: hidden;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 40px;
	display: inline-block;
}
.new-show ul li a:hover{
  color: skyblue;
}
.time{
  float: right;
	line-height: 40px;
	font-size: 13px;
}
</style>