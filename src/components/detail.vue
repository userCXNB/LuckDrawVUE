<template>
   <div class="set_home_right" style="padding:0px 97px 0 30px;">
      <div style="font-size:41px;line-height:61px;margin-top:55px;">{{detail.title}}</div>
      <el-button plain><a :href='detail.url'>前往资源</a></el-button>
      <div style="font-size:15px;line-height:22px;margin:35px 0 48px;color:gray">
        {{detail.notes}}
      </div>
      <div class="set_home_left_title">数据说明</div>
      <el-table
      :data="tableData"
      :show-header="false"
      border
      style="width: 100%">
          <el-table-column
            prop="date"
            label="介绍"
            width="180"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="详情"
            >
          </el-table-column>
    </el-table>
     <el-button plain @click="DswitchStatus" style="float:right;margin-top:10px;">返回</el-button>
   </div>
</template>
 
<script>
export default {
  props:['detail','DswitchStatus'],
  data() {
    return {
            tableData: [{
                  date: '资源方',
                  name: ''
                },{
                  date: '数据来源',
                  name: ''
                },{
                  date: '数据领域',
                  name: ''
                },{
                  date: '数据格式类型',
                  name: ''
                },{
                  date: '维护者',
                  name: ''
                },{
                  date: '版本',
                  name: ''
                },{
                  date: '更新时间',
                  name: ''
                },{
                  date: '发布日期',
                  name: ''
                }]
    }
  },
  watch: {

  },
  methods: {
  },
  mounted() {
     console.log(this.detail)
     this.tableData[0].name = this.detail.organization.title
     this.tableData[1].name = this.detail.author
     this.tableData[2].name = this.detail.groups[0].title
     this.tableData[3].name = this.detail.resources[0].format
     this.tableData[4].name = this.detail.maintainer
     this.tableData[5].name = this.detail.version
     this.tableData[6].name = this.detail.resources[0].last_modified
     this.tableData[7].name = this.detail.resources[0].created

  }
}
</script>
 
<style lang="less" scoped>
    .set_home_right{
       width:670px;
    }
         .set_home_left_title{
        margin:15px 0 4px;
        font-size:20px;
        background:#52e4cd;
        text-align:center;
        line-height:54px;
        color:#fff;
    }
</style>