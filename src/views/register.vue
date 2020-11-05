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
      topImg:require('../assets/logo.jpg')
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
  margin: 0 auto;
  height: 150px;
  width: 1500px;
}
.top img{
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;

  border: 1px solid #f6f6f6;
  background-color: #f6f6f6;
}
.regi-form{
  margin-top: 20px;
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