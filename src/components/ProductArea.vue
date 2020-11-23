<template>
  <div id="ProductArea">
    <div class="area-head"><span class="iconfont3 icon-biaotizhishi"></span>产业园区<router-link to="/" class="more">更多++</router-link></div>
    <div class="area-box">
      <div class="area-name">
        <ul id="name-list">
          <li v-for="item in info" :key="item.index" @mouseleave="changeColor()" @mouseenter="changeInfo()">{{item.name}}</li>
        </ul>
      </div>
      <div class="area-img">
        <ul id="img-list">
          <li v-for="item in info" :key="item.index">
            <img :src="item.img">
          </li>
        </ul>
      </div>
      <div class="area-info">
       <div class="info-icon"><span class="iconfont4 icon-xiangqing">详情</span></div>
       <ul id="detail-list">
        <li v-for="item in info" :key="item.index">{{item.detail}}</li>
       </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'ProductArea',
  data () {
    return {
      msg: '产业园区',
      info: [{name:'湖南株洲',img:require('../assets/img/p1.jpg'),detail:'一、基地建设发展情况株洲航空城，是以航空产业JMJH型为特点的示范基地。先后荣获“国家高技术产业基地”、全国唯一的“中小型航空发动机特色产业基地”，2010年12月，被工业和信息化部批准认定为第二批国家新型工业化产业示范基地。目前基地已建成核心区3.5平方公里，共有企业61家，其中规模以上企业44家、航空类企业18家，在航空、电子、机械传动、电动汽车及零部件等领域在全国占有重要地位。2013年基地实现工业总产值457.9亿元，同比增长17.71%；工业增加值164亿元，同比增长16.31%；销售收入456.7亿元，同比增长16.09%。二、主导产业发展情况株洲在中小航空发动机、燃气轮机、航空机械传动等领域已处于国内领先地位，是全国集航空发动机设计研发、制造于一体的中小型航空产业体系最完整的地区。中小型航空发动机是典型的JMGY技术，基地建立以来，依托中小型航空发动机的研发和制造技术优势，积极向MY产业及通用航空产业领域拓展。南方宇航民品产业园项目、中航湖南通用航空发动机有限公司项目、山河智能通用航空产业项目等又先后竣工投产，罗特威直升机有限公司、山河三角鹰发动机开发主体湖南山河航空动力机械股份有限公司成功落户，中航工业与加拿大普惠合作的加普惠亚太地区发动机维修公司和中航工业与世界最大的涡轴发动机制造商法国透博梅卡公司合作的发动机维修公司也即将入驻。'},
             {name:'湖南湘潭经济技术',img:require('../assets/img/p2.jpg'),detail:'一、基地建设总体情况湘潭雨湖区基地主体园区为湘潭经济技术开发区，湘潭经济技术开发区始建于2003年底，是长株潭城市群国家资源节约型、环境友好型社会建设综合配套改革试验区的示范区2011年9月获批为国家级经济技术开发区，2013年成为全省第四个“千亿园区”，2013年，湘潭综合保税区获批；2015年，湘潭经开区获评环球总评榜“中国最具投资吸引力园区和最具发展潜力园区”；2016年，湘潭经开区成为湖南省唯一的园区系统性改革试点单位、全国首批增量配电改革试点单位。目前，湘潭经开区已成为基地发展的核心，是湖南省JMRH特色产业园和湖南省HGZB特色产业园。'},
             {name:'长沙中电软件园',img:require('../assets/img/p3.jpg'),detail:'园区以聚集创新资源、培育新兴产业、推动城市运营为使命，以打造产业服务专家为指引，以构建央企为龙头的双创服务体系为抓手，形成央企对接、产业聚集、协同创新三大服务平台系统。目前，园区已获得国家科技企业孵化器、国家众创空间、省特色产业园等资质平台15个，建成湖南省无线电检测中心、院士专家工作站等公共技术服务平台，建成科技成果展示厅、多功能会议厅、云咖啡、数字机房、商务配套等创新创业公共服务硬平台；引进腾讯众创空间、微软云暨移动应用孵化平台、长沙智能制造研究总院等高端专业的众创平台，为入园企业和项目开展新三板上市、知识产权、高新技术企业认定、财税、HR系列沙龙、法律、管理、项目申报、软件开发工具等培训等系列服务，营造出浓厚的创新、创业氛围，成为“双创”新高地。'},
             {name:'常德经济技术开发',img:require('../assets/img/p4.jpg'),detail:'常德经开区位于沅水之滨、德山脚下，是中国善德文化的发源之地。总面积155平方公里，建成区面积70平方公里，人口15万。与常德城区临水相望，距桃花源机场5公里，2条国道、6条高速穿境而过，有千吨级散装货运码头，铁路年吞吐200万吨。2010年6月被国务院批准为国家级经济开发区，并定名为“常德经济技术开发区”。先后被授予“国家高新技术产业基地园区”、“湖南省承接产业转移示范园区”等称号。2018年，全区完成技工贸总收入918亿元，增长14.6%；规模工业总产值达452亿元，增长14%;固定资产投资同比增长14.6%；实现一般公共预算收入20.19亿元，增长11.6%。'}       
      ]
    }
  },
  mounted(){
    window.addEventListener("scroll",this.showIcon)
  },
  methods:{
    changeInfo(){
      $('#name-list li').mouseenter(function(){
        var idx  =$(this).index()
        $(this).css('background-color','#a3bccc').siblings('li').css('background-color','#f6f6f6')
        //console.log(idx)
        $('#img-list li').eq(idx).show().siblings('li').hide()
        $('#detail-list li').eq(idx).show().siblings('li').hide()
      })
     
    },
    changeColor(){
      $('#name-list li').mouseleave(function(){
         $(this).css('background-color','#a3bccc')
         $(this).siblings('li').css('background-color','#f6f6f6')
      })
    },
    showIcon(){
      if(!!document.documentElement.scrollTop && document.documentElement.scrollTop>620){
        $('.area-box').fadeIn(2500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#ProductArea{
  width: 80%;
  margin: 0 auto;
  min-height: 350px;
}
.area-box{
  display: none;
  width: 100%;
  height: 300px;
}
.more{
  float: right;
  text-decoration: none;
}
.area-head{
  width: 100%;
  height: 50px;
  text-align: left;
  line-height: 45px;
  font-weight: bolder;
  border-bottom: 2px solid #323b50;
}
.area-name{
  width: 20%;
  height: 100%;
  float: left;
}
.area-name ul{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#name-list li:nth-child(1){
  background-color: #a3bccc;
}
.area-name ul li{
  line-height: 90px;
  height: 25%;
  width: 100%;
  background-color: #f6f6f6;
}
.area-img{
  float: left;
  width: 40%;
  height: 100%;
  overflow: hidden;
}
#img-list{
  width: 100%;
  height: 100%;
}
#img-list li{
  width: 100%;
  height: 100%;
}
#img-list li img{
  width: 100%;
  height: 100%;
}
.area-info{
  overflow: hidden;
  float: left;
  width: 40%;
  height: 100%;
}
.info-icon{
  font-weight: bolder;
  text-align: left;
  width: 100%;
  height: 10%;
  background-color: azure;
  border-top-right-radius: 10px;
}
#detail-list{
  width: 100%;
  height: 90%;
}
#detail-list li{
  overflow: hidden;
  line-height: 30px;
  width: 100%;
  height: 100%;
  line-clamp: 10;
  text-align: left;
  text-overflow: ellipsis;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: azure;
  font-weight: 900;
}

</style>