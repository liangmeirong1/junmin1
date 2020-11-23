<template>
  <div id="login">
    <div class="top"><img :src="topImg"></div>
    <div class="login-form">
      <div class="box">
        <div class="box-title">您好！欢迎登录军民融合管理平台</div>
        <LoginForm/>
      </div>
    </div>
    <div class="bottom">
      <NavBottom/>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import NavBottom from '../components/NavBottom'

export default {
  name: 'login',
  components:{LoginForm,NavBottom},
  data () {
    return {
      msg: '登陆页面',
      topImg: require('../assets/img/logo.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
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
.login-form{
  position: relative;
  height: 500px;
  width: 100%;
}
.box{
  background-color: white;
  position: absolute;
  top: 0;
  right: 50px;
  width: 450px;
  height: 380px;
}
.box-title{
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 20%;
  line-height: 50px;
}
.bottom{
  width: 100%;
}
</style>