<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app{
  font-family:Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f6f6;
  padding: 0;
  margin: 0;
/*   background-image: url('./assets/img/微信图片_20201110191532.jpg'); */
  background-size: 100% auto;
  background-image: linear-gradient(to top, #ABDCFFEE,#ABDCFF10);
  background-repeat: no-repeat;
}
link:hover{
  color: orange;
}
</style>
