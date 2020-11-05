<template>
  <div id="demand">
    <div class="left"><StraightTab /></div>

    <div class="content">
     <details1></details1>
    </div>
  
  </div>
</template>

<script>
import StraightTab from "../components/StraightTab";
 import details1 from "../components/details1" 

export default {
  name: "demdetails",
  components: { StraightTab,details1},
  data() {
    return {
      msg: "1",
    };
  },
};
</script>
<style scoped>
#demand {
  width: 80%;
  position: relative;
  left: 10%;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  overflow: hidden;
  margin-top: 10px;
}
.left {
  width: 21%;
}


.nav1 {
  height: 50px;
  width: 100%;
  background:  rgb(235, 235, 235);
  line-height: 50px;
  border-bottom: 3px solid  #323b50;

}
.selectMenu li{
float: left;
margin-left: 15px;


}
.content {
  border: 1px solid rgb(235, 235, 235);
  flex: 1;
  margin-left: 15px;
  
}
</style>