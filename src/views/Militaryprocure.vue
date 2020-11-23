<template>
  <div id="demand">
    <div class="left"><left /></div>
    <div class="content">
      <junpinnav @changeNav="handleChangeNav" />
      <content3
        :total="page.total"
        :list="serverList"
        @pageNumChange="handlePageNumChange"
      />
    </div>
  </div>
</template>

<script>
import left from "../components/junpin/left";
import content3 from "../components/junpin/content3";
import junpinnav from "../components/junpin/junpinnav";
import axios from "axios";

export default {
  name: "Militaryprocure",
  components: { left, junpinnav, content3 },
  data() {
    return {
      id:"",
      select2: {
        unit: "",
        type: "",
        code: "",
      },

      page: {
        pageSize: 10,
        pageNum: 1,
        total:200,
      },
      serverList: [
        {
          id: "001",
          title: "FPGA信号预处理开发（二次发布）",
          type: "研究技术类",
          time: "12月30日",
        },
        {
          id: "002",
          title: "便携式接收处理分析设备（二次发布）",
          type: "产品设备类",
          time: "12月30日",
        },
        {
          id: "003",
          title: "10MHz有源功分设备",
          type: "产品设备类",
          time: "12月30日",
        },
        {
          id: "004",
          title: "国产化双通道超短波CPCI下变频卡",
          type: "器件器材类",
          time: "12月30日",
        },
        {
          id: "005",
          title: "双通道X/L下变频器",
          type: "产品设备类",
          time: "12月30日",
        },
        {
          id: "006",
          title: "国产化四通道CPCI卫星下变频卡",
          type: "器件器材类",
          time: "12月30日",
        },
        {
          id: "007",
          title: "某型装备实装发射站训练测传系统",
          type: "系统工程类",
          time: "12月30日",
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getList();
  },
  watch: {
    $route: {
      handler(nv, ov) {
        this.id = this.$route.params.id;
        this.select2= {
        unit: "",
        type: "",
        code: "",
      },
        this.page.pageNum=1,
        this.getList();
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    getList() {
      alert( this.id+this.page.pageNum+this.select2.unit+this.select2.type+this.select2.code)
      axios.get("/api/getData", {
          params: {
            id: this.id,
            unit: this.select2.unit,
            type: this.select2.type,
            code: this.select2.code,
            pageNum: this.page.pageNum,
            pageSize: this.page.pageSize,
          },
        }).then((res) => {
          if (res) {
            this.serverList = res.data.list;
            this.page.total = res.data.total;
          } else {
            console.log("没有数据");
          }
        });
    },
    // 查询选项改变，重置页码
    handleChangeNav( params) {
      this.select2 =params;
      this.page.pageNum=1,
      this.getList();
    },

    // 页码改变
    handlePageNumChange(val) {
      this.page.pageNum = val;
      this.getList();
    },
  },
};
</script>
<style scoped>
#demand {
  width: 80%;
  position: relative;
  left: 10%;
  /*  border: 1px solid rgb(235, 235, 235); */
  display: flex;
  overflow: hidden;
  margin-top: 10px;
}
.left {
  width: 21%;
}
.content {
  border: 1px solid rgb(216, 216, 216);
  flex: 1;
  margin-left: 15px;
}
</style>