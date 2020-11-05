
<template>
  <div class="content1">
      <ul class="good-list">
        <li v-for="(item ) of infolist" :key="item.id" @click="handel(item.id)">
          <!-- <div class="pic">
            <img
              :src="item.img"
            />
          </div> -->
          <div class="left con">
            
            <div class="name"><span class="iconfont5 icon-fasong"></span>{{item.title}} <span class="tag">正在对接</span></div>
            
            <div class="appNum">类 别：{{item.type}}</div>
            <div>应用领域：{{item.area}}</div>
          
          </div>
          <div class="right">{{item.time}}</div>
        </li>
      </ul>
    </div>
 
</template>

<script>

export default {
  name: "content1",
  components: {},
  methods:{
    handel(id){
      this.$router.push({
        name:'demdetails',
         params: { id }

      })
    }

  },
  data() {
    return {
      infolist:[

        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
          id:"001",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"002",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"003",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"004",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"005",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"006",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"007",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"008",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
        { img:"http://file.gzjmrh.com/upload/20181119/201811191538598784.png",
         id:"009",
          title:"大扩展比方舱移动医院系统集成技术",
          type:"产品供应",
          area:"应急救援",
          time:"12月30日"
        },
          
      ]
    };

  },
};
</script>
<style scoped>
.content1 {
  width: 100%;
}

.good-list li{
  display: flex;
  padding: 10px;
  border-bottom:1px solid rgb(201, 201, 201) ;
  color: rgb(145, 143, 143);
  font-size: 14px;
  height: 107px;
  
}
.con{
  flex: 1;


}
.left{
  text-align: left;
  margin-left: 10px;
  padding: 10px 0 0 0;

}
.name{
  color: black;
  font-size: 16px;
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
    background: #fceaea;}
.iconfont5{
  font-size: 17px;
  color: #323b50;
}
/* .pic {
width:150px;
height: 100px;
}
.pic img{
  width: 100%;
 
} */

</style>