<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content">
                <ul class="publish">
                    <li>行业数据集CMS</li>
                    <li>
                       *必填项
                    </li>
                    <li>
                        <span class="span">*标题</span>
                        <el-input style="height:30px!important;width:50%;" v-model="data.cataTitle" placeholder="请输入内容"></el-input>
                    </li>     
                    <li>
                        <span class="span">*所属组织</span>
                        <el-input style="height:30px!important;width:50%;" v-model="data.orgName" placeholder="请输入内容"></el-input>
                    </li>                           
                    <li>
                         <span class="span">*所属分类</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.groupName">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">*描述</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.description">
                         </el-input>
                    </li>  
                    <li>
                        <span class="span">文件格式</span>
                        <el-input style="height:30px!important;width:50%;" v-model="data.confCatalogFormat" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                        <span class="span">数据量</span>
                        <el-input style="height:30px!important;width:50%;" v-model="data.dataCount" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                        <span class="span">文件个数</span>
                        <el-input style="height:30px!important;width:50%;" v-model="data.fileCount" placeholder="请输入内容"></el-input>
                    </li>   
                    <li v-for='(item,index) in data.datasources' :key="index">
                         <span class="span">文件{{index+1}}地址</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.datasources[index].url">
                         </el-input>
                         <span class="span">文件{{index+1}}提取码</span>
                         <el-input style="height:30px!important;width:20%;" v-model="data.datasources[index].password" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                         <span class="span">引用网址</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.cataUrl">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">数据来源部门</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.dataFromDept">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">数据领域</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.industry">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">标签</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.cataTags">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">开放类型</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="data.openType">
                         </el-input>
                    </li>                                                          
                    <li style="padding-left:20%;">
                        <el-button type="primary" @click="industryEntryEvent">确定</el-button>
                        <el-button @click="goBack">取消</el-button>
                    </li>                                                                              
                </ul>
            </div></el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
             radio: '1',
             textarea: '',
             cataTitle: '1',
             orgName: '2',
             groupName: '3',
             description: '4',
             confCatalogFormat: '5',
             dataCount: '6',
             fileCount: '7',
             cataUrl: '8',
             dataFromDept: '9',
             industry: '10',
             cataTags: '11',
             openType: '12',
             datasources:[
                 {url:'666',password:'777'}
             ],

            data:{
               "id":'',
               "bussinessKey":"",
               "cataTitle":"",
               "cataUrl":"",
               "orgName":"",
               "groupName":"",
               "industry":"",
               "createTime":'',
               "updateTime":'',
               "description":"",
               "openType":"",
               dataFromDept:'',
               "cataTags":"",
               "confCatalogFormat":"",
               "dataCount":"",
               "fileCount":"",
               "datasources":[
                   {"id":'',"url":"","password":""},
                   {"id":'',"url":"","password":""},
                   {"id":'',"url":"","password":""},
                   {"id":'',"url":"","password":""},
                   {"id":'',"url":"","password":""}
                             ]}
    }
  },
  watch: {

  },
  methods: {
      industryEntryEvent(){
          this.$axios.post(
            '/cms/api/data/v1/dataSet',this.data
          ).then((res)=>{
            if(res.data.code == 0){
                alert(res.data.data)
                this.$router.push({name:'industryList'})
            }
          })
      },
      goBack(){
           this.$router.push({name:'industryList'})
      }
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
       if(this.$route.params.key !== 'add'){
          this.$axios.get(
            '/cms/api/data/v1/dataSetInfo?bussinessKey='+this.$route.params.key,
          ).then((res)=>{
            this.data = res.data.data

          })
       }
  }
}
</script>
<style lang="less">
    .publish{
        margin-left:20px;font-size:16px;
        li{
            margin-top:20px;
            .span{
                display:inline-block;
                width:110px;
            }
        }
    }
     .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-left {
    background:rgba(242, 242, 242, 1);
    height:300px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.el-input__icon {
    line-height: 30px!important;
}
.el-input__inner {
    height: 30px!important;
    border: 1px solid #DCDFE6;
}
</style>