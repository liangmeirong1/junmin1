<template>
    <div class="page-bar">
        <ul>
        <li class="first">
           <span>共条记录 第  页</span>
        </li>
        <li v-if="cur>=1" class="prev">
           <a v-on:click="cur--,pageClick()"><i class="iconfont13 icon-zuojiantou"></i></a>
        </li>
        <li  class="li_a" v-for="index in indexs" v-bind:class="{ 'active': cur == index}" :key="index">
           <a v-on:click="btnClick(index)">{{ index }}</a>
        </li>
        <li  v-if="cur!=all">
           <a v-on:click="cur++,pageClick()"><i class="iconfont13 icon-iconfontjiantou5"></i></a>
        </li>
        <li class="last_li">
           <span>共<i>{{all}}</i>页</span>
        </li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:'pageChange',
    props : ["dataAll","dataCur","datanum","dataDatanum"],
   data() {
       return {
           datalist:'123',
           all: this.dataAll, //总页数
           cur:  this.dataCur ,//当前页码
           num: this.datanum , //一页显示的数量  奇数
           dataNum: this.dataDatanum,//数据的数量
           
       }

   },
    watch: {
       cur: function(oldValue, newValue) {
       //父组件通过change方法来接受当前的页码
           this.$emit('change', oldValue)
          //这里是直接点击执行函数
       }
   },
   methods: {
       btnClick: function(data) { //页码点击事件
           if(data != this.cur) {
               this.cur = data
           }
       },
       pageClick: function() {
           //console.log('现在在' + this.cur + '页');
            //父组件通过change方法来接受当前的页码
             //这里是点击下一页执行函数
           this.$emit('change',  this.cur)
       }
   },
   computed: {
       indexs: function() {
           var left = 1;
           var right = this.all;
           var ar = [];
           if(this.all >= this.num ) {
               if(this.cur > 3 && this.cur < this.all - 2) {
                   left = this.cur -  (this.num-1)/2
                   right = this.cur +  (this.num-1)/2
               } else {
                   if(this.cur <= 3) {
                       left = 1
                       right =  this.num
                   } else {
                       right = this.all
                       left = this.all - (this.num - 1);
                   }
               }
           }
           while(left <= right) {
               ar.push(left)
               left++
           }
           return ar
       }

   }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.page-bar {
   text-align: center;
   width: 100%;
   height: 36px;
   margin: 0 auto;
   position: relative;
   margin-top: 10px;
 }

 .page-bar ul {
   min-width: 700px;
   display: block;
   overflow: hidden;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   }

.page-bar li {
   display: block;
   width: 36px;
   height: 36px;
   border-radius: 4px;
   list-style: none;
   overflow: hidden;
   position: relative;
   float: left;
   margin-left: 8px;
}
.page-bar .first{
   display: block;
   width: 170px;
   height: 36px;
   font-size: 14px;
   line-height: 36px;
   text-align: center;
   background-color: white;
}
.page-bar .last_li{
   width: 85px;
   height: 36px;
   background-color: white;
}
.page-bar .last_li span{
    width: 100%;
   height: 100%;
   line-height: 36px;
   text-align: center;
   float: left;
}
.page-bar li:first-child {
   margin-left: 0px
}

.page-bar a {
   width: 34px;
   height: 34px;
   background-color: white;
   text-decoration: none;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   /*margin-left: -1px;*/
   line-height:  34px;
   color: #333;
   cursor: pointer
}

.page-bar .li_a a:hover {
   background-color: #eee;
   color: #40A9FF;
}

.page-bar .banclick {
   cursor: not-allowed;
}

.page-bar .active a {
   color: #fff;
   cursor: default;
   background-color: #1890FF;
}
.page-bar i {
   font-style: normal;
   color: #d44950;
   margin: 0px 4px;
   font-size: 14px;
}
</style>