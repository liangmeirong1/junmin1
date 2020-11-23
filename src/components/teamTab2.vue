<template>
<el-tabs type="border-card">
  <el-tab-pane label="骨干成员">人才</el-tab-pane>
  <el-tab-pane label="关键技术">关键技术</el-tab-pane>
  <el-tab-pane label="关键设备">关键设备</el-tab-pane>
  <el-tab-pane label="技术领域">技术领域</el-tab-pane>
</el-tabs>
</template>

<script>
export default {
    name: 'teamTab2',
    date(){
        return{
            msg:'123'
        }
    }
}
</script>

<style scoped>
*{
    list-style: none;
    text-align: left;
    padding: 0;
}
.el-tabs--border-card>.el-tabs__content {
    padding: 15px;
    min-height: 200px;
}
</style>