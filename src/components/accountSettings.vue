<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="5"><div class="grid-content" style='height:300px;'>
               <h1 style="text-align:center;font-size:24px;">账号设置</h1>
               <ul style="font-size:14px;line-height:46px;float:right;width:100%">
                   <li v-for="(item,index) in accountSettings" :key="index" @click="accountSetEvent(index)"
                    :style='index == accountSetInitNum? "background:#52e4cd;text-align:center;padding-right:20px;cursor:pointer;color:#fff;":"background:#fff;text-align:center;cursor:pointer"'
                   >{{item.name}}</li>
               </ul>
            </div></el-col>
        <el-col :span="19"><div class="grid-content">
                <h1 style="font-size:21px;color:#42E2C8;">{{accountSettings[accountSetInitNum].name}}</h1>
                <ul v-if="0 == accountSetInitNum" class="basicData">
                    <li>
                        <span class="span">账号</span>
                        <el-input style="height:30px!important;width:273px;" v-model="basicData.userAccount" disabled="disabled" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                         <span class="span">手机号</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="basicData.mobile" disabled="disabled" placeholder="请输入内容"></el-input>
                    </li>
                    <li>
                         <span class="span">用户名</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="basicData.userName" disabled="disabled" placeholder="请输入内容"></el-input>
                    </li> 
                    <li>
                         <span class="span">昵称</span>
                         <el-input style="height:30px!important;;width:273px;" v-model="nickName" placeholder="请输入内容">{{nickName|nullChange}}</el-input>
                    </li>                    
                    <li>
                         <span class="span">个人简介</span>
                         <el-input
                            style="width:273px;vertical-align:top"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="remark">
                            {{remark|nullChange}}
                         </el-input>
                    </li>                   
                    <li>
                        <span class="span"></span>
                        <el-button type="primary" style="width:273px;background:#44e2c9;" @click="basicDataEvent">保存</el-button>
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
                        <el-button type="primary" style="width:273px;background:#44e2c9;" @click="enterpriseEvent">保存</el-button>
                    </li>
                </ul>
                <ul v-if="2== accountSetInitNum" class="accountPassword">
                    <li>
                        <span class="span">手机</span>
                        <span>{{accountPassword.mobile}}</span>
                        <i class="el-icon-edit" style='cursor:pointer' @click="setFrameData('bdsjh')"></i>
                    </li>
                    <li>
                        <span class="span">邮箱</span>
                        <span>{{accountPassword.email? accountPassword.email:'未绑定'}}</span>
                        <i class="el-icon-edit" style='cursor:pointer' @click="setFrameData('bdyx')"></i>
                    </li>
                    <li>
                        <span class="span">密码</span>
                        <span>修改密码</span>
                        <i class="el-icon-edit" style='cursor:pointer' @click="setFrameData('sfyz')"></i>
                    </li>
                    <li>
                        <span class="span">微信</span>
                        <span v-show="!accountPassword.openId">未绑定</span>
                        <span v-show="accountPassword.openId">{{accountPassword.weChatNickname}}</span>
                        <i class="el-icon-edit" style='cursor:pointer' @click="getBindUrl"></i>
                    </li>
                </ul>
                <ul v-if="3== accountSetInitNum" class='informationPush'>
                    <li>
                         <span class="span">是否接受咨询推送</span>
                         <template>
                            <el-radio v-model="radio" label="1">是</el-radio>
                            <el-radio v-model="radio" label="0">否</el-radio>
                         </template>
                    </li>
                    <li>
                         <span class="span">选择推送方式</span>
                         <template>
                            <el-radio v-model="email" label="1">邮箱</el-radio>
                         </template>
                    </li>
                    <li>
                        <span class="span"></span>
                        <el-button type="primary" style="width:273px;background:#44e2c9;" @click="informationPushEvent">保存</el-button>
                    </li>
                </ul>

            </div></el-col>
      </el-row>
  </div>
</template>
<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
             basicData:{},
             enterprise:{},
             accountPassword:{},
             informationPush:{},
             nickName:'',
             remark:'',
             email:'',
             accountSettings:[{name:'基本资料'},{name:'企业资料'},{name:'账号密码'},{name:'信息推送'}],
             accountSetInitNum:-1,
             radio: '',
             textarea: '',
             options: [{
                value: '选项1',
                label: '互联网'
                }, {
                value: '选项2',
                label: 'IT'
                }, {
                value: '选项3',
                label: '制造业'
                }, {
                value: '选项4',
                label: '金融'
                }, {
                value: '选项5',
                label: '教育'
                }, {
                value: '选项6',
                label: '医疗医药'
                }, {
                value: '选项7',
                label: '建筑房地产'
                }, {
                value: '选项8',
                label: '传媒'
                }, {
                value: '选项9',
                label: '政府机关'
                }, {
                value: '选项10',
                label: '其他'
                }],
                value: '选项2'
                }
  },
  watch: {
      $route(to,from){//监听路由
        console.log(to.path)
        this.accountSetInitNum = Number(to.path.charAt(to.path.length-1))
     },
      nickName(){
         let data = new FormData();
         data.append('nickName',this.nickName);
         this.$axios.post(
            '/api/user/nickNameCheck',data
          ).then((res)=>{
            console.log(res)
          })
      },
      accountSetInitNum(){
            switch(this.accountSetInitNum){
                case 0://基本资料
                        this.$axios.get(
                        '/api/user/getUserDetail'
                        ).then((res)=>{
                        this.basicData = res.data.data
                        this.nickName = this.basicData.nickName
                        this.remark = this.basicData.remark
                        })
                    break;
                case 1://企业资料
                        this.$axios.get(
                            '/api/company/getCompanyDetail'
                        ).then((res)=>{
                            this.enterprise = res.data.data
                        })
                    break;
                case 2://账号密码
                        this.$axios.get(
                            '/api/user/getUserAccountDetail'
                        ).then((res)=>{
                            this.accountPassword = res.data.data
                        })
                    break;
                case 3://信息推送
                        this.$axios.get(
                            '/api/pull/getPullConfig'
                        ).then((res)=>{
                            this.informationPush = res.data.data
                            this.radio =  this.informationPush.pullFlag
                            this.email =  this.informationPush.pullConfig[0]
                        })
                    break;   
                default:
                    console.log("请重新输入");
            }
      }
  },
  methods: {
     ...mapActions(['setFrameData','setWX']),
     getBindUrl(){//获取WX跳转接口
         this.setWX('bind')
         this.$axios.get(
         '/api/weChat/getBindUrl'
         ).then((res)=>{
         if(res.data.code ==0){
             window.location.href = res.data.data
         }
      })
     },
     accountSetEvent(ind){
         console.log(ind)
        //  this.accountSetInitNum = ind 监听地址栏变换实现，还是通过路由跳转实现
         this.$router.push({name: 'accountSettings', params: {accountSetInit:ind }})
     },
     basicDataEvent(){
         let data = new FormData();
         data.append('nickName',this.nickName);
         data.append('remark',this.remark);
         this.$axios.post(
            '/api/user/updateUserDetail',data
          ).then((res)=>{
            alert(res.data.data)
          })
    
     },
     enterpriseEvent(){
         let data = new FormData();
         data.append('name',this.enterprise.name);
         data.append('post',this.enterprise.post);
         data.append('industry',this.enterprise.industry);
         this.$axios.post(
            '/api/company/updateCompanyDetail',data
          ).then((res)=>{
             alert(res.data.data)
          })   
     },
    informationPushEvent(){
         let data = new FormData();
         let arr = []
         arr.push(this.email)
         data.append('pullFlag',this.radio);
         data.append('pullWays',arr);
         this.$axios.post(
            '/api/pull/updatePullConfig',data
          ).then((res)=>{
             alert(res.data.data)
          })   
     },
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
       console.log(Number(this.$route.params.accountSetInit))
       this.accountSetInitNum = Number(this.$route.params.accountSetInit)
       var that = this
        this.$root.Bus.$on('bdyx', () => {
            that.$axios.get(
                '/api/user/getUserAccountDetail'
            ).then((res)=>{
                console.log(res.data)
                that.accountPassword = res.data.data
            })
        })

        this.$root.Bus.$on('bdsjh', () => {
            that.$axios.get(
                '/api/user/getUserAccountDetail'
            ).then((res)=>{
                console.log(res.data)
                that.accountPassword = res.data.data
            })
        })

        this.$root.Bus.$on('sfyz', () => {
            that.$axios.get(
                '/api/user/getUserAccountDetail'
            ).then((res)=>{
                console.log(res.data)
                that.accountPassword = res.data.data
            })
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