<template>
    <div id="info-fix">
      <h3>联系我们</h3>
      <p>邮箱：</p>
    </div>
</template>

<script>
export default {
    mounted(){
        window.addEventListener('scroll',this.scrollInfo)
    },
    destroyed(){
        window.removeEventListener('scroll',this.scrollInfo)
    },
    methods:{
        scrollInfo(){
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if(that.scrollTop > 60){
                $('#info-fix').css('display','none')
            }else{
                $('#info-fix').css('display','block')
            }
        }
    }
}
</script>

<style scoped>
#info-fix{
    position: fixed;
    top: 30%;
    right: 0;
    width: 130px;
    height: 150px;
    border-radius: 10px;
    background-color: rgb(166, 209, 205);
}
#info-fix p{
    padding-left: 10px;
    text-align: left;
}
</style>