<template>
    <el-table
      :data="tableData"
      :show-header="false"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180" style="display:none">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
        <el-table-column
        prop="address"
        label="玩吉尔">
      </el-table-column>
    </el-table>
</template>
 
<script>
export default {
  data() {
   return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
  },
  watch: {

  },
  methods: {
    drawLine(){
    }
  },
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
</style>