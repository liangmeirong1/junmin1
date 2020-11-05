
<template>
  <div class="content1">
    <div class="top">
      <div class="title">多箱型自动码垛机</div>
      <div class="liji">立即对接</div>
    </div>
    <div class="table">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </div>
  
</template>

<script>
/* import top from '../components/top' */

export default {
  name: "details1",
  components: {},
  data() {
    return {
      name: "user",
      params: { userId },
    };
  },
};
</script>
<style scoped>
.content1 {
  width: 95%;
/*   border: 1px solid red; */
  margin: 30px auto;
  font-size: 16px;
}
.top {
  display: flex;
  border: 1px solid rgb(112, 109, 109);
}
.title {
  flex: 1;
  text-align: left;
  font-size: 20px;
}
.liji {
  width: 100px;
  line-height: 36px;
  color: rgb(255, 255, 255);
  background: #747679;
  text-align: center;
  border-radius: 18px;
}
.table {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
    border: 0.5px solid black;
  
}
.table div {
  width: 25%;
  height: 40px;
  border: 0.5px solid black;
  box-sizing: border-box;
 
}
</style>