<template>
  <div id="demand">
    <div class="left"><StraightTab /></div>

    <div class="content">
     <demandnav/>
     <content1/>
    </div>
  </div>
</template>

<script>
import StraightTab from "../components/StraightTab";
 import content1 from "../components/content1"
  import demandnav from "../components/demandnav"

export default {
  name: "demand",
  components: { StraightTab,demandnav,content1},
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
.content {
  border: 1px solid rgb(235, 235, 235);
  flex: 1;
  margin-left: 15px;
  
}
</style>