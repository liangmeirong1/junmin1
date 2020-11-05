<template>
  <div id="tabs">
		    <input type="radio" name="screen" id="s1" checked>
		    <input type="radio" name="screen" id="s2">
			<input type="radio" name="screen" id="s3">
			<div class="tab">
				<ul>
					<li><label for="s1">工作动态</label></li>
					<li><label for="s2">通知公告</label></li>
			    </ul>
			</div>		        
			<div class="view-port">
					<div class="screen-container">
					<!-- 默认第一屏幕 -->
						<div class="screen">
							<ul>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>林泉电机助力我国首款高原无人机高原试飞成功</router-link><span class="time">2020-7-11</span></li>
				            </ul>
						</div>
						<!-- 第二屏幕 -->
						<div class="screen">
							<ul>
							    <li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
								<li><router-link to="/newinfo" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>贵州省国防科技工业系统安全生产 标准化达标企业公告（ 黔科工安标〔2020〕6号）</router-link><span class="time">2020-7-11</span></li>
				            </ul>
						</div>
					</div>
			</div>
			<div class="needs"></div>
			<div class="product"></div>
		</div>
</template>

<script>
export default {
  name: "tabs",
  data () {
    return {
      activeName: 'second'
    }
  },
  methods:{
      handleClick(tab, event){
          console.log(tab, event)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    list-style: none;
	box-sizing: border-box;
}
#tabs{
	overflow: hidden;
	width: 100%;
	height: 100%;
}
input[name="screen"]
{
	display: none;
}
.screen-container{
	width: 200%;
	transition: margin-left 0.4S;
}

.screen{
	width: 50%;
	float: left;
}

#s1:checked~.view-port .screen-container{
	margin-left: 0;
}

#s1:checked~.tab ul li:nth-child(1) label{
	color: skyblue;
	font-weight: bold;
}

#s2:checked~.view-port .screen-container{
	margin-left: -100%;
}

#s2:checked~.tab ul li:nth-child(2) label{
	color: skyblue;
	font-weight: bold;
}

.tab{
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #efefef
}
.tab ul li{
	float: left;
	width: 30%;
	height: 30px;
}

.tab ul li label{
	font-size: 15px;
	width: 100%;
	display: block;
	height: 40px;
	line-height: 40px;
	text-align: center;
}
.tab ul li:nth-child(2){
	border-left: 1px solid #323b50;
}
.screen ul{
	padding: 0;
	margin: 0;
}

.screen ul li{
	overflow: hidden;
	text-align: left;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #efefef;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.screen ul li a{
	color: black;
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
	padding-left: 10px;
}
.time{
	float: right;
	line-height: 40px;
	font-size: 13px;
}
</style>
