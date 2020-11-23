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
								<li v-for="(item,index) in screen1" :key="index"><router-link to="/newinfo/notice/newsDetail" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>{{item}}</router-link><span class="time">2020-7-11</span></li>
				            </ul>
						</div>
						<!-- 第二屏幕 -->
						<div class="screen">
							<ul>
							    <li v-for="(item,index) in screen2" :key="index"><router-link to="/newinfo/notice/newsDetail" class="tab-info"><span class="iconfont1 icon-redian-shi"></span>{{item}}</router-link><span class="time">2020-7-11</span></li>
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
	  activeName: 'second',
	  screen1: ['林泉电机助力我国首款高原无人机高原试飞成功','中央军委印发《关于加快推进三位一体新型军事人才培养体系建设的决定》','“黔货出山进军营”薏仁米产品展示展销现场会在兴仁举行','弘扬新时代“工匠精神”　让贵州工业“独具匠心”','黔浙携手！“黔货出山进军营”助力雷山茶香富农','省委军民融合办举办机关党委、机关纪委、支部书记及委员履职能力提升培训班'],
	  screen2: ['林泉电机助力我国首款高原无人机高原试飞成功','中央军委印发《关于加快推进三位一体新型军事人才培养体系建设的决定》','“黔货出山进军营”薏仁米产品展示展销现场会在兴仁举行','弘扬新时代“工匠精神”　让贵州工业“独具匠心”','黔浙携手！“黔货出山进军营”助力雷山茶香富农','省委军民融合办举办机关党委、机关纪委、支部书记及委员履职能力提升培训班']
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
	height: 300px;
	background-color: rgb(232, 248, 246);
	border-bottom-right-radius: 10px;
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
	border-bottom: 1px solid #ac9292
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
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: 700;
}
.screen ul li a{
	color: black;
}
.screen ul li a:hover{
	color: skyblue;
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
