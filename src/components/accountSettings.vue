<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="5"><div class="grid-content bg-purple-left">
               <h1 style="text-align:center;">账号设置</h1>
               <ul style="font-size:14px;line-height:46px;float:right;margin-right:20px;">
                   <li v-for="(item,index) in accountSettings" :key="index" @click="accountSetEvent(index)">{{item.name}}</li>
               </ul>
            </div></el-col>
        <el-col :span="19"><div class="grid-content">
                <div style="background:rgba(242, 242, 242, 1);height:28px;padding-top:15px;border-raduis:4px;">
                    <el-breadcrumb separator="/">
                    <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">账号设置</a></el-breadcrumb-item>
                    <el-breadcrumb-item>{{accountSettings[accountSetInitNum].name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <ul v-if="0 == accountSetInitNum" class="basicData">
                    <li>基本资料</li>
                    <li>
                        <span class="span">账号</span>
                        <el-input style="height:30px!important;width:273px;" v-model="basicData.userAccount" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                         <span class="span">手机号</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="basicData.mobile" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                         <span class="span">用户名</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="basicData.userName" placeholder="请输入内容"></el-input>
                    </li> 
                    <li>
                         <span class="span">昵称</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="nickName" placeholder="请输入内容"></el-input>
                    </li>                    
                    <li>
                         <span class="span">个人简介</span>
                         <el-input
                            style="width:273px;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="remark">
                         </el-input>
                    </li>                   
                    <li>
                        <span class="span"></span>
                        <el-button type="primary" style="width:273px;" @click="basicDataEvent">保存</el-button>
                    </li>
                </ul>
                <ul v-if="1 == accountSetInitNum" class="enterprise">
                    <li>
                         <span class="span">所属公司</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="enterprise.name" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                         <span class="span">所属行业</span>
                         <template>
                            <el-select v-model="enterprise.industry" style="width:273px;" placeholder="请选择行业">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                         </template>

                    </li>                       
                    <li>
                         <span class="span">岗位名称</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="enterprise.post" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                        <span class="span"></span>
                        <el-button type="primary" style="width:273px;" @click="enterpriseEvent">主要按钮</el-button>
                    </li>
                </ul>
                <ul v-if="2== accountSetInitNum" class="accountPassword">
                    <li>账号和密码</li>
                    <li>
                        <span class="span">手机</span>
                        <span>{{accountPassword.mobile}}</span>
                        <i class="el-icon-edit" @click="setFrameData('bdsjh')"></i>
                    </li>
                    <li>
                        <span class="span">邮箱</span>
                        <span>{{accountPassword.email? accountPassword.email:'未绑定'}}</span>
                        <i class="el-icon-edit" @click="setFrameData('bdyx')"></i>
                    </li>
                    <li>
                        <span class="span">密码</span>
                        <span>修改密码</span>
                        <i class="el-icon-edit" @click="setFrameData('sfxz')"></i>
                    </li>
                    <li>
                        <span class="span">微信</span>
                        <span>未绑定</span>
                        <i class="el-icon-edit"></i>
                    </li>
                </ul>
                <ul v-if="3== accountSetInitNum" class='informationPush'>
                    <li>信息推送</li>
                    <li>
                         <span class="span">是否接受咨询推送</span>
                         <template>
                            <el-radio v-model="radio" label="1">备选项</el-radio>
                            <el-radio v-model="radio" label="2">备选项</el-radio>
                         </template>
                    </li>
                    <li>
                         <span class="span">选择推送方式</span>
                         <template>
                            <el-radio v-model="radio" label="1">备选项</el-radio>
                         </template>
                    </li>
                    <li>
                        <span class="span"></span>
                        <el-button type="primary" style="width:273px;">主要按钮</el-button>
                    </li>
                </ul>

            </div></el-col>
      </el-row>
  </div>
</template>
<script>
import {mapActions} from "vuex";
var count = 0;
export default {
  data() {
    return {
             basicData:{},
             enterprise:{},
             accountPassword:{},
             nickName:'',
             remark:'',
             accountSettings:[{name:'基本资料'},{name:'企业资料'},{name:'账号和密码'},{name:'信息推送'}],
             accountSetInitNum:2,
             radio: '1',
             textarea: '',
              options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
                value: '选项2'
                }
  },
  watch: {
      nickName(){
         let data = new FormData();
         data.append('nickName',this.nickName);
         this.$axios.post(
            'api/user/nickNameCheck',data
          ).then((res)=>{
            console.log(res)
          })
      }
  },
  methods: {
     ...mapActions(['setFrameData']),
     accountSetEvent(ind){
         console.log(ind)
         this.accountSetInitNum = ind
     },
     basicDataEvent(){
         let data = new FormData();
         data.append('nickName',this.nickName);
         data.append('remark',this.remark);
         this.$axios.post(
            'api/user/updateUserDetail',data
          ).then((res)=>{
            console.log(res)
          })
    
     },
     enterpriseEvent(){
         let data = new FormData();
         data.append('name',this.enterprise.name);
         data.append('post',this.enterprise.post);
         data.append('industry',this.enterprise.industry);
         this.$axios.post(
            'api/company/updateCompanyDetail',data
          ).then((res)=>{
            console.log(res)
          })   
     }
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
    //       this.$axios.get(
    //         'api/user/getUserDetail'
    //       ).then((res)=>{
    //         this.basicData = res.data.data
    //         this.nickName = this.basicData.nickName
    //         this.remark = this.basicData.remark
    //       })

    //       this.$axios.get(
    //         'api/company/getCompanyDetail'
    //       ).then((res)=>{
    //           console.log(res.data)
    //         this.enterprise = res.data.data
    //       })

          this.$axios.get(
            'api/user/getUserAccountDetail'
          ).then((res)=>{
              console.log(res.data)
            this.accountPassword = res.data.data
          })
  }
}
</script>
<style lang="less">
    .basicData{
        margin-left:20px;font-size:16px;
        li{
            margin-top:20px;
            .span{
                display:inline-block;
                width:100px;
            }
        }
    }
    .enterprise{
        margin-left:20px;font-size:16px;
        li{
            margin-top:20px;
            .span{
                display:inline-block;
                width:100px;
            }
        }
    }
    .accountPassword{
         margin-left:20px;font-size:16px;
         li{
            margin-top:20px; 
            .span{
                display:inline-block;
                width:100px;
            }
         }
    }
    .informationPush{
         margin-left:20px;font-size:16px;
         li{
            margin-top:20px; 
            .span{
                display:inline-block;
                width:150px;
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