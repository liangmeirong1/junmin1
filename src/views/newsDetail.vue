<template>
    <div id="newsDetail">
      <div class="center">
        <div class="detail-box">
          <div class="detail-head">
            <h1 class="title">习近平将出席上海合作组织成员国元首理事会第二十次会议并发表重要讲话</h1>
            <p class="infoSource">2020-11-13</p>
          </div>
          <div class="detail-show"><!--<p>应俄罗斯联邦总统普京邀请，国家主席习近平将于11月10日在北京出席上海合作组织成员国元首理事会第二十次会议并发表重要讲话。此次会议由上海合作组织轮值主席国俄罗斯主办，将以视频方式举行。这是中国共产党十九届五中全会后，习近平主席首次出席多边组织峰会，也是中国今年面向欧亚地区的重大多边外交行动，具有十分重要的意义。</p>--></div>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'newsDetail',
    date(){
        return{
            msg: '1',
            info: '<p>应俄罗斯联邦总统普京邀请，国家主席习近平将于11月10日在北京出席上海合作组织成员国元首理事会第二十次会议并发表重要讲话。此次会议由上海合作组织轮值主席国俄罗斯主办，将以视频方式举行。这是中国共产党十九届五中全会后，习近平主席首次出席多边组织峰会，也是中国今年面向欧亚地区的重大多边外交行动，具有十分重要的意义。</p>'
        }
    },
    mounted(){
      const box = '<p style="text-indent: 2em; line-height: 35px; font-size:20px;">应俄罗斯联邦总统普京邀请，国家主席习近平将于11月10日在北京出席上海合作组织成员国元首理事会第二十次会议并发表重要讲话。此次会议由上海合作组织轮值主席国俄罗斯主办，将以视频方式举行。这是中国共产党十九届五中全会后，习近平主席首次出席多边组织峰会，也是中国今年面向欧亚地区的重大多边外交行动，具有十分重要的意义。</p>'
      $('.detail-show').append(box)
    }
}
</script>

<style scoped>
*{
  list-style: none;
  padding: 0;
  margin: 0;
}
.center{
    min-height: 350px;
    border: 1px solid #dddada;
    background-color: rgb(255, 253, 253 ,0.8);
}
.detail-head{
  text-align: center;
    width: 90%;
    margin: 10px auto;
    min-height: 100px;
    background-color: #e2ecf3;
}
.detail-show{
   text-align: left;
    width: 90%;
    margin: 10px auto;
    min-height: 200px;
}
.detail-show p{
  line-height: 35px;
  text-indent: 2em;
  font-size: 20px;
}
.infoSource{
  margin-top: 5px;
}
</style>