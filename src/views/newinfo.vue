<template>
  <div id="newinfo">
    <top/>
    <router-view/>
    <NavBottom/>
    <BackTop/>
  </div>
</template>

<script>
import top from '../components/top'
import NavBottom from '../components/NavBottom'
import BackTop from '../components/BackTop'

export default {
  name: "newinfo",
  components:{top,NavBottom,BackTop},
  data () {
      return{
          msg:'1'
      }
  }
}
</script>