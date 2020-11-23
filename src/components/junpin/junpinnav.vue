
<template>
  <div class="nav1">
    <label class="type">需求类型：</label>
    <select class="form-control" v-model="select1.type" name="demandType" id="demandType" style="width: 100px">
      <option value="">--请选择--</option>
      <option value="研究技术类">研究技术类</option>
      <option value="系统工程类">系统工程类</option>
      <option value="产品设备类">产品设备类</option>
      <option value="器件器材类">器件器材类</option>
      <option value="基础材料类">基础材料类</option>
      <option value="其他配套类">其他配套类</option>
    </select>
    <label class="unit">发布单位：</label>
    <select
    v-model="select1.unit"
      class="form-control"
      name="publicUnit"
      id="publicUnit"
      style="width: 120px"
    >
      <option value="">--请选择发布单位--</option>
      <option value="1148502127140667393">军委机关</option>
      <option value="1148502287463743490">陆军</option>
      <option value="1148502568003960834">海军</option>
      <option value="1148502711625318401">空军</option>
      <option value="1148502885865095169">火箭军</option>
      <option value="1148503120469295105">战略支援部队</option>
      <option value="1148503344302522369">联勤保障部队</option>
      <option value="1148503496308293633">军事科学院</option>
      <option value="1148503673802850305">国防大学</option>
      <option value="1148503813745803266">国防科技大学</option>
      <option value="1148503988568588289">武警部队</option>
      <option value="1148504110346010626">东部战区</option>
      <option value="1148504294723420162">西部战区</option>
      <option value="1148504414969921538">南部战区</option>
      <option value="1148504526701985794">北部战区</option>
      <option value="1148504739994927105">中部战区</option>
      <option value="1202850254418894850">总装备部</option>
      <option value="1166604789917253634">其他</option>
    </select>
      <label class="number">统一编码：</label>
      <input
        type="text"
        class="inputStyle"
        name="serialNumber"
        v-model="select1.code"
        placeholder="请输入统一信息编码"
        style="width:100px"
      />
      <div class="button1"> <el-button type="info" size="small" @click="handle">查询</el-button></div>
      
   
  </div>
</template>

<script>
export default {
  name: "junpinnav",
  components: {},
  data() {
    return {
      select1:{ type:"",
      unit:"",
      code:""},
     
      styleObject: {
        color: "white",
        background: "#909399",
      },
    };
  },
  watch: {
    $route: {
      handler(nv, ov) {
        this.select1={ type:"",
      unit:"",
      code:""}
      },
      // 深度观察监听
      deep: true,
    },
  },
 
  methods: {
    handle() {
      this.styleObject = null;
      
      this.$emit("changeNav", this.select1);//双向绑定选择项，值传给父组件，通过触发事件
    },
  },
};
</script>
<style scoped>
.nav1 {
  height: 60px;
  width: 100%;
  background: rgb(235, 235, 235);
  display: flex;
  border-bottom: 3px solid #323b50;
  align-items: center;

}

.type,
.unit,.number {
  padding: 0 0 0 15px;
  width: 80px;
  flex-shrink: 0;
}
.form-control{
  height: 30px;
  width: 100px;
}
.inputStyle{
 height: 25px;
  width: 80px; 
}
.button1{
  padding-left: 20px;
}


</style>