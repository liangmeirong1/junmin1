<template>
    <div id="control">
      <!--头部-->
      <div class="control-head"><img :src="logo">
        <!--<div class="backHome"><router-link to="/">返回首页</router-link></div>-->
      </div>
      <div class="control-box">
        <!--侧导航栏-->
        <div class="control-nav">
          <ul>
            <li v-for="item in pages" :key="item" @click="changePage()">{{item}}</li>
          </ul>
        </div>
        <!--内容框-->
        <div class="content-box">
          <ul id="change-box">
            <li class="page">首页</li>
            <li class="page2">需求管理</li>
            <li class="page3">供应管理</li>
          </ul>
        </div>
      </div>
      <NavBottom/>
    </div>
</template>

<script>
import $ from 'jquery'
import NavBottom from '../components/NavBottom'

export default {
  name:'control',
  components:{NavBottom},
  data(){
    return{
      logo:require('../assets/img/logo.png'),
      pages:['管理首页','需求管理','供应管理']
    }
  },
  methods:{
    changePage(){
      $('.control-nav>ul>li').click(function(){
        var idx = $(this).index()
        $('#change-box li').eq(idx).show().siblings('li').hide()
      })
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
#control{
  width: 100%;
}
.control-head{
  text-align: left;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gray;
}
.control-head img{
  height: 100%;
  width: 40%;
}
/* .backHome{
  position: absolute;
  display: inline;
} */
.control-box{
  width: 100%;
  height: 100%;
}
.control-nav{
  float: left;
  width: 10%;
  min-height: 500px;
  border-right: 1px solid gray;
}
.control-nav ul li{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid gray;
  line-height: 70px;
}
.content-box{
  margin-left: 10%;
  width: 90%;
  min-height: 500px;
}
#change-box{
  width: 100%;
  height: 500px;
  overflow: hidden;
}
#change-box li{
  height: 100%;
  width: 100%;
  background-color: seashell;
}
</style>