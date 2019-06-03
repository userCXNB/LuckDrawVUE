<template>
  <div>
      <div :style="'text-align:center;height:'+mobileHeight+'px'" v-if="configTest == 'pc'">
         <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">用户登录</div></el-col>
         </el-row>
         <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                  <input v-model="userName" placeholder="请输入手机号/账号/用户名"/>
                  <span>{{userNameCue}}</span>
               </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>
         <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                  <input v-model="password" type="password" placeholder="请输入密码"/>
                  <span>{{passwordCue}}</span>
               </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>
         <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">
                  <router-link :to="{name:'reset'}">忘记密码</router-link>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>     
         <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                  <el-button type="primary" style="width:80%;" v-show="$route.params.type !== 'wx'" @click="loginEvent">登录</el-button>
                  <el-button type="primary" style="width:80%;" v-show="$route.params.type == 'wx'" @click="loginWXEvent">登录并绑定微信</el-button>
                  <span>{{msgCue}}</span>
               </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>    
         <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                  <div v-show="$route.params.type !== 'wx'">
                     <span>还没有账号?</span>
                     <router-link :to="{name:'register',params:{type:'pc',unionid:'pc'}}">去注册</router-link>
                  </div>
                   <router-link tag="div" v-show="$route.params.type == 'wx'" :to='{name:"register",params:{type:"wx",unionid:$route.params.unionid}}'>关联新账号</router-link>
               </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>
         <el-row v-show="$route.params.type !== 'wx'">
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                  <div>
                     <span>社交账号登录</span>
                     <div class="weicon" style="cursor:pointer;vertical-align:middle;display:inline-block;width:25px;height:25px;" @click="getLoginUrl"></div>
                  </div>
               </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         </el-row>             
      </div>
      <div class='mobile' :style="'font-size:.12rem;position:relative;text-align:center;height:'+mobileHeight+'px'" v-if="configTest == 'mobile'">
            <div style="position:absolute;top:.2rem;bottom:0;left:0;right:0;margin:0 auto;">
               <!-- 居中没反应 -->
               <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">手机登录</div></el-col>
               </el-row>
               <el-row s>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">
                        <input v-model="userName" placeholder="请输入手机号/账号/用户名"/>
                        <span>{{userNameCue}}</span>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">
                        <input v-model="password" type="password" placeholder="请输入密码"/>
                        <span>{{passwordCue}}</span>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="9"><div class="grid-content bg-purple-light">
                  </div></el-col>
                  <el-col :span="7"><div class="grid-content bg-purple-light router-link">
                        <router-link :to="{name:'reset'}">忘记密码</router-link>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>     
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <el-button type="primary" style="width:80%;" v-show="$route.params.type !== 'wx'" @click="loginEvent">登录</el-button>
                        <el-button type="primary" style="width:80%;" v-show="$route.params.type == 'wx'" @click="loginWXEvent">登录并绑定微信</el-button>
                        <span>{{msgCue}}</span>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>    
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <div v-show="$route.params.type !== 'wx'">
                           <span>还没有账号?</span>
                           <router-link :to="{name:'register',params:{type:'pc',unionid:'pc'}}">去注册</router-link>
                        </div>
                        <div v-show="$route.params.type == 'wx'">
                           关联新账号
                        </div>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <!-- <el-row v-show="$route.params.type !== 'wx'">
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <div>
                           <span @click="getLoginUrl">社交账号登录</span>
                        </div>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row> -->
            </div>         
      </div>
  </div>

</template>

<script>
import {mapActions} from "vuex";
export default {
  data(){
    return {
        userName:'',
        password:'',
        userNameCue:'',
        passwordCue:'',
        configTest:'pc',
        msgCue:'',
        mobileHeight:'',
    }
  },
  watch: {
      password(){
         if(8 <= this.password.length & this.password.length <= 16){
            this.passwordCue = ''
         let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            if(!reg.test(this.password)){
               this.passwordCue = '格式不正确'
            }
         }
      },
  },
  methods: {
    ...mapActions(['setUserName','setFrameData','setWX']),
    loginEvent(){
            let data = new FormData();
            data.append('userName',this.userName);
            data.append('password',this.$md5.update(this.password).digest('hex'));
         //判断用户名是否为空
         this.userNameCue = ""
         if(this.userName){
               if(this.password.length<8||this.password.length>16){//判断密码位数
                      this.passwordCue = '密码位数有误'
               }else{
                  this.$axios.post(
                        '/api/login/do_login',data
                     ).then((res)=>{
                        //判断是否成功登陆
                        console.log(res)
                        if(res.data.code == 0){
                           if(res.data.data){
                              this.msgCue = '登录成功'
                           }
                           alert(this.msgCue)
                           this.setUserName(this)
                           // this.$router.push({name:'main'})//登录成功到首页
                           window.history.go(-1)
                        }else{
                           this.userNameCue = '帐号或密码错误，请重新输入或者找回密码'
                        }
                     })
               }
         }else{
            this.userNameCue = '请输入账号'
         }

    },
    loginWXEvent(){
            let data = new FormData();
            data.append('mobile',this.userName);
             data.append('unionid',this.$route.params.unionid);
            data.append('password',this.$md5.update(this.password).digest('hex'));
         //判断用户名是否为空
         this.userNameCue = ""
         if(this.userName){
               if(this.password.length<8||this.password.length>16){//判断密码位数
                      this.passwordCue = '密码位数有误'
               }else{
                  this.$axios.post(
                        '/api/user/registerBindWechatHasAccount',data
                     ).then((res)=>{
                        //判断是否成功登陆
                        console.log(res)
                        if(res.data.code == 0){
                           this.msgCue = res.data.data
                           this.setUserName(this)
                           this.$router.push({name:'main'})//登录成功到首页
                           this.setFrameData('')//状态管理控制弹框
                        }else{
                           this.userNameCue = '手机号/账号/用户名不存在'
                        }
                     })
               }
         }else{
            this.userNameCue = '请输入账号'
         }

    },
    getLoginUrl(){//获取WX跳转接口
         this.setWX('skip')
         this.$axios.get(
         '/api/weChat/getLoginUrl'
         ).then((res)=>{
         if(res.data.code ==0){
             window.location.href = res.data.data
         }
      })
    }
  },
 
  mounted() {

      (function(){
            if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
               var html = document.getElementsByTagName('html')[0];
               var width = html.getBoundingClientRect().width;
               var height = document.documentElement.clientHeight;
               console.log(height)
               // var width = html.clientWidth;
               html.style.fontSize = 100/(width*0.01) + 'vw';
                this.configTest = 'mobile'
                this.mobileHeight = height-152
            }else{
               var height = document.documentElement.clientHeight;
               this.mobileHeight = height-152
               this.configTest = 'pc'
            }
      }.bind(this))()

   this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
  


  }
}
</script>
 
<style lang="less">
  .weicon{
     background:url(../../static/images/weicon1.png) center/100%
  }

  .weicon:hover{
     background:url(../../static/images/weicon2.png) center/100%
  }

  input{
    width:100%;
    font-size:14px;
    line-height:30px;
    border:0;
    border-bottom:1px solid gray;
  }


   .grid-content {
      border-radius: 4px;
      min-height:50px;
  }

   .mobile{
            .grid-content {
                  border-radius: .04rem;
                  min-height:.18rem;
               }
   } 


    .mobile .el-row {
    margin-bottom: 0.1rem!important;
   }
    .mobile input{
    width:100%;
    font-size:0.16rem;
    line-height:.3rem;
    border:0;
    border-bottom:1px solid gray;
  }
</style>