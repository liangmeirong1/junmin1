<template>
<div id="#RegisterForm" class="form">
    <div class="username">
      <input type="text" name="username" id="username" placeholder="请输入账号" />		
    </div>
    <div class="password">
      <input type="password" name="password" placeholder="请输入密码"/>
    </div>
    <div class="confirm-pasd">
      <input type="password" name="confirm-pasd" placeholder="确认密码"/>
    </div>
    <div class="unit-name">
      <input type="text" name="unit-name" placeholder="请输入单位名称" />
    </div>
    <div class="contact">
      <input type="text" name="contact" id="contact" placeholder="请输入联系人"/>
    </div>
    <div class="phone">
      <input type="text" name="phonr" id="phone" placeholder="请输入手机号码"/>
    </div>
    <div class="picture-captcha">
      <input type="text" name="captcha" id="captcha" placeholder="请输入图片验证码"/>
    </div>
    <button type="button" class="regi-btn" @click="register()">同意并注册</button>
    <div class="agree">
      点击立即注册 ，表示您同意遵守注册流程相关承诺
			</div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
        msg:'123'
      }
  },
  methods:{
    register(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.form{
  margin-top: 10px;
}
.form input[type="text"],input[type="password"]{
  height: 80%;
  border: none;
  outline: none;
  border-left: 1px solid #efefef;
  width: 80%;
}
.username{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.password{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.confirm-pasd{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.unit-name{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.contact{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.phone{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.picture-captcha{
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.regi-btn{
  width: 650px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: skyblue;
  outline: none;
}
.agree{
  border: none;
  font-size: 12px;
}
</style>