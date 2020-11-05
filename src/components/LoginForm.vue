<template>
  <div id="LoginForm">
      <div class="username">
				<input type="text" name="username" id="username" placeholder="用户/手机/已注册邮箱" />
			</div>
			<div class="password">
				<input type="password" name="password" id="password" placeholder="密码"/>
			</div>
			<div class="captchar">
				<input type="text" name="captchar" id="captchar" placeholder="验证码"/>
			</div>
            <div class="choose">
                <div class="remember">
                  <input type="checkbox" name="记住密码" id="">记住密码
                </div>
                <div class="forget">忘记密码 | 立即注册</div>
            </div>
			<button type="button" class="login-btn" @click="login()">登录</button>
  </div>
</template>

<script>


export default {
  name: 'LoginForm',
  data () {
    return {
      msg: '登陆页面'
    }
  },
  methods:{
    login(){
      this.$router.replace('/home')
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
.password{
    margin: 20px auto;
    width: 350px;
    height: 40px;
    border: 1px solid rgb(228, 226, 226);
    background-color: white;
}
.captchar{
    margin: 20px auto;
    width: 350px;
    height: 40px;
    border: 1px solid rgb(228, 226, 226);
    background-color: white;
}
#LoginForm input[type="text"],input[type="password"]{
  height: 90%;
  border: none;
  outline: none;
  border-left: 1px solid #efefef;
  width: 80%;
}
.choose{
    position: relative;
    width: 350px;
    margin: 10px auto;
    height: 20px;
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