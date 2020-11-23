<template>
  <div id="send">
    <div class="top"><img :src="topImg"></div>
    <div class="main">
      <div class="regi-form">
        <send/>
      </div>
    </div>
    <div class="bottom">
      <NavBottom/>
    </div>
  </div>
</template>

<script>

import NavBottom from '../components/NavBottom'
import send from '../components/gxu/send'

export default {
  name: 'sendneed',
  components:{NavBottom, send},
  data () {
    return {
      
      topImg:require('../assets/img/logo.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#send{
  box-sizing: border-box;
	padding:0;
	margin: 0;
	list-style: none;
  width: 100%;
}
.top{
  padding: 30px 0;
  margin:0 auto;
  height: 100px;
  width: 100%;
}
.top img{
 
margin:0 auto;
  width: 40%;
  height: 80%;
}
.main{
  width: 100%;
}
.regi-form{
 margin: 0 auto;
  width: 700px;
  background-color: white;
  border: 1px solid white;
}
.bottom{
  width: 100%;
}
</style>