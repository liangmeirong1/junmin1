<template>
  <div id="#RegisterForm" class="form">
    <div class="username">
      <span class="iconfont icon-denglu-yonghu"></span
      ><input
        type="text"
        v-model="UserInfo.username"
        id="username"
        placeholder="请输入手机/邮箱"
      />
    </div>
    <div class="password">
      <span class="iconfont8 icon-mima"></span
      ><input type="password" v-model="psd" placeholder="请输入密码" />
    </div>
    <div class="confirm-pasd">
      <span class="iconfont8 icon-mima"></span
      ><input type="password" v-model="confirm" placeholder="确认密码" />
    </div>
    <div class="unit-name">
      <span class="iconfont8 icon-danwei"></span
      ><input
        type="text"
        v-model="UserInfo.unitname"
        placeholder="请输入单位名称"
      />
    </div>
    <div class="contact">
      <span class="iconfont8 icon-lianxiren"></span
      ><input
        type="text"
        v-model="UserInfo.contact"
        id="contact"
        placeholder="请输入联系人"
      />
    </div>
    <div class="phone">
      <span class="iconfont8 icon-shoujihaoma"></span
      ><input
        type="text"
        v-model="UserInfo.phone"
        id="phone"
        placeholder="请输入手机号码"
      />
    </div>
    <div class="picture-captcha">
      <input
        type="text"
        v-model="captcha"
        id="captcha"
        placeholder="请输入图片验证码"
      />
      <div class="code" @click="refreshCode()">
        <SIdentify :identifyCode="identifyCode" @click="Refresh()"></SIdentify>
      </div>
    </div>
    <button type="button" class="regi-btn" @click="register()">
      同意并注册
    </button>
    <div class="agree">点击立即注册 ，表示您同意遵守注册流程相关承诺</div>
  </div>
</template>

<script>
import qs from "qs";
import SIdentify from "./identify";
import cryptoJSObj, { encrypt } from "../API/jm.js";

export default {
  name: "RegisterForm",
  components: { SIdentify },
  data() {
    return {
      identifyCodes: "1234567890abcdefghijklmnopqstxuywz",
      identifyCode: "",
      UserInfo: {
        username: "",
        password: "",
        unitname: "",
        contact: "",
        phone: "",
      },
      captcha: "",
      psd: "",
      confirm: "",
    };
  },
  mounted() {
    (this.identifyCode = ""), this.makeCode(this.identifyCode, 4);
  },
  methods: {
    register() {
      //验证格式
      if (!this.UserInfo.username) {
        alert("账号不能为空");
        return false;
      }
      if (this.psd.length < 8) {
        alert("密码不能少于8位数");
        return false;
      }
      var reg = /^1\d{10}$/;
      var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (
        !reg.test(this.UserInfo.username) &&
        !reg1.test(this.UserInfo.username)
      ) {
        alert("请输入正确的手机或邮箱格式");
        return false;
      }
      if (this.UserInfo.unitname == "") {
        alert("单位不能为空");
        return false;
      }
      if (this.UserInfo.contact == "") {
        alert("联系人不能为空");
        return false;
      }
      if (!reg.test(this.UserInfo.phone)) {
        alert("请输入正确的手机号码");
        return false;
      }
      if (this.captcha == this.identifyCode && this.psd == this.confirm) {
        this.$router.replace("/login");
        //加密密码
        this.UserInfo.password = encrypt(this.psd);
        qs.stringify(this.UserInfo);
      } else {
        alert("验证码错误");
        console.log(this.identifyCode);
        console.log(this.captcha);
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      (this.identifyCode = ""), this.makeCode(this.identifyCode, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 10px;
}
.form input[type="text"],
input[type="password"] {
  height: 95%;
  border: none;
  outline: none;
  border-left: 1px solid #efefef;
  width: 95%;
}

.username {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.password {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.confirm-pasd {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.unit-name {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.contact {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.phone {
  border-radius: 10px;
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.picture-captcha {
  margin: 30px auto;
  width: 650px;
  height: 40px;
  border: 1px solid rgb(228, 226, 226);
}
.picture-captcha > input[type="text"] {
  width: 80%;
  border: none;
}
.code {
  width: 100px;
  height: 100%;
  float: right;
}
.regi-btn {
  width: 650px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: skyblue;
  outline: none;
}
.agree {
  border: none;
  font-size: 12px;
}
</style>