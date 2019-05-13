<template>
      <el-dialog
        title=""
        :visible.sync="centerDialogVisible"
        width="30%"
        :closeOnClickModal = false
         @close="setFrameData('')"
        center>
        <el-row>
           <el-col :span="24" style="height:130px;text-align:center;">
                <div style="width:90px;height:90px;display:inline-block;border-radius:45px;">
                    <img :src="head_url" style="width:100%;height:100%;" alt="">
                </div>
                <p>{{nickname}}</p>
           </el-col>
        </el-row>
        <el-row>
           <el-col :span="7" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="10" style="height:30px;">
               <div class="grid-content bg-purple">
                   <span>您尚未关联开放数据网账号</span>
               </div>
           </el-col>
           <el-col :span="7" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row style="margin-bottom:20px;">
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;"><div class="grid-content bg-purple-light">
                  <el-button style="width:100%;" plain>
                       <router-link tag="div" :to='{name:"register",params:{type:"wx",unionid:unionid}}'>关联新账号</router-link>
                  </el-button>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;"><div class="grid-content bg-purple-light">
                   <el-button style="width:100%;" plain>
                       <router-link tag="div" :to='{name:"login",params:{type:"wx",unionid:unionid}}'>关联已有账号</router-link>
                   </el-button>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-dialog>
</template>
<script>
import {mapActions} from "vuex";
export default {
   props:{
    centerDialogVisible:Boolean,
   },
    data(){
     return {
         password:'',
         code:'',
         unionid:'wx',
         head_url:'',
         nickname:'',
        // centerDialogVisible: true,
        }
    },
    methods:{
       ...mapActions(['setFrameData']),
       codeEvent(){
          this.$axios.post(
            '/api/user/getCode'
          ).then((res)=>{
              console.log(res.data)
          })
       },
       sfyzEvent(){
         let data = new FormData();
         data.append('password',this.password);
         data.append('code',this.code);
          this.$axios.post(
            '/api/user/changePassword',data
          ).then((res)=>{
              console.log(res.data)
          })
       }
    },
    mounted(){
        console.log(this.centerDialogVisible)
        this.unionid = JSON.parse(localStorage.getItem("weChatState")).data.unionid
        this.head_url = JSON.parse(localStorage.getItem("weChatState")).data.head_url
        this.nickname = JSON.parse(localStorage.getItem("weChatState")).data.nickname
        console.log(this.unionid)
    }

}
</script>
<style lang='less' scoped>
 .el-col{
     border-radius:0px;
 }
</style>

