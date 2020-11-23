<template>
  <div class="form1">

      <table border="0" cellpadding="" cellspacing="0">
        <tr>
          <td colspan="2" align="center" style="font-size: 25px">
            需求发布填报表
          </td>
        </tr>
        <tr>
          <td align="right" width="200"><span>*</span>需求名称：</td>
          <td align="left"><input type="text" class="intxt"  v-model="publishInfo.title" /></td>
        </tr>
        <tr>
          <td align="right"><span>*</span>单位名称：</td>
          <td align="left">
            <input type="text" class="intxt" v-model="publishInfo.unit" />
          </td>
        </tr>
        <tr>
          <td align="right"><label><span>*</span>所在区域：</label></td>
          <td align="left">
            <select class="intxt" v-model="publishInfo.area">
              <option value="">--请选择--</option>
              <option value="nh">南海区</option>
              <option value="cc">禅城区</option>
              <option value="gm">高明区</option>
              <option value="ss">三水区</option>
              <option value="sd">顺德区</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right"><span>*</span>联系人：</td>
          <td align="left">
            <input type="text" class="intxt" v-model="publishInfo.nickname" />
          </td>
        </tr>
        <tr>
          <td align="right"><span>*</span>联系电话：</td>
          <td align="left">
            <input type="number" class="intxt" v-model="publishInfo.phone" maxlength="11"  placeholder="请输入11位手机号码"/>
          </td>
        </tr>
        <tr>
          <td align="right"><span>*</span>需求类型：</td>
          <td align="left">
            &nbsp;
            <input
            name="type"
              type="radio"
              v-model="publishInfo.needtype"
              checked="checked"
              value="产品需求"
            />
            &nbsp;
            <label>产品需求</label>

            &nbsp;
            <input type="radio" name="type" value="技术需求" v-model="publishInfo.needtype"/>
            &nbsp;
            <label>技术需求</label>
            &nbsp;<input type="radio" name="type" value="人才需求" v-model="publishInfo.needtype"/>
            &nbsp;
            <label>人才需求</label>
          </td>
        </tr>

        <tr>
          <td align="right"><span>*</span>发布日期：</td>
          <td align="left">
            <input type="date" class="intxt" v-model="publishInfo.pubtime" />
          </td>
        </tr>

        <tr>
          <td align="right"><span>*</span>需求描述：</td>
          <td align="left" height="200">
            <textarea
              style="resize: none"
              class="inarea"
              v-model="publishInfo.content"
              placeholder="若没有需求描述请填无"
              id="content"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td align="right"><span>*</span>具体要求：</td>
          <td align="left" height="150">
            <textarea
              style="resize: none"
              class="inarea"
              v-model="publishInfo.requirement"
              id="requirement"
              placeholder="若没有具体要求请填无"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <el-row>
        
        <el-button type="info" size="medium" @click="needpublish"
          class="in">发布</el-button
        >
      </el-row>
            <!-- <button class="in" @click="needpublish">发布</button>&nbsp;
            <input type="reset" class="in"  /> -->
          </td>
        </tr>
      </table>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "send",
  data() {
    return {
      publishInfo:{
        title: "",
        unit: "",
        area: "",
        nickname: "",
        phone: "",
        needtype:"",
        pubtime:"",
        content:"",
        requirement:""
      },
    };
  },
  methods: {
    rules1(){
      if (this.publishInfo.title=="") {
        alert("需求名称不能为空");
        return false
      }
       if (this.publishInfo.unit == "") {
        alert("单位不能为空");
        return false
      }
       if (this.publishInfo.area == "") {
        alert("所在区域不能为空");
        return false
      }
       if (this.publishInfo.nickname == "") {
        alert("联系人不能为空");
        return false
      }
       
      var reg = /^1\d{10}$/;
      var reg1 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (
        !reg.test(this.publishInfo.phone) ) {
        alert("请输入正确的手机号码格式");
        return false
      }
        if (this.publishInfo.needtype == "") {
        alert("需求类型不能为空");
        return false
      }
      if (this.publishInfo.pubtime == "") {
        alert("发布日期不能为空");
        return false
      }
      if(this.publishInfo.content== ""){
        alert("需求描述不能为空");
        return false
      }
      if(this.publishInfo.requirement== ""){
        alert("具体要求不能为空");
        return false
      }
      return true
      
    },
    needpublish(){
      console.log(this.publishInfo)
      var a=this.rules1()
      if(a){axios
        .post("/api/getData",this.publishInfo)
        .then((res) => {
         return res
        });
         this.publishInfo={}}
      
    },
    register() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.form1 {
  width: 80%;
  margin: 30px auto;
}
table {
  width: 100%;
}
.intxt {
  width: 300px;
  height: 30px;
}

.inarea {
  width: 400px;
  height: 150px;
}
tr {
  height: 50px;
}
tr td span{
  color:red;
  padding: 0 5px;
}
input:focus,textarea:focus{

    outline: none;
    border-radius:10px ;
    border: 0.5px solid rgb(78, 127, 233);
   
}
input,textarea,select{
 padding-left: 10px;
  outline: none;
 border-radius:10px ;
 border: 0.5px solid rgb(139, 139, 139);
}
textarea{padding-top:10px ;}
.in{
margin-left: 40px;
width:110px;
}
td >>> .el-button--info {
    color: #FFF;
    background-color: #3772e9;
    border-color: #3772e9;
}
</style>