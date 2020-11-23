<template>
  <div id="team">
    <div class="left"><teamTab /></div> 
    <div class="right"><router-view></router-view></div>
  </div>
</template>

<script>
import teamTab from "../components/teamTab";

export default {
  name: "team",
  components: {teamTab},
  data() {
    return {
      msg: "1",
    };
  },
};
</script>
<style scoped>
#team {
  width: 80%;
  position: relative;
  left: 10%;
 /*  border: 1px solid rgb(235, 235, 235); */
  display: flex;
  overflow: hidden;
  margin-top: 10px;
}
/*垂直导航栏*/
.left {
  width: 20%;
  margin-right: 30px;
}
/*内容框*/
.right{
    width: 100%;
}
</style>