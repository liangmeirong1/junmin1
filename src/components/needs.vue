<template>
  <div id="needs">
    <div class="needs-head"><span class="iconfont3 icon-biaotizhishi"></span>供需信息<router-link to="/newinfo/demand/pro" class="more">更多++</router-link></div>
			<div class="needs-box">
				<div class="needs-list"><div class="title">需求列表</div>
          <ul>
            <li v-for="(item,index) in needs" :key="index"><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product" ></span>{{item}}</router-link><span class="time">2020-7-11</span></li>
          </ul>
        </div>
				<div class="produce-list"><div class="title">供应信息</div>
          <ul>
            <li v-for="(item,index) in products" :key="index"><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>{{item}}</router-link><span class="time">2020-7-11</span></li>
          </ul>
        </div>
			</div>
  </div>
</template>

<script>
import $ from 'jquery' 

export default {
  name: 'needs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      needs:['多箱型自动码垛机','远大筑工PC厂磁盒、模具开发项目','退役歼7飞行仪表','寻找具有“工具”类承制资格的民营企业','寻找水上救生衣等研发生产企业','寻找防暴服生产企业'],
      products:['大型水电站水利枢纽仿真模拟实训台模型','制备型超高速离心机','气相色谱-质谱联用仪','发动机油气分离试验机','电真空件老炼测试检测系统','全自动多人射击智能飞物靶系统']
    }
  },
  mounted(){
    window.addEventListener("scroll",this.showIcon)
  },
  methods:{
    showIcon(){
      if(!!document.documentElement.scrollTop && document.documentElement.scrollTop>10){
        $('.needs-list>ul>li').fadeIn(2000)
        $('.produce-list>ul>li').fadeIn(2000)
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
  box-sizing: border-box;
  box-sizing: border-box;
}
#needs{
  position: relative;
  width: 80%;
  left: 10%;
}
.needs-head{
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
.needs-box{
  width: 100%;
  height: 300px;
}
.needs-box ul li{
  text-align: left;
  border-bottom: 1px solid #ac9292;
  height: 30px;
}
.needs-box ul li a{
  color: black;
}
.needs-box ul li a:hover{
  color: skyblue;
}
.needs-list{
  text-align: left;
  float: left;
  height: 100%;
  width: 47.5%;
  margin-right: 5%;
  background-color: rgb(232, 248, 246);
  border-radius: 10px;
}
.needs-list ul li{
  display: none;
  padding-left: 5px;
  overflow: hidden;
	text-align: left;
	width: 100%;
	height: 40px;
  border: none;
	white-space: nowrap;
	text-overflow: ellipsis;
  font-weight: 700;
}
.tab-info{
	text-decoration: none;
	width: 80%;
	overflow: hidden;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	line-height: 40px;
	display: inline-block;
}
.title{
  line-height: 20px;
  margin-left: 5px;
  font-weight: 800;
  height: 18px;
  border-left: 5px solid #323b50;
}
.time{
	float: right;
	line-height: 40px;
	font-size: 13px;
}
.produce-list{
  text-align: left;
  float: left;
  height: 100%;
  width: 47.5%;
  background-color: rgb(232, 248, 246);
  border-radius: 10px;
}
.produce-list ul li{
  display: none;
  overflow: hidden;
	text-align: left;
	width: 100%;
	height: 40px;
	border: none;
	white-space: nowrap;
	text-overflow: ellipsis;
  font-weight: 700;
}
</style>