<template>
  <div style="text-align:center;">
      <el-row>
         <el-col :span="24"><div class="grid-content bg-purple-dark">用户注册</div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <input v-model="userName" placeholder="请输入用户名,设置后不可更改"/>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <input v-model="mobile" placeholder="请输入手机号"/>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                 <input v-model="password" placeholder="密码(8-16仅限数字英文,不区分大小写)"/>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>   
        <el-row>
            <el-col :span="8" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="8" style="text-align:center;border-bottom:1px solid red;border-radius:0px;"><div class="grid-content bg-purple-light">
                  <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                  <span style="width:50%;" @click="codeEvent">发送验证码</span>
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
                 <el-button type="primary" style="width:80%;" @click="registerEvent">注册</el-button>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row> 
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <div>
                   <span>还没有账号?</span>
                   <router-link to="login">去登录</router-link>
                </div>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>            
  </div>
</template>

<script>
export default {
  data(){
    return {
        userName:'',
        password:'',
        mobile:'',
        code:''
    }
  },
  watch: {
    userName(){
         let data = new FormData();
         data.append('userName','999999');
         this.$axios.post(
            'api/user/userNameCheck',data
          ).then((res)=>{
            console.log(res)
          })
    }
  },
  methods: {
    registerEvent(){
         let data = new FormData();
         data.append('userName',this.userName);
         data.append('password',this.password);
         data.append('mobile',this.mobile);
         data.append('code',this.code);
          this.$axios.post(
            'http://10.101.8.143:80/user/register',data
          ).then((res)=>{
            console.log(res)
          })
    },
    codeEvent(){
         let data = new FormData();
         data.append('mobile',this.mobile);
         this.$axios.post(
            'http://10.101.8.143:80/common/getCode',data
          ).then((res)=>{
            console.log(res)
          })
    }
  },
 
  mounted() {
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
    border-bottom:1px solid red;
  }
    .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>