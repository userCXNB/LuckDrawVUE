<template>
  <div>
         <div :style="'text-align:center;height:'+mobileHeight+'px'" v-if="configTest == 'pc'">
               <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">用户注册</div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <input v-model="userName" @focus="nickOpen()" placeholder="请输入用户名,设置后不可更改"/>
                        <p>{{userNameCue}}</p>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <input v-model="mobile" placeholder="请输入手机号"/>
                        <span>{{mobileCue}}</span>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <input v-model="password" type="password" placeholder="密码(8-16仅限数字英文混合,不区分大小写)"/>
                        <span>{{passwordCue}}</span>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>   
               <el-row>
                     <el-col :span="8" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
                     <el-col :span="8" style="text-align:center;border-bottom:1px solid gray;border-radius:0px;"><div class="grid-content bg-purple-light">
                           <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                           <span style="width:50%;cursor:pointer" v-show="show" @click="codeEvent">发送验证码</span>
                           <span v-show="!show" class="count">{{count}} s</span>
                           <p>{{codeCue}}</p>
                     </div></el-col>
                     <el-col :span="8" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="checked">
                           <span>阅读并接受《</span>
                           <a href="">用户协议</a>
                           <span>》及《</span>
                           <a href="">隐私保护声明</a>
                           <span>》</span>
                        </el-checkbox>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>    
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <el-button type="primary" v-show="$route.params.type !== 'wx'" style="width:80%;" @click="registerEvent">注册</el-button>
                        <el-button type="primary" v-show="$route.params.type == 'wx'" style="width:80%;" @click="registerWXEvent">注册并绑定微信</el-button>
                        <p>{{msgCue}}</p>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <div v-show="$route.params.type !== 'wx'">
                           <span>已有账号?</span>
                           <router-link :to="{name:'login',params:{type:'pc'}}">去登录</router-link>
                        </div>
                         <router-link tag="div" v-show="$route.params.type == 'wx'" :to='{name:"login",params:{type:"wx",unionid:$route.params.unionid}}'>关联已有账号</router-link>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>            
         </div>
         <div class="mobile" :style="'font-size:.12rem;position:relative;text-align:center;height:'+mobileHeight+'px'" v-if="configTest == 'mobile'">
            <div style="position:absolute;top:.2rem;bottom:0;left:0;right:0;margin:0 auto;">
               <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">手机注册</div></el-col>
               </el-row>
               <el-row v-show="$route.params.type !== 'wx'">
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">
                        <input v-model="userName" placeholder="请输入用户名,设置后不可更改"/>
                        <p>{{userNameCue}}</p>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">
                        <input v-model="mobile" placeholder="请输入手机号"/>
                        <span>{{mobileCue}}</span>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="16"><div class="grid-content bg-purple-light">
                        <input v-model="password" type="password" placeholder="密码(8-16仅限数字英文混合,不区分大小写)"/>
                        <span>{{passwordCue}}</span>
                     </div></el-col>
                  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
               </el-row>   
               <el-row>
                     <el-col :span="4" style="height:.18rem;"><div class="grid-content bg-purple"></div></el-col>
                     <el-col :span="16" style="text-align:center;border-bottom:1px solid gray;border-radius:0px;"><div class="grid-content bg-purple-light">
                           <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                           <span style="width:50%;cursor:pointer" @click="codeEvent">发送验证码</span>
                           <p>{{codeCue}}</p>
                     </div></el-col>
                     <el-col :span="4" style="height:.18rem;"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <el-checkbox v-model="checked" class="checkbox">
                           <span>阅读并接受《</span>
                           <a href="">用户协议</a>
                           <span>》及《</span>
                           <a href="">隐私保护声明</a>
                           <span>》</span>
                        </el-checkbox>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>    
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <el-button type="primary" v-show="$route.params.type !== 'wx'" style="width:80%;" @click="registerEvent">注册</el-button>
                        <el-button type="primary" v-show="$route.params.type == 'wx'" style="width:80%;" @click="registerWXEvent">注册并绑定微信</el-button>
                        <p>{{msgCue}}</p>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <div v-show="$route.params.type !== 'wx'">
                           <span>还没有账号?</span>
                           <router-link :to="{name:'login',params:{type:'pc'}}">去登录</router-link>
                        </div>
                        <div v-show="$route.params.type == 'wx'">
                           关联已有账号
                        </div>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
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
        mobileHeight:'',
        mobile:'',
        password:'',
        code:'',
        codeCue:'',
        userNameCue:'',
        mobileCue:'',
        passwordCue:"",
        msgCue:'',
        userNameCheckDebounce:'',
        checked:false,
        configTest:'pc',
        show: true,
         count: '',
         timer: null,

    }
  },
  watch: {
    userName(){
        this.userNameCheckDebounce()
    },
    mobile(){
       if(this.mobile.length == 11){
         this.mobileCue = ''
       let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
          if(!reg.test(this.mobile)){
             this.mobileCue = '请输入正确的手机号'
          }
       }

    },
    password(){
       
       if(8 <= this.password.length & this.password.length <= 16){
         this.passwordCue = ''
       let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
          if(!reg.test(this.password)){
             this.passwordCue = '格式不正确'
          }
       }
    },
    code(){
       if(this.code.length <= 6){
         this.codeCue = ''
       let reg=/(^[\-0-9][0-9]*(.[0-9]+)?)$/;
          if(!reg.test(this.code)){
             this.codeCue = '请输入纯数字'
          }
       }
    }
  },
  methods: {
    ...mapActions(['setUserName','setFrameData']),
     nickOpen(){
         console.log(234)
         this.$message({message:'用户名字数限制： 4-20个字符（包括汉字、数字、字母、下划线，每个汉字为2字符）',
                  duration:5000     
         });
     },
     countCharacters(str,size){ 
     var totalCount = 0;  
     var newStr = ""; 
     for (var i=0; i<str.length; i++) {  
         var c = str.charCodeAt(i);  
         if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
             totalCount++;  
         }else {     
             totalCount+=2;  
         }  
         if(totalCount<size){ 
             newStr = str.substring(0,i+1); 
         }else{ 
             return newStr; 
         } 
     } 
     return newStr; 
     },
    userNameCheck:function(){
        let data = new FormData();
         data.append('userName',this.userName);
         this.userName = this.countCharacters(this.userName,21)
         var reg = /^[\u4e00-\u9fa5\w]{4,40}$/;
         this.userNameCue = ''
         if(reg.test(this.userName)){
            this.$axios.post(
               '/api/user/userNameCheck',data
            ).then((res)=>{
               console.log(res)
               if(res.data.code !== 0){
               this.userNameCue = res.data.msg
               }
            })
         }
    },
    registerEvent(){
         let data = new FormData();
         data.append('userName',this.userName);
         data.append('password', this.$md5.update(this.password).digest('hex'));
         data.append('mobile',this.mobile);
         data.append('code',this.code);
          if(this.userName!==''&this.password!==''&this.mobile!==''&this.code!==''&this.checked == true){//判断所有输入框不为空
              if(this.mobile.length<11||this.mobile.length>11){//判断手机号位数
                  this.mobileCue = '手机号位数有误'
              }else{
                  if(this.password.length<8||this.password.length>16){//判断密码位数
                      this.passwordCue = '密码位数有误'
                  }else{
                        if(this.code.length<6||this.code.length>6){//判断验证码位数
                           this.codeCue = '验证码位数有误'
                        }else{
                               this.$axios.post(
                                 '/api/user/register',data
                               ).then((res)=>{
                                  console.log(res)
                                 if(res.data.code == 0){
                                      if(res.data.data){
                                          this.msgCue = '注册成功'
                                      }
                                      alert(this.msgCue)
                                    //   this.$router.push({name:'main'})//注册成功到首页
                                    window.history.go(-1)
                                      this.setUserName(this)
                                 }else{
                                      this.msgCue = res.data.msg
                                 }
                               })
                        }
                  }
              }
                  
          }else{
             alert('输入框不可为空')
          }

    },
    registerWXEvent(){
       
         let data = new FormData();
         data.append('userName',this.userName);
         data.append('password', this.$md5.update(this.password).digest('hex'));
         data.append('mobile',this.mobile);
         data.append('code',this.code);
         data.append('unionid',this.$route.params.unionid);
         console.log(this.$route.params.unionid)
          if(this.password!==''&this.mobile!==''&this.code!==''&this.checked == true){//判断所有输入框不为空
              if(this.mobile.length<11||this.mobile.length>11){//判断手机号位数
                  this.mobileCue = '手机号位数有误'
              }else{
                  if(this.password.length<8||this.password.length>16){//判断密码位数
                      this.passwordCue = '密码位数有误'
                  }else{
                        if(this.code.length<6||this.code.length>6){//判断验证码位数
                           this.codeCue = '验证码位数有误'
                        }else{
                               this.$axios.post(
                                 '/api/user/registerBindWechat',data
                               ).then((res)=>{
                                  console.log(res)
                                 if(res.data.code == 0){
                                      this.msgCue = res.data.data
                                      this.setUserName(this)
                                      this.$router.push({name:'main'})//注册成功到首页
                                      this.setFrameData('')//状态管理控制弹框
                                 }else{
                                      this.msgCue = res.data.msg
                                 }
                               })
                        }
                  }
              }
                  
          }

    },
    getCode(){
     const TIME_COUNT = 30;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
   },
    codeEvent(){
       if(this.mobile.length<11||this.mobile.length>11){
           this.mobileCue = '请输入正确的手机号'
       }else{
            this.getCode()
            let data = new FormData();
            data.append('mobile',this.mobile);
            this.$axios.post(
               '/api/common/getCode',data
            ).then((res)=>{
               console.log(res)
            })
       }

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
     console.log( this.$route.params.type)
     this.userNameCheckDebounce = this.lodash.debounce(this.userNameCheck, 100)//防抖动
  }
}
</script>
 
<style lang="less">
  input{
    width:100%;
    font-size:14px;
    line-height:30px;
    border:0;
    border-bottom:1px solid gray;
  }
  .mobile input{
    width:100%;
    font-size:.16rem;
    line-height:.15rem;
    border:0;
    border-bottom:1px solid gray;
  }

   .mobile .grid-content {
    border-radius: .04rem;
    min-height: .18rem;
   }

   .grid-content {
    border-radius: 4px;
    min-height: 50px;
   }

    .mobile .el-row {
    margin-bottom: 0.1rem!important;
   }

  .mobile .el-checkbox__label {
    padding-left: 0px;
    font-size: 0.06rem!important; 
   }
</style>