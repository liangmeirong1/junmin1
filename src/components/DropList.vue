<template>
    <div class="select1">类型:
      <!--<div class="search-type" @click="selectType()">搜索类型:{{selected}}</div>-->
      <select id="sel" v-model="selected" @change="set">
        <option v-bind:value="item.value" v-for="(item,index) in options" :key="index">{{item.text}}</option>
      </select>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            selected:'',
            options:[{text:'技术',value:'tech'},{text:'设备',value:'equip'},{text:'团队',value:'team'},{text:'单位',value:'unit'}]
        }
    },
    methods:{
        set: function(){
            this.$emit('trans',this.selected)
        }
    }
}
</script>

<style scoped>
*{
    text-decoration: none;
    outline: none;
}
.select1{
    line-height: 20px;
    height: 100%;
    width: 100px;
    font-size: 14px;
    background-color: rgb(247, 247, 247);
    border: 1px solid skyblue;
}
.select1 select{
    height: 100%;
    width: 60%;
    background: transparent;
    border: none;
    padding-left: 10px;
}
</style>
