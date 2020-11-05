<template>
  <div id="newinfo">
    <top/>
    <router-view/>
  </div>
</template>

<script>
import top from '../components/top'

export default {
  name: "newinfo",
  components:{top},
  data () {
      return{
          msg:'1'
      }
  }
}
</script>