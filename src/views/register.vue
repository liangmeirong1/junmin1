<template>
  <div id="register">
    <div class="top"><img :src="topImg"></div>
    <div class="main">
      <div class="regi-form">
        <RegisterForm/>
      </div>
    </div>
    <div class="bottom">
      <NavBottom/>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
import NavBottom from '../components/NavBottom'

export default {
  name: 'register',
  components:{RegisterForm,NavBottom},
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
#register{
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
  margin-top: 20px;
  margin-left: 5%;
  width: 50%;
  height: 70%;
}
.main{
  width: 100%;
}
.regi-form{
  margin-left: 80px;
  width: 700px;
  height: 700px;
  background-color: white;
  border: 1px solid white;
}
.bottom{
  width: 100%;
}
</style>