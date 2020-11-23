<template>
  <div id="top">
    <div class="first">
			<div class="title">{{title}}</div>
			<div class="control-center"><span class="iconfont icon-zu1776 control-icon"></span><router-link to="/control">管理中心</router-link></div>
			<div class="time">{{nowDate}}</div>
			<div class="login"><span class="iconfont icon-denglu-yonghu"><router-link to="/login">登录</router-link>|<router-link to="/register">注册</router-link></span></div>
		</div>
		<div class="second">
		    <div class="logo-box"><img :src="logo"></div>
			<div class="searchBar">
				<input  id="result_output"  type="search" placeholder="找需求"><span class="iconfont14 icon-sousuo search-icon"></span>
				<div class="send_needs"><span class="iconfont5 icon-fasong"></span><router-link to="/sendneed" tag="span">发需求</router-link></div>
				<div class="send_product"><span class="iconfont5 icon-tianxie"></span><router-link to="#" tag="span">发产品</router-link></div>
			</div>
		</div>
		<div class="third">
			<NavMenu/>
		</div>
  </div>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  name: 'top',
  components:{NavMenu},
  data(){
	  return{
		  msg:'logo',
		  logo:require('../assets/img/logo.png'),
		  title:'欢迎来到佛山军民融合平台',
		  nowDate:null,
		  timer:"",
		  currentTime:new Date()
	  }
  },
  created(){
	  this.timer = setInterval(this.getTime,1000)
  },
  methods:{
	  getTime(){
		  const date = new Date()
		  const y = date.getFullYear()
		  const m = date.getMonth()+1
		  const d = date.getDate()
          this.nowDate = y+"年"+m+"月"+d+"日"
	  }
  },
  beforeDestroy(){
	  if(this.timer){
		  clearInterval(this.timer)
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0;
	margin: 0;
	list-style: none;
	text-decoration: none;
}
.first{
	position: relative;
	width: 100%;
	height: 50px;
/* 	background-color: #323b50; */
	margin: 0 auto;
}
.title{
	font-weight: bold;
	line-height: 45px;
	position: absolute;
	left: 0;
	margin-left: 20px;
}
.control-center{
	font-weight: bold;
	line-height: 45px;
	position: absolute;
	right: 320px;
}
.control-center a{
	color: black;
}
.control-icon{
	font-size: 14px;
	margin-right: 2px;
}
.time{
	line-height: 45px;
	position: absolute;
	right: 150px;
	font-weight: bold;
}
.login{
	font-weight: bold;
	line-height: 45px;
	position: absolute;
	right: 20px;
}
.second{
	height: 150px;
	width: 80%;
	position: relative;
	left: 10%;
}
.second img{
	width: 100%;
	height: 100%;
	z-index: -1;
}
.logo-box{
	height: 70%;
	width: 60%;
}
.logo-box img{
	margin-top: 5%;
	width: 100%;
	height: 100%;
}
.searchBar{
	position: absolute;
	top: 33.3%;
	right: 10px;
	height: 60%;
	width: 30%;
}
.search-icon{
	position: absolute;
	font-size: 30px;
}
.searchBar div{
	display: inline;
	line-height: 50px;
}
.searchBar input[type="search"]{
    width: 98%;
    border: 1px solid skyblue;
    outline: none;
    border-radius: 15px;
    background: rgb(247, 247, 247);
    padding: 0 20px 0 10px;
    box-sizing: border-box;
    height: 30px;
    color: gray;
}
.third{
		position: relative;
		width: 80%;
		height: 60px;
		left: 10%;
}
.send-needs{
	font-size: 20px;
	font-weight: bolder;
}
.send-product{
	font-size: 20px;
	font-weight: bolder;
}
</style>