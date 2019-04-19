<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content">
                <h1>
                    <span style="vertical-align:middle;margin-right:20px;">行业数据集CMS</span>
                    <el-button style="vertical-align:middle;" type="primary">
                        <router-link tag="div" :to="{ path:'industryEntry'}">新增</router-link>
                    </el-button>

                </h1>                                                                     
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    center
                    >
                    <el-table-column
                    prop="date"
                    label="序号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="标题"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="所属组织(org)"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="所属分类(group)"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="描述"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="状态"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="创建时间"
                    width="180">
                    </el-table-column>                    
                    <el-table-column
                    prop="address"
                    label="最后更新时间">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">
                           <router-link tag="div" :to="{ path:'industryEntry'}">编辑</router-link>
                        </el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                    </el-table-column>                    
                </el-table>
            </div></el-col>
      </el-row>
  </div>
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
         handleClick(row) {
        console.log(row);
      }
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
  }
}
</script>
<style lang="less">

</style>