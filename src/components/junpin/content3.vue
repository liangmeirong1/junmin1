
<template>
  <div class="content1">
    <ul class="good-list">
      <li v-for="item of list" :key="item.id" @click="handel(item.id)">
        <div class="left con">
          <div class="name">
            <span class="iconfont5 icon-fasong"></span>{{ item.title }}
          </div>
          <div class="appNum">{{ item.type }}</div>
        </div>
        <div class="right">{{ item.time }}</div>
      </li>
    </ul>
    <div class="pagination1">
      <el-pagination background 
      layout="prev, pager, next,total" 
      @current-change="handlePageNumChange"
      :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "content3",
  components: {},
   props:{list:Array,total:Number},//接收父组件传过来的属性内容
   
  methods: {
     handel(id) {//列表项的id
      this.$router.push({
        name: "junpindetails",
        params: { id },
      });
      
    },
    handlePageNumChange(val) {
      this.$emit("pageNumChange", val);
    },
  },
  data() {
    return {
    
    };
  },
};
</script>
<style  scoped>
*{
  padding: 0;
  margin: 0;
}
.content1 {
  width: 100%;
}

.good-list li {
  display: flex;
  padding: 10px;
  border-bottom: 1px dotted rgb(199, 199, 199);
  color: rgb(145, 143, 143);
  font-size: 14px;
  height: 70px;
 cursor: pointer!important;
}
.con {
  flex: 1;
}
.left {
  text-align: left;
  margin-left: 10px;
  padding: 10px 0 0 0;
}
.name {
  color: black;
  font-size: 16px;
}
.appNum{
  margin-top: 8px;
}
.tag {
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 13px;
  margin-left: 10px;
  color: #e62e2e;
  background: #fceaea;
}
.iconfont5 {
  font-size: 17px;
  color: #323b50;
}
.pagination1 {
  height: 70px;
  float: right;
  padding-top: 25px;

  align-content: right;
}

.pagination1
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #323b50;
  color: #fff;
}
.pagination1 >>> .el-pagination.is-background .el-pager li:hover {
  color: #000000;
}

</style>