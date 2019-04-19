<template>
  <div style="text-align:center;">
      <el-row>
         <el-col :span="24"><div class="grid-content bg-purple-dark">用户登录</div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <input v-model="userName" placeholder="请输入手机号/账号/用户"/>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <input v-model="password" placeholder="请输入密码"/>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <a href="">忘记密码</a>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>     
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                 <el-button type="primary" style="width:80%;" @click="loginEvent">登录</el-button>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>    
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <div>
                   <span>还没有账号?</span>
                   <router-link to="register">去注册</router-link>
                </div>
            </div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
         <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
         <el-col :span="8"><div class="grid-content bg-purple-light">
                <div>
                   <span>社交账号登录</span>
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
        password:''
    }
  },
  watch: {

  },
  methods: {
    loginEvent(){
         let data = new FormData();
         data.append('userName',this.userName);
         data.append('password',this.password);
          this.$axios.post(
            'api//login/do_login',data
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