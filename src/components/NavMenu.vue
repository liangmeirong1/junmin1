<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title" class="item-title">要闻动态</template>
    <el-menu-item index="2-1" class="item"><router-link to="/newinfo/notice/news">通知公告</router-link></el-menu-item>
    <el-menu-item index="2-2" class="item"><router-link to="/newinfo/notice/works">工作动态</router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="3">政策法规</el-menu-item>
  <el-submenu index="4">
    <template slot="title" class="item-title">供需信息</template>
    <el-menu-item index="4-1" class="item"><router-link to="/newinfo/demand/pro">产品需求</router-link></el-menu-item>
    <el-menu-item index="4-2" class="item"><router-link to="/newinfo/demand/techno">技术需求</router-link></el-menu-item>
    <el-menu-item index="4-3" class="item"><router-link to="/newinfo/demand/human">人才需求</router-link></el-menu-item>
  </el-submenu>
    <el-submenu index="5">
    <template slot="title">军品采购</template>
    <el-menu-item index="5-1"><router-link to="/newinfo/Militaryprocure/jundui">军队需求</router-link></el-menu-item>
    <el-menu-item index="5-2"><router-link to="/newinfo/Militaryprocure/jungong">军工需求</router-link></el-menu-item>
    <el-menu-item index="5-1"><router-link to="/newinfo/Militaryprocure/jundui">应急攻关</router-link></el-menu-item>
    <el-menu-item index="5-2"><router-link to="/newinfo/Militaryprocure/jungong">战备保障</router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="6">产业园区</el-menu-item>
  <el-menu-item index="7"><router-link to="/newinfo/team/resourceinfo">资源共享</router-link></el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data () {
      return{
          activeIndex:'1',
          activeIndex2:'1'
      }
  },
  methods:{
      handleSelect(key, keyPath){
          console.log(key, keyPath)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  text-decoration: none;
  font-weight: bold;
}
.el-menu{
  background-color: rgb(208, 234, 245);
}
.el-menu-item{
  width: 14.28%;
  height: 80px;
}
.el-submenu{
   width: 14.28%;
}
.item{
  width: 100%;
}
.item a{
  text-align: center;
  width: 100%;
}
</style>