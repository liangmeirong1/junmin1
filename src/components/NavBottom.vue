<template>
  <div id="NavBottom">
    <div class="message">
      <div class="message-head"><span class="iconfont6 icon-xiangqing"></span>平台信息</div>
    </div>
    <div class="contact">
      <div class="contact-head"><span class="iconfont6 icon-xinbaniconshangchuan-"></span>联系我们</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBottom',
  data () {
    return {
      msg: '平台信息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#NavBottom{
    height: 200px;
    width: 100%;
    margin: 0 auto;
    background-color: rgb(240, 236, 236);
}
.message{
  text-align: left;
  float: left;
  width: 30%;
  height: 80%;
  margin: 20px;
  font-weight: bolder;
}
.contact{
  text-align: left;
  float: left;
  width: 30%;
  height: 80%;
  margin: 20px;
  font-weight: bolder;
}
</style>