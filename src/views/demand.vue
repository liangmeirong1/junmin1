<template>

  <div id="demand">
    <div class="left"><StraightTab /></div>

    <div class="content">
     <demandnav  @changeNav="handleChangeNav"/>
     <content1 :list="serverList"
     :total="page.total"
      @pageNumChange="handlePageNumChange"/>

    </div>
 
  </div>
 
    
</template>

<script>
import StraightTab from "../components/gxu/StraightTab";
 import content1 from "../components/gxu/content1"
  import demandnav from "../components/gxu/demandnav"
import axios from 'axios'

export default {
  name: "demand",
  components: { StraightTab,demandnav,content1},
  data() {
    return {
      id: null,
      field: 'all',
      page: {
      pageSize: 10,
      pageNum: 1,
      total:800
      },
      serverList: [
        {
          id: "001",
          title: "大扩展比方舱移动医院系统集成技术",
          detail: "当前电商行业及产品终端分销的纸箱在托盘上码垛作业时",
          time: "12月30日",
        },
        {
          id: "002",
          title: "大扩展比方舱移动医院系统集成技术",
           detail: "当前电商行业及产品终端分销的纸箱在托盘上码垛作业时，同一订单纸箱规格大小",
          time: "12月30日",
        },
        {
          id: "003",
          title: "大扩展比方舱移动医院系统集成技术",
          detail: "当前电商行业及产品终端分",
          time: "12月30日",
        },
        {
          id: "004",
          title: "大扩展比方舱移动医院系统集成技术",
           detail: "当前电商行业及产品终端分销的纸箱在托盘上码垛作业时，同一订单纸箱规格大小端分销的纸箱在托盘上码垛作业时",
          time: "12月30日",
        },
        {
          id: "005",
          title: "大扩展比方舱移动医院系统集成技术",
          detail: "当前电商行业及产品终端分销的纸箱在托盘上码垛作业时，同一",
          time: "12月30日",
        },
        {
          id: "006",
          title: "大扩展比方舱移动医院系统集成技术",
           detail: "当前电商行业及产品终端分销的纸箱在",
          time: "12月30日",
        },
        {
          id: "007",
          title: "大扩展比方舱移动医院系统集成技术",
          detail: "当前电商行业及产品终端分销的纸箱在托盘上码垛作业时，同一订单纸箱规格大小",
          time: "12月30日",
        },
      ],
    };
  },
  mounted() {
    this.id = this.$route.params.id
    
    this.getList()
  },
   watch: {
    $route: {
      handler() {
        
        this.id = this.$route.params.id;//侦听路由变化
        this.page.pageNum=1;//路由改变了，重置
        this.field="all"
        this.getList();
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    getList() {
      alert(this.id+this.field+this.page.pageNum)
      axios
        .get("/api/getData", {
          params: {
            id: this.id,
            field: this.field,
            pageSize: this.page.pageSize,
            pageNum: this.page.pageNum,
          },
        })
        .then((res) => {
          if (res) {
            this.serverList = res.data.list;
            this.page.total = res.data.total;
          } else {
            console.log("没有数据");
          }
        });
    },
    // 服务领域改变
    handleChangeNav(params) {
      this.field = params;
     /*  alert( this.field); */
      this.page.pageNum=1;
      this.getList();
    },

    // 页码改变
    handlePageNumChange(val) {

      this.page.pageNum = val;
      /*  alert( this.field+this.page.pageNum); */
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
  border: 1px solid rgb(235, 235, 235);
  flex: 1;
  margin-left: 15px;
  
}
</style>