<template>
   <div class="set_detail">
        <p>About this dataset</p>
        <div class="about">
            Listing of Registered Medical Devices
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
        </div>
        <p>Similar Datasets</p>
        <listSon/>
   </div>
</template>
 
<script>
import tab from '@/components/tab'
import listSon from '@/components/listSon'

export default {
  components: {
      tab,listSon
  },
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
                  date: '关键字',
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
    drawLine(){
    }
  },
 
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
    .set_detail{
      padding-bottom: 95px;
    }
    p{
      font-size: 20px;
      line-height: 56px;
      margin-top: 56px;
    }
    .about{
      padding:28px 15px;
      background:#fff;
    }
</style>