<template>
  <div id="LoginForm">
      <div class="username">
				<span class="iconfont icon-denglu-yonghu"></span><input type="text" v-model="UserInfo.username" id="username" placeholder="手机/已注册邮箱" />
			</div>
			<div class="password">
				<span class="iconfont8 icon-mima"></span><input type="password" v-model="UserInfo.password" id="password" placeholder="密码"/>
			</div>
			<div class="captchar">
				<input type="text" v-model="captchar" id="captchar" placeholder="验证码"/>
        <div class="code" @click="refreshCode()">
        <SIdentify :identifyCode="identifyCode" @click="Refresh()"></SIdentify>        
			  </div>
			</div>
      <div class="choose">
          <div class="remember">
            <input type="checkbox" name="记住密码" id="">记住密码
          </div>
          <div class="forget"><router-link to="/register">立即注册</router-link></div>
      </div>
			<button type="button" class="login-btn" @click="login()">登录</button>
  </div>
</template>

<script>
import SIdentify from './identify'

export default {
  name: 'LoginForm',
  components:{SIdentify},
  data () {
    return {
      identifyCodes: "1234567890abcdefghijklmnopqrstxuywz",
      identifyCode: "",
      UserInfo:{
        username:"",
        password:""
      },
      captchar:""
    }
  },
  mounted(){
    this.identifyCode = "",
    this.makeCode(this.identifyCode,4)
  }, 
  methods:{
    login(){
      //登录格式验证
      if(this.UserInfo.username == ''){
        alert('账号不能为空')
        return false
      }
      var reg = /^1\d{10}$/
      var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
      if(!reg.test(this.UserInfo.username)&&!reg1.test(this.UserInfo.username)){
        alert('请输入正确的手机或邮箱格式')
        return false
      }      
      if(this.UserInfo.password.length<8){
        alert('密码不能少于8位数')
        return false
      }
      if((this.captchar == this.identifyCode)){
        this.$router.replace('/')
      }else{
        alert("验证码错误")
        console.log(this.identifyCode)
        console.log(this.captchar)
      }
    },
    //验证码
    randomNum(min,max){
      return Math.floor(Math.random()*(max-min)+min)
    },
    refreshCode(){
      this.identifyCode="",
      this.makeCode(this.identifyCode,4)
    },
    makeCode(o,l){
      for(let i=0;i<l;i++){
        this.identifyCode += this.identifyCodes[
          this.randomNum(0,this.identifyCodes.length)
        ];
      }
    }    
  }
}
</script>

<style scoped>
.username{
    margin: 20px auto;
    width: 350px;
    height: 40px;
    border: 1px solid rgb(228, 226, 226);
    background-color: white;
}
.username>input[type="text"]{
  height: 90%;
  border: none;
  outline: none;
  border-left: 1px solid #efefef;
  width: 90%;
}
.password{
    margin: 20px auto;
    width: 350px;
    height: 40px;
    border: 1px solid rgb(228, 226, 226);
    background-color: white;
}
.password>input[type="password"]{
  height: 95%;
  border: none;
  outline: none;
  border-left: 1px solid #efefef;
  width: 90%;
}
.captchar{
    margin: 20px auto;
    width: 350px;
    height: 40px;
    border: 1px solid rgb(228, 226, 226);
    background-color: white;
}
.captchar>input[type="text"]{
  height: 90%;
  border: none;
  outline: none;
  width: 70%;
}
.choose{
    position: relative;
    width: 350px;
    margin: 10px auto;
    height: 20px;
}
.code{
  width: 100px;
  height: 100%;
  float: right;
}
.remember{
    position: absolute;
    left: 0;
}
.forget{
    position: absolute;
    right: 0;
}
.login-btn{
    margin: 0 auto;
    width: 350px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: skyblue;
}
</style>