
<template>
 <div class="nav1">
      <ul class="selectMenu">
        <div class="area" >服务领域 :</div>
        <router-link tag="li" to="#2" active-class="router-link-active">全部</router-link>
        <router-link tag="li" to="#3" active-class="router-link-active">南海区</router-link>
        <router-link tag="li" to="#4" active-class="router-link-active">顺德区</router-link>
        <router-link tag="li" to="#5" active-class="router-link-active">高明区</router-link>
        <router-link tag="li" to="#6" active-class="router-link-active">三水区</router-link>
        <router-link tag="li" to="#7" active-class="router-link-active">其他</router-link>
      </ul>
    </div>
</template>

<script>
/* import top from '../components/top' */

export default {
  name: "demandnav",
  components: {},
  data() {
    return {
       name: '11'}
  },
};
</script>
<style scoped>
.nav1 {
  height: 70px;
  width: 100%;
  background: rgb(235, 235, 235);
 
  border-bottom: 3px solid #323b50;
}
.selectMenu{
  height:100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.area{
  padding-left:15px ; }
.selectMenu li{
  height: 30px;
  line-height: 30px;
  width: 60px;
  border-radius: 8px;
  margin-left: 15px;
  border: 1px solid rgb(153, 151, 151);
}
.router-link-active{
    color: rgb(0, 0, 0) !important;
    background-color: rgb(211, 211, 211) !important;
    
}



</style>