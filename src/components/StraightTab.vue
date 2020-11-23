<template>
<div id="StraightTab">
    <ul>
        <router-link tag="li" to="#"><span class="iconfont5 icon-tianxie icon"></span>需求信息</router-link>
        <router-link tag="li" to="/newinfo/demand/pro" active-class="router-link-active">产品需求</router-link>
        <router-link tag="li" to="/newinfo/demand/techno" active-class="router-link-active">技术需求</router-link>
        <router-link tag="li" to="/newinfo/demand/human" active-class="router-link-active">人才需求</router-link>
    </ul>

</div>
</template>

<script>
export default {
  name: "NavMenu",
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
#StraightTab{
    width: 100%;
    border: 1px solid #dbdbdb;
}
#StraightTab ul li{
    width: 100%;
    height: 60px;
    background-color: #f6f6f6;
  /*   color: gray; */
    border-bottom: 1px solid  #dbdbdb;
    line-height: 50px;
    text-align: center;
}
#StraightTab ul li:nth-child(1),#StraightTab ul li:nth-child(5){
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