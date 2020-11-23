<template>
  <div class="content1">
    <div class="title">{{ list.title }}</div>
    <div class="detail1">
      <span>发布单位：{{ list.unit }}</span>
      <span>发布时间：{{ list.pubtime }}</span>
      <span>截止时间：{{ list.endtime }}</span>
    </div>
    <div class="code">统一信息编码：{{ list.code }}</div>
    <div class="items">
      <span>采购阶段：{{ list.stage }}</span
      ><span>需求分类：{{ list.type }}</span
      ><span>专业领域：{{ list.area }}</span>
    </div>
    <div>
      <div class="contitle"><i class="el-icon-s-grid"></i>主要内容</div>
      <div class="cont" v-html="list.content"></div>
    </div>
    <div>
      <div class="contitle"><i class="el-icon-s-grid"></i>资格条件</div>
      <div class="cont" v-html="list.condition"></div>
    </div>
    <div>
      <div class="contitle"><i class="el-icon-s-grid"></i>附件</div>
      <div class="cont"><a href="../assets/file/123.docx" download="../assets/file/123.docx">下载文件</a></div>
    </div>
  </div>
</template>

<script>
/* import top from '../components/top' */

export default {
  name: "junpindetails",
  components: {},
  data() {
    return {
      list: {
        title: "FPGA信号预处理开发（二次发布）",
        unit: "贵州航天乌江机处理有限公司",
        pubtime: "2020-11-13",
        endtime: "2020-11-19",
        code: "HQJDXQ20201117002",
        type: "产品设备类",
        area: "先进材料与制造,可靠性/测试性/维修",
        stage: "采购",
        content:
          " 1. 功能用途：<br />主要用于洗消化学毒剂、生物战剂与高毒剧毒工业化学品。<br />2. 主要指标：<br />洗消种类：化学毒剂、生物战剂和高毒剧毒工业化学品。<br />表面洗消能力：对三类污染对象表面洗消效果为：<br /> ①对化学毒剂：室温下消毒10分钟后，可将受染表面沾染的化学毒剂液滴移除至允许标准以下；<br /> ② 对典型生物战剂：对模拟剂室温下反应10分钟，杀灭率≥99.9%<br />③对典型高毒剧毒工业化学品：室温下消毒10分钟后，对各类危险化学品的表面消毒率≥98%。<br />喷射器洗消面积：大于等于2㎡。<br />喷射性能：能以雾状和柱状两种形式分散；喷射距离≥1米；喷射压力≥0.3兆帕；喷射流量≥0.75升/分钟（室温）。<br />环境适应性：工作温度：-10℃—50℃；贮存温度-40℃—60℃；适用海拔≤5000米；湿热、振动、冲击、浸渍及盐雾满足有关国军标要求。<br />勤务性：单人操作，即取即用，洗消罐方便更换。<br />3.可选择线上对接或将机构简介和产品资料（包括产品图片、功能用途和技术指标等）发至邮箱wjzbbxmzxtyzbsgc@sina.com。<br />",
        condition:
          "   1.须通过GB/T19001质量管理体系或武器装备质量管理体系或同等效力的相关质量管理体系认证；<br /> 2.须列入《中国人民解放军装备承制单位名录》，具备军队装备承制资格或已通过军队装备承制单位资格审查，承制范围需涵盖洗消剂类别；<br />3.允许联合体响应，洗消剂为研制主体，其承研单位作为研制总师单位；喷射器为机具配套，其承研单位由研制总师单位确定<br />4．不受理进口产品和代理商响应。",
      },
    };
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.content1 {
  width: 95%;
  margin: 25px auto;
  font-size: 14px;
}

.detail1 {
  background: rgb(233, 233, 233);
  margin-top: 15px;
  padding: 25px 25px;
  display: flex;

  justify-content: space-between;
}

.detail1 span {
  flex-shrink: 0;
}

.code {
  color: red;
  padding: 20px 0;
  text-align: left;
  font-size: 14px;
}
.title {
  text-align: center;
  font-size: 20px;
}

.items {
  border: 2px dotted rgb(189, 189, 189);
  padding: 25px;
  display: flex;
  justify-content: space-between;
}
.contitle {
  text-align: left;
  padding: 15px 0;
  font-weight: bolder;
}
.contitle i {
  color: red;
  padding-right: 5px;
}

.cont {
  text-align: left;
  line-height: 30px;
}
</style>