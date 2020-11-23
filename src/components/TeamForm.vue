<template>
    <div id="TeamForm">
			<div class="team-name"><span class="iconfont7 icon-jiajiabaojie-tubiao-"></span>
				<input type="text" v-model="TeamInfo.TeamName" id="teamName" placeholder="团队名称"/>
			</div>
			<div class="leader"><span class="iconfont7 icon-jiajiabaojie-tubiao-"></span>
				<input type="text" v-model="TeamInfo.Leader" id="Leader" placeholder="领队"/>
			</div>
            <div class="unit"><span class="iconfont8 icon-danwei icon"></span>
				<input type="text" v-model="TeamInfo.Unit" id="Unit" placeholder="单位名称"/>
			</div>
			<div class="contact"><span class="iconfont8 icon-lianxiren icon"></span>
				<input type="text" v-model="TeamInfo.Contact" id="Contact" placeholder="联系方式"/>
			</div>
			<div class="main-member">
				<div class="add-btn"><span class="iconfont9 icon-tianjia " @click="MemberAdd()"></span>骨干成员</div>
                <input type="text" v-model="TeamInfo.Member[i]" id="Member" placeholder="骨干成员" v-for="(item,i) of TeamInfo.Member" :key="i"/>
			</div>
            <div class="tech">
				<div class="add-btn"><span class="iconfont9 icon-tianjia " @click="TechAdd()"></span>关键技术</div>
                <input type="text" v-model="TeamInfo.Tech[i]" id="Tech" placeholder="关键技术" v-for="(item,i) of TeamInfo.Tech" :key="i"/>
			</div>
            <div class="equip">
				<div class="add-btn"><span class="iconfont9 icon-tianjia " @click="EquipAdd()"></span>关键设备</div>
                <input type="text" v-model="TeamInfo.Equip[i]" id="Equip" placeholder="关键设备(30万以上)" v-for="(item,i) of TeamInfo.Equip" :key="i"/>
			</div>
			<div class="area">领域:
				<input type="checkbox" v-model="TeamInfo.Area"  value="航天航空" />航天航空
				<input type="checkbox" v-model="TeamInfo.Area"  value="生物技术" />生物科技
				<input type="checkbox" v-model="TeamInfo.Area"  value="信息技术" />信息技术
				<input type="checkbox" v-model="TeamInfo.Area"  value="新能源" />新能源
                <input type="text" id="area" v-model="otherArea" placeholder="其他"/>
			</div>
            <button type="button" class="team-btn" @click="teamRegi()">团队注册</button>
		</div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "TeamForm",
    data(){
        return{
            TeamInfo:{
                TeamName: "",
                Leader: "",
                Member: [],
                Tech: [],
                Equip: [],
                Unit: "",
                Contact: "",
                Area:[],
            },
            otherArea: ""
        }
    },
    methods:{
        teamRegi:function(){
            this.TeamInfo.Area.push(this.otherArea)
            this.$router.push('/newinfo/team/teaminfo')
            console.log(this.TeamInfo)
        },
        MemberAdd:function(){
            this.TeamInfo.Member.push('')
        },
        TechAdd:function(){
            this.TeamInfo.Tech.push('')
        },
        EquipAdd:function(){
            this.TeamInfo.Equip.push('')
        }
    }
}
</script>

<style scoped>
*{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    box-sizing: border-box;
}
#TeamForm{
    width: 100%;
    padding: 10px 0;
}
#TeamForm input{
    outline: none;
    border: none;
}
.team-name,.leader,.unit,.contact{
    border: 1px solid #dddada;
    border-radius: 15px;
    width: 90%;
    height: 55px;
    margin: 10px 0 10px 5%;
}
.main-member,.tech,.equip{
    margin: 10px 0 10px 5%;
    width: 90%;
    min-height: 50px;
    margin-bottom: 5px;
    border: 1px solid #dddada;
    border-radius: 3px;
}
#teamName,#Leader,#Unit,#Contact,#Member,#Tech,#Equip{
    width: 90%;
    height: 50px;
    font-size: 15px;
}
.icon{
    font-size: 20px;
}
.area{
    margin-top: 10px;
    width: 100%;
    padding-left: 5%;
}
.add-btn{
    float: left;
    display: inline;
}
.team-btn{
  margin-left: 20%;
  margin-top: 10px;
  text-align: center;
  width: 60%;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: skyblue;
  color: white;
  outline: none;
}
</style>