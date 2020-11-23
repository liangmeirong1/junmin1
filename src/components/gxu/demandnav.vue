
<template>
  <div class="nav1">
    <div class="selectMenu">
      <div class="area">服务领域 :</div>
      <el-row>
        <el-button
          type="info"
          size="medium"
          plain
          @click="handleClickNav('all')"
          :style="styleObject"
          >全部</el-button
        >
        <el-button type="info" size="medium" plain @click="handleClickNav('nh')"
          >南海区</el-button
        >
        <el-button type="info" size="medium" plain @click="handleClickNav('cc')"
          >禅城区</el-button
        >
        <el-button type="info" size="medium" plain @click="handleClickNav('ss')"
          >三水区</el-button
        >
        <el-button type="info" size="medium" plain @click="handleClickNav('gm')"
          >高明区</el-button
        >
        <el-button type="info" size="medium" plain @click="handleClickNav('sd')"
          >顺德区</el-button
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "demandnav",
  components: {},
  data() {
    return {
      styleObject: {
        color: "white",
        background: "#909399",
      },
    };
  },
  watch: {
    $route: {
      handler(nv, ov) {
        this.styleObject = {
          color: "white",
          background: "#909399",
        };
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    handleClickNav(params) {
      this.styleObject = null;
      this.$emit("changeNav", params);
    },
  },
};
</script>
<style scoped>
.nav1 {
  height: 70px;
  width: 100%;
  background: rgb(235, 235, 235);
  display: flex;
  border-bottom: 3px solid #323b50;
  align-items: baseline;
}
.selectMenu {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
}
.area {
  padding-left: 15px;
  width: 100px;
}
.selectMenu >>> .el-button--info {
  color: #323b50;
}
</style>