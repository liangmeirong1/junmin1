<template>
  <div id="TeamShow">
    <div class="show-head"><span class="iconfont3 icon-biaotizhishi"></span>精英团队<router-link to="/" class="more">更多++</router-link></div>
    <div class="team-box">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TeamShow',
  data () {
    return {
      msg: '精英团队'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/TeamShow.css";
</style>