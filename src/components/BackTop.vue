<template>
  <div class="goTop" v-if="scrollToTop" @click="backTop()"><i class="iconfont11 icon-shangjiantou"></i>  
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"BackTop",
    mounted(){
        window.addEventListener('scroll',this.scrollToTop)
    },
    destroyed(){
        window.removeEventListener('scroll',this.scrollToTop)
    },
    methods:{
        backTop(){
            const that = this
            let timer = setInterval(()=>{
                let ispeed = Math.floor(-that.scrollTop/5)
                //documentElement.scrollTop:垂直方向滚动的值,body.scrollTop:网页被卷去的高
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if(that.scrollTop === 0){
                    clearInterval(timer)
                }
            },16)
        },
        scrollToTop(){
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if(that.scrollTop > 60){
                $('.goTop').css('display','block')
            }
            if(that.scrollTop == 0){
                $('.goTop').css('display','none')
            }
        }
    }
}
</script>

<style scoped>
.goTop{
    display: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: fixed;
    bottom: 200px;
    right: 10px;
    opacity: 0.5;
}
</style>