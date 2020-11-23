
<template>
  <div class="content1">
    <div class="top">
      <div class="title">
        <span class="iconfont5 icon-fasong"></span>{{list.title}}
      </div>
    
    </div>
    <table class="table" border="1">
      <tbody>
        <tr>
          <td class="td_head">单位名称：</td>
          <td colspan="3">{{list.unit}}</td>
        </tr>
        <tr>
          <td class="td_head">需求类型</td>
          <td>{{list.type}}</td>
          <td class="td_head">发布日期</td>
          <td>{{list.date}}</td>
        </tr>
        <tr>
          <td class="td_head">联系人</td>
          <td v-if="!(this.$store.state.user.ilLogin)">
            {{man1}}(请<router-link  to="/login">登录</router-link>后查看)
          </td>
           <td v-else>
            {{list.man}}
          </td>
          <td class="td_head">联系电话</td>
          <td v-if="!(this.$store.state.user.ilLogin)">{{phone}}</td>
           <td v-else>{{list.phone}}</td>
        </tr>
        <tr>
          <td class="td_head">对接方式</td>
          <td colspan="3">本网站采取线下对接报名，请与联系人直接联系。</td>
         
        </tr>
      </tbody>
    </table>
    <div class="infodetail">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">需求描述</span>
          {{list.detail}}
        </el-tab-pane>
        <el-tab-pane label="具体要求">{{list.demand}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>


export default {
  name: "details1",
  components: {},
  props:{list:Object},
  data() {
    return {
 
    };
  },
  computed:{
    man1(){
      return this.list.man.charAt(0)+"**"
    },
    phone(){
      return this.list.phone.slice(0,3)+"*****"+this.list.phone.slice(-3)
    }

  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.content1 {
  width: 95%;
  margin: 25px auto;
  font-size: 16px;
}

.title {
 
  text-align: left;
  font-size: 20px;
}
.iconfont5 {
  font-size: 17px;
  color: #323b50;
  margin-right: 10px;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  text-align: left;
}
td {
  padding-left: 25px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-top: 25px;
  height: 150px;
}
.table .td_head {
  color: #333333;
  width: 175px;
  height: 50px;
  background: #ebebeb;
}
.infodetail {
  
  margin-top: 25px;
}
.infodetail >>> .el-tabs--border-card {
border: 1px solid #dadada;
    box-shadow: none;
}
.infodetail >>> .el-tabs--border-card>.el-tabs__header {
    background-color:  #dadada;
    font-size: 16px !important;
    
    margin: 0;
}

 .infodetail >>> .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #ffffff;
    background-color: #323b50;
}
.infodetail >>> .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #ffffff;
}
.infodetail >>> .el-tabs__item {
    font-size: 16px;
   
}
.el-tab-pane{
  text-align: left;
}
</style>