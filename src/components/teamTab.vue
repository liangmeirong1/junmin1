<template>
<div id="teamTab">
    <ul>
        <router-link tag="li" to="/newinfo/team/resourceinfo"><span class="iconfont5 icon-tianxie icon"></span>资源共享</router-link>
        <router-link tag="li" to="#">专业技术</router-link>
        <router-link tag="li" to="#">专业设备</router-link>
        <router-link tag="li" to="/teamRegister">团队注册</router-link>
    </ul>
    <div class="msg-box"></div>
</div>
</template>

<script>
export default {
  name: "teamTab",
  data () {
      return{
          msg:'1'
      }
  }
}
</script>

<style scoped>
*{
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#teamTab{
    width: 100%;
    height: 100%;
}
#teamTab ul li{
    width: 220px;
    height: 80px;
    background-color: white;
    color: rgb(85, 82, 82);
    border-bottom: 1px solid #dddada;
    line-height: 70px;
    text-align: center;
}
#teamTab ul li:hover{
    background-color: #f6f6f6;
}
#teamTab ul li a
{
    text-decoration: none;
}
#teamTab ul li:nth-child(1){
   background:  #323b50;
   color: rgb(255, 255, 255);
   font-size: 20px;
}
.msg-box{
    margin-top: 10px;
    width: 220px;
    height: 120px;
    background-color: #323b50;
    border-radius: 10px;
}
</style>