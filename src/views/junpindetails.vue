<template>
  <div id="demand">
    <div class="left"><left /></div>

    <div class="content">
     <details3></details3>
     
    </div>
 
  
  </div>
</template>

<script>
import left from "../components/junpin/left";
 import details3 from "../components/junpin/details3" 

export default {
  name: "junpindetails",
  components: {left,details3},
  data() {
    return {
     
    };
  },
mounted() {
    this.id = this.$route.params.id
    this.getList()
  },
  
  methods: {
    getList () {
    alert(this.id)
      axios.get('/api/getData', {
        params: {
          id: this.id,
          
        }
      }).then(res => {
        if (res) {
          this.serverList = res.data.list
        } else {
          console.log('没有数据')
        }
      })
    },}
};
</script>
<style scoped>
#demand {
  width: 80%;
  position: relative;
  left: 10%;
  border: 1px solid rgb(235, 235, 235);
  display: flex;
  overflow: hidden;
  margin-top: 10px;
  
}
.left {
  width: 21%;
}
.content {
  border: 1px solid rgb(235, 235, 235);
  flex: 1;
  margin-left: 15px;
    background: rgb(255, 255, 255);
  
}
</style>



