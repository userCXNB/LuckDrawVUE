<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content">
                <h1>
                    <span style="vertical-align:middle;margin-right:20px;">行业数据集CMS</span>
                    <el-button style="vertical-align:middle;" type="primary">
                        <router-link tag="div" :to="{name:'industryEntry',params:{key:'add'}}">新增</router-link>
                    </el-button>
                    <el-button style="vertical-align:middle;" type="primary">
                        <a href="http://cms.chinadep.com" style='color:#fff;'>返回到CMS</a>
                    </el-button>

                </h1>                                                                     
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    center
                    >
                    <el-table-column
                    label="序号"
                    width="80">
                        <template slot-scope="scope">
                            {{scope.$index+1}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="cataTitle"
                    label="标题"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="orgName"
                    label="所属组织(org)"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="groupName"
                    label="所属分类(group)"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="description"
                    label="描述"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="状态"
                    width="180">
                        <template slot-scope="scope">
                            {{scope.row.status|industryStatus}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="180">
                        <template slot-scope="scope">
                            {{scope.row.createTime|format}}
                        </template>
                    </el-table-column>                    
                    <el-table-column
                    prop="updateTime"
                    label="最后更新时间"
                    width="180">
                        <template slot-scope="scope">
                            {{scope.row.updateTime|format}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">
                           <router-link tag="div" :to="{ name:'industryEntry',params:{key:scope.row.bussinessKey}}">编辑</router-link>
                        </el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                    </el-table-column>                    
                </el-table>
            </div></el-col>
      </el-row>
    <el-pagination
        style="text-align:center;margin:22px 0 75px;"
        background
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        :page-size="5"
        layout="prev, pager, next"
        :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
        }],
        currentPage:1,
        total:1
      }
    },
  watch: {

  },
  methods: {
         handleClick(row) {
        console.log(row.bussinessKey);
        for(var i=0;i<this.tableData.length;i++){
            if(this.tableData[i].bussinessKey == row.bussinessKey){
                this.tableData.splice(i, 1); 
                         let data = new FormData();
         data.append('bussinessKey',row.bussinessKey);
                this.$axios.post(
                        '/cms/api/data/v1/delDataSet',data
                    ).then((res)=>{
                        console.log(res)
                    })
            }
        }
      },
      getPackageData(val){
          this.$axios.get(
            '/cms/api/data/v1/dataSetList?page='+val+'&size=5',
          ).then((res)=>{
            this.tableData = res.data.rows
            this.total = res.data.total
          })
      },
      handleCurrentChange(val){    
        this.getPackageData(val)
        this.currentPage = val
        window.scrollTo(0,0);
      },
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
       this.getPackageData(1)
  }
}
</script>
<style lang="less">

</style>