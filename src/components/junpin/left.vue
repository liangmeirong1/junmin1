<template>
<div id="StraightTab">
    <ul>
        <router-link tag="li" to="#"><span class="iconfont5 icon-tianxie icon"></span>军品采购</router-link>
        <router-link tag="li" to="/newinfo/Militaryprocure/jundui" active-class="router-link-active">军队需求</router-link>
        <router-link tag="li" to="/newinfo/Militaryprocure/jungong" active-class="router-link-active">军工需求</router-link>
    
    </ul>

</div>
</template>

<script>
export default {
  name: "left",
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
    height: 50px;
    background-color: #f6f6f6;
  /*   color: gray; */
    border-bottom: 1px solid  #dbdbdb;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
#StraightTab ul li:nth-child(1){
   background:  #323b50;
   color: rgb(255, 255, 255);
   font-size: 20px;
   cursor: text;
}
.icon{
    position: relative;
    top:2px ;
    left:-5px ;
}
.router-link-active{
    color: rgb(0, 0, 0) !important;
    background-color: #dadada !important;
    
}


</style>