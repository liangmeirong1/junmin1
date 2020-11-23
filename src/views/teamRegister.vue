<template>
  <div id="teamRegister">
    <div class="top"><img :src="topImg"></div>
    <div class="team-form"><TeamForm/></div>
    <div class="bottom">
      <NavBottom/>
    </div>
  </div>
</template>

<script>
import NavBottom from '../components/NavBottom'
import TeamForm from '../components/TeamForm'

export default {
  name: 'teamRegister',
  components:{NavBottom,TeamForm},
  data () {
    return {
      msg: '123',
      topImg:require('../assets/img/logo.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#teamRegister{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}
.top{
  text-align: left;
  height: 150px;
  width: 100%;
}
.top img{
  margin-left: 5%;
  width: 50%;
  height: 80%;
}
.team-form{
    width: 40%;
    margin-left: 5%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
}
.bottom{
  width: 100%;
}
</style>