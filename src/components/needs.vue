<template>
  <div id="needs">
    <div class="needs-head"><span class="iconfont3 icon-biaotizhishi"></span>供需信息<router-link to="/" class="more">更多++</router-link></div>
			<div class="needs-box">
				<div class="needs-list"><div class="title">需求列表</div>
          <ul>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont2 icon-ico_product"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
          </ul>
        </div>
				<div class="produce-list"><div class="title">供应信息</div>
          <ul>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
            <li><router-link to="/newinfo" class="tab-info"><span class="iconfont3 icon-gongying"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
          </ul>
        </div>
			</div>
  </div>
</template>

<script>

export default {
  name: 'needs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  list-style: none;
  padding: 0;
}
#needs{
  position: relative;
  width: 80%;
  height: 350px;
  left: 10%;
}
.needs-head{
  font-weight: bolder;
  width: 100%;
  height: 50px;
  text-align: left;
  line-height: 45px;
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
  border-bottom: 1px solid #efefef;
  height: 30px;
}
.needs-box ul li a{
  color: black;
}
.needs-list{
  text-align: left;
  float: left;
  height: 100%;
  width: 49%;
  margin-right: 0.5%;
}
.needs-list ul li{
  overflow: hidden;
	text-align: left;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #efefef;
	white-space: nowrap;
	text-overflow: ellipsis;
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
  height: 18px;
  border-left: 5px solid #323b50;
  border-top: 1px solid #323b50;
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
  width: 50%;
}
.produce-list ul li{
  overflow: hidden;
	text-align: left;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #efefef;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>