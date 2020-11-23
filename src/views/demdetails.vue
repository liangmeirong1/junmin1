<template>
  <div id="demand">
    <div class="left"><StraightTab /></div>

    <div class="content">
     <details1 :list="serverList"></details1>
     
    </div>
 
  
  </div>
</template>

<script>
import StraightTab from "../components/gxu/StraightTab";
 import details1 from "../components/gxu/details1" 
 import axios from 'axios'

export default {
  name: "demdetails",
  components: { StraightTab,details1},
  data() {
    return {
      id:"",
      serverList:{
        title:"多箱型自动码垛机",
        unit:"安徽军民融合公共服务平台",
        type:"产品需求",
        date:"2020-03-31",
        man:"梁山茶",
        phone:"13414272615",
        detail:"在实际工作中，该水果套网包装机分为定位输送区和塑料发泡网套网区这两个区域。",
        demand:"机械系统主要由定位输送装置及间歇式套网机构以及水果呈放装置组成；整个运行过程是分选后的水果进入到定位输送装置中的定位果盘上，水果依靠输送装置中链输送的轻微振动来实现果梗垂直于水平面的自动位；水果完成定位后在定位果盘中随着输送链的转动而进行运动，进入塑料发泡网套网区，光电限位开关检测其到达套网位置，输送链转动立即停止；套网装置中的双作用气爪以及气缸在 PLC 的控制下夹着撑网筒向下运动同时间歇式套网机构插刀在电机带动下向上运动，当光电限位开关检测到两者达到同一水平高度，插刀带着发泡网下降至下限位，同时双作用气缸带着撑网筒到达上限位，最后塑料光纤切割刀在推动气缸的作用下割断发泡网，套网结束；在整个水果套网包装机运动过程中，能完成预期的水果套网包装功能。"

    },
     
    };
  },
mounted() {
    this.id = this.$route.params.id
    this.getList()
  },
  
  methods: {
    getList () {
      alert(this.id)
      axios.get('/api/getData', {
        params: {
          id: this.id,
          
        }
      }).then(res => {
        if (res) {
          this.serverList = res.data.list//拿到的是对象
        } else {
          console.log('没有数据')
        }
      })
    },}
};
</script>
<style scoped>
#demand {
  width: 80%;
  position: relative;
  left: 10%;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  overflow: hidden;
  margin-top: 10px;
}
.left {
  width: 21%;
}
.content {
  border: 1px solid rgb(235, 235, 235);
  flex: 1;
  margin-left: 15px;
   background: rgb(255, 255, 255);
  
  
}
</style>