<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content">
                <div style="background:rgba(242, 242, 242, 1);height:28px;padding-top:15px;border-raduis:4px;">
                    <el-breadcrumb separator="/">
                    <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">需求发布</a></el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <ul class="publish">
                    <li>需求发布</li>
                    <li>
                        如果您在网站没有找到自己所要的数据，请您通过如下途径向我们反馈。或者您可以直接发送至邮箱 opendataservice@chinadep.com
                    </li>
                    <li>
                        <span class="span">*资源名称:</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>                   
                    <li>
                         <span class="span">*资源描述:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>   
                    <li>
                         <span class="span">资源用途:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">资源提供单位:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                         </el-input>
                    </li>   
                    <li>
                        <span class="span">*联系人:</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>   
                    <li>
                        <span class="span">*联系方式:</span>
                        <el-input style="height:30px!important;width:50%;" placeholder="请输入内容"></el-input>
                    </li>
                    <li style="padding-left:20%;">
                        <el-button type="primary">主要按钮</el-button>
                        <el-button>默认按钮</el-button>
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
                width:100px;
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