<template>
  <div style="text-align:center;">
      <el-row>
         <el-col :span="24"><div class="grid-content bg-purple-dark">首页跳转</div></el-col>
      </el-row>           
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data(){
    return{

    }
  },
  methods:{
  ...mapActions(['setFrameData']),
  },
  mounted(){
     this.$store.dispatch('setSwitchStatus',{banner:false,menu:false})
              let data = new FormData();
              function getUrlParms(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                console.log(r,27)
                if(r!=null)
                return unescape(r[2]);
                return null;
                }
              var code = getUrlParms("code");
              data.append('code',code);
                      this.$axios.post(
                        '/api/weChat/getCode',data
                     ).then((res)=>{
                        console.log(res)
                        if(res.data.code == 0){
                            localStorage.setItem("weChatState",JSON.stringify(res.data))
                            this.$router.push({name:'main'})
                            this.setFrameData('wxgl')//状态管理控制弹框
                        }

                     })
               
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
    min-height: 36px;
  }
</style>