<template>
<div id="newsTab">
    <ul>
        <router-link tag="li" to="/newinfo/notice/news"><span class="iconfont5 icon-tianxie icon"></span>通知公告</router-link>
        <router-link tag="li" to="/newinfo/notice/works"><span class="iconfont5 icon-tianxie icon"></span>工作动态</router-link>
    </ul>

</div>
</template>

<script>
export default {
  name: "newsTab",
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
}
#newsTab{
    width: 100%;
  
    border: 1px solid #dbdbdb;
}
#newsTab ul li{
    width: 100%;
    height: 50px;
    background-color: #f6f6f6;
  /*   color: gray; */
    border-bottom: 1px solid  #dbdbdb;
    line-height: 50px;
    text-align: center;
}
#newsTab ul li:active{
   background:  #323b50;
   color: rgb(255, 255, 255);
   font-size: 20px;
}
.icon{
    position: relative;
    top:2px ;
    left:-5px ;
}
.router-link-active{
    color: rgb(0, 0, 0) !important;
    background-color: rgb(211, 211, 211) !important;
    
}


</style>