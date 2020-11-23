<template>
  <div id="home">
    <top/>
    <central/>
    <needs/>
    <productShow/>
    <ProductArea/>
    <TeamShow/>
    <FriLink/>
    <NavBottom/>
    <BackTop/>
    <Info/>
  </div>
</template>

<script>
import $ from 'jquery'
import top from '../components/top'
import central from '../components/central'
import needs from '../components/needs'
import productShow from '../components/productShow'
import FriLink from '../components/FriLink'
import NavBottom from '../components/NavBottom'
import ProductArea from '../components/ProductArea'
import TeamShow from '../components/TeamShow'
import BackTop from '../components/BackTop'
import Info from '../components/Info'

export default {
  name: 'home',
  components:{top,central,needs,productShow,FriLink,NavBottom,ProductArea,TeamShow,BackTop,Info},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted(){
/*     window.addEventListener("scroll",this.scrollHandle,true) */
  },
  methods:{
/*     scrollHandle(){
      let top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset)
      console.log(top)
    } */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  padding: 0;
	margin: 0;
	list-style: none;
  width: 100%;
}
</style>