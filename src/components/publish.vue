<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="24"><div class="grid-content">
                <div v-show="configTest == 'pc'" style="background:rgba(242, 242, 242, 1);height:28px;padding-top:15px;border-raduis:4px;">
                    <el-breadcrumb separator="/">
                    <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">需求发布</a></el-breadcrumb-item>
                    </el-breadcrumb> 
                </div>
                <ul class="publish" style="font-size:16px;">
                    <li style="font-size:24px;">需求发布</li>
                    <li>
                        如果您在网站没有找到自己所要的数据，请您通过如下途径向我们反馈。或者您可以直接发送至邮箱<a href="http://opendataservice@chinadep.com" style="border-bottom:1px solid #000;">opendataservice@chinadep.com</a>
                    </li>
                    <li>
                        <span class="span"><span style="color:red;">*</span>资源名称:</span>
                        <el-input v-model="resourceName" style="height:30px!important;width:50%;" placeholder="请输入您需要的数据资源名称"></el-input>
                    </li>                   
                    <li>
                         <span class="span"><span style="color:red;">*</span>资源描述:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请详细描述对此数据的需求:包含数据项,以及时间,地域覆盖度等信息"
                            v-model="detail">
                         </el-input>
                    </li>   
                    <li>
                         <span class="span">资源用途:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请详细描述利用此数据的用途"
                            v-model="useWay">
                         </el-input>
                    </li>  
                    <li>
                         <span class="span">资源提供单位:</span>
                         <el-input
                            style="width:50%;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请尽量描述此数据的供应方的部门名称"
                            v-model="company">
                         </el-input>
                    </li>   
                    <li>
                        <span class="span"><span style="color:red;">*</span>联系人:</span>
                        <el-input v-model='name' style="height:30px!important;width:50%;" placeholder="请输入联系人"></el-input>
                    </li>   
                    <li>
                        <span class="span"><span style="color:red;">*</span>联系方式:</span>
                        <el-input v-model='mobile' style="height:30px!important;width:50%;" placeholder="请输入您的联系方式,邮箱或电话"></el-input>
                    </li>
                    <li style="padding-left:20%;">
                        <el-button type="primary" @click="publishEvent" :disabled="!show">提交</el-button>
                        <span v-show="!show">请耐心等待</span>
                        <el-button @click="goback">取消</el-button>
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
            resourceName:"",
            detail:"",
            useWay:"",
            company:"",
            name:"",
            mobile:"",
            mobileCue:'',
            configTest:'pc',
            show: true,

    }
  },
  watch: {
  },
  methods: {
        publishEvent(){       
         let data = new FormData();
         data.append('resourceName',this.resourceName);
         data.append('detail',this.detail);
         data.append('useWay',this.useWay);
         data.append('company',this.company);
         data.append('name',this.name);
         data.append('mobile',this.mobile);
          if(this.resourceName!==''&this.detail!==''&this.name!==''&this.mobile!==''){//判断所有输入框不为空
                    this.show = false
                    this.$axios.post(
                        '/api/request/commitRequest',data
                    ).then((res)=>{
                        if(res.data.code == 0){
                            alert(res.data.data)
                            this.show=true
                            this.resourceName=''
                            this.detail=''
                            this.useWay=''
                            this.company=''
                            this.name=''
                            this.mobile=''
                        }else{
                            alert('提交失败')
                            this.show=true
                        }
                    })     
          }else{
              alert('请填完所有必选项')
          }
        },
        goback(){
            history.back(-1)
        }
  },
  mounted() {
      (function(){
            if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                this.configTest = 'mobile'
            }else{
               this.configTest = 'pc'
            }
      }.bind(this))()
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