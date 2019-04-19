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
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>     
                    <li>
                        <span class="span">*所属组织</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>                           
                    <li>
                         <span class="span">*所属分类</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">*描述</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                        <span class="span">文件格式</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                        <span class="span">数据量</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                        <span class="span">文件个数</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                         <span class="span">文件1地址</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                         <span class="span">文件1提取码</span>
                         <el-input style="height:30px!important;width:20%;" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                         <span class="span">引用网址</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">数据来源部门</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">数据领域</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">标签</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">开放类型</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>                                                          
                    <li style="padding-left:20%;">
                        <el-button type="primary">确定</el-button>
                        <el-button>取消</el-button>
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
             textarea: ''
    }
  },
  watch: {

  },
  methods: {

  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
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