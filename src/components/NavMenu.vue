<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">要闻动态</template>
    <el-menu-item index="2-1"><router-link to="/newinfo">通知公告</router-link></el-menu-item>
    <el-menu-item index="2-2">工作动态</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">政策法规</el-menu-item>
  <el-submenu index="4">
    <template slot="title">供需信息</template>
    <el-menu-item index="4-1"><router-link to="/newinfo/demand/pro">产品需求</router-link></el-menu-item>
    <el-menu-item index="4-2"><router-link to="/newinfo/demand/techno">技术需求</router-link></el-menu-item>
    <el-menu-item index="4-3"><router-link to="/newinfo/demand/human">人才需求</router-link></el-menu-item>
    <el-menu-item index="4-4"><router-link to="/newinfo/demand/device">设备资源</router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="5">产业园区</el-menu-item>
  <el-menu-item index="6">关于我们</el-menu-item>
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
}
.el-menu{
  background-color: #323b50;
}
.el-menu--horizontal>.el-menu-item a{
  color: white;
}
.el-menu--horizontal>.el-menu-item{
  color: white;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  color: white;
}
.el-menu-item{
  width: 16.65%;
  height: 80px;
}
.el-submenu{
   width: 16.65%;
}
</style>