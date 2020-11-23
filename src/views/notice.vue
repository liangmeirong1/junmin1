<template>
  <div id="notice">
    <div class="left"><newsTab /></div> 
    <div class="right"><router-view></router-view></div>
  </div>
</template>

<script>
import newsTab from "../components/newsTab";

export default {
  name: "notice",
  components: {newsTab},
  data() {
    return {
      msg: "1",
    };
  },
};
</script>
<style scoped>
#notice {
  width: 80%;
  position: relative;
  left: 10%;
 /*  border: 1px solid rgb(235, 235, 235); */
  display: flex;
  overflow: hidden;
  margin-top: 10px;
}
.left {
  width: 21%;
  margin-right: 30px;
}
.right{
  width: 100%;
}
</style>