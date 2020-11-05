<template>
  <div id="top">
    <div class="first">
			<div class="title">{{title}}</div>
			<div class="time">{{nowDate}}</div>
			<div class="login"><span class="iconfont icon-denglu-yonghu"><router-link to="/login">登录</router-link>|<router-link to="/register">注册</router-link></span></div>
		</div>
		<div class="second">
		    <img :src="logo">
			<div class="searchBar">
				<input  id="result_output"  type="search" placeholder="请输入关键信息">
				<div class="send_needs"><span class="iconfont5 icon-fasong"></span>发需求</div>
				<div class="send_product"><span class="iconfont5 icon-tianxie"></span>发产品</div>
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
		  logo:require('../assets/logo.jpg'),
		  title:'欢迎来到xxx军民融合平台',
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
	background-color: #323b50;
	margin: 0 auto;
}
.title{
	color: white;
	line-height: 45px;
	position: absolute;
	left: 0;
	margin-left: 20px;
}
.time{
	color: white;
	line-height: 45px;
	position: absolute;
	right: 150px;
}
.login{
	text-decoration-color: white;
	color: white;
	line-height: 45px;
	position: absolute;
	right: 20px;
}
.login a{
	color: white;
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
.searchBar{
		position: absolute;
		top: 33.3%;
		right: 0;
		height: 60%;
		width: 40%;
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