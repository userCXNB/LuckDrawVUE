<template>
   <div>
         <div style="text-align:center;" v-if="configTest == 'pc'">
               <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">重置密码</div></el-col>
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
                        <input v-model="password" type="password" placeholder="密码(8-16仅限数字英文,不区分大小写)"/>
                        <span>{{passwordCue}}</span>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>   
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8" style="text-align:center;border-bottom:1px solid gray;border-radius:0px;"><div class="grid-content bg-purple-light">
                     <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                     <span style="width:50%;" v-show="show" @click="codeEvent">发送验证码</span>
                     <span v-show="!show" class="count">{{count}} s</span>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>    
               <el-row>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple-light">
                        <el-button type="primary" style="width:80%;margin:20px 0;" @click="resetEvent">重置密码</el-button>
                           <p>{{msgCue}}</p>
                     </div></el-col>
                  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
               </el-row>               
         </div>
         <div class='mobile' :style="'font-size:.12rem;position:relative;text-align:center;height:'+mobileHeight+'px'" v-if="configTest == 'mobile'">
            <div style="position:absolute;top:.2rem;bottom:0;left:0;right:0;margin:0 auto;">
               <el-row>
                  <el-col :span="24"><div class="grid-content bg-purple-dark">重置密码</div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <input v-model="mobile" placeholder="请输入手机号"/>
                        <span>{{mobileCue}}</span>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <input v-model="password" type="password" placeholder="密码(8-16仅限数字英文,不区分大小写)"/>
                        <span>{{passwordCue}}</span>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>   
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;border-radius:0px;"><div class="grid-content bg-purple-light">
                     <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                     <span style="width:50%;" @click="codeEvent">发送验证码</span>
                     <p>{{codeCue}}</p>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row>    
               <el-row>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                        <el-button type="primary" style="width:80%;" @click="resetEvent">重置密码</el-button>
                           <p>{{msgCue}}</p>
                     </div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
               </el-row> 
            </div>
         </div>
   </div>

</template>

<script>
export default {
  data(){
    return {
        mobile:'',
        mobileCue:'',
        password:'',
        passwordCue:'',
        code:'',
        codeCue:'',
        msgCue:'',
        configTest:'pc',
        show: true,
        count: '',
        timer: null,
    }
  },
  watch: {
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
                  console.log(res.data)
               })
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
        resetEvent(){
         let data = new FormData();
         data.append('mobile',this.mobile);
         data.append('password', this.$md5.update(this.password).digest('hex'));
         data.append('code',this.code);
         if(this.password!==''&this.mobile!==''&this.code!==''){//判断所有输入框不为空
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
                                '/api/user/reSetPassword',data
                              ).then((res)=>{
                                 if(res.data.code == 0){
                                       alert(res.data.data)
                                      this.$router.push({name:'main'})//重置成功到首页
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
                this.mobileHeight = height-151-69
            }else{
               this.configTest = 'pc'
            }
      }.bind(this))()
      
     this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})

     

  }
}
</script>
 
<style lang="less" scoped>
  input{
    width:100%;
    font-size:13px;
    line-height:30px;
    border:0;
    border-bottom:1px solid gray;
  }
    .grid-content {
    border-radius: 4px;
    min-height: 50px;
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
    font-size:0.12rem;
    line-height:.3rem;
    border:0;
    border-bottom:1px solid gray;
  }

</style>