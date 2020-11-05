<template>
  <div id="central">
    <div id="cen">
	    <div class="banner">
            <Banner/>
	    </div>
		<div class="tabs">
			<tabs/>
		</div>
	</div>
  </div>
</template>

<script>
import Banner from './Banner'
import tabs from './tabs'

export default {
  name: 'central',
  components:{Banner,tabs},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cen{
	position: relative;
	width: 80%;
	height: 350px;
	left: 10%;
}
.banner{
	float: left;
	width: 50%;
	height: 100%;
}
.tabs{
	overflow: hidden;
	float: left;
	width: 50%;
	height: 100%;
}
</style>