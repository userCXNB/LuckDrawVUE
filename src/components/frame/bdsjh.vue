<template>
      <el-dialog
        title="绑定新手机号"
        :visible.sync="centerDialogVisible"
        width="30%"
        :closeOnClickModal = false
        @close="setFrameData('')"
        center>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                  <span style="margin-right:4px;">+86</span>|
                  <input v-model="mobile" style="border:0;width:80%;" placeholder="请输入手机号/账号/用户"/>
                  <p>{{mobileCue}}</p>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                  <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                  <span style="width:50%;" v-show="show" @click="codeEvent">发送验证码</span>
                  <span v-show="!show" class="count">{{count}} s</span>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <el-button type="primary" style="width:80%;" @click="bdsjhEvent">确 定</el-button>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </span>
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
         mobile:'',
         mobileCue:'',
         code:'',
        // centerDialogVisible: true,
         show: true,
         count: '',
         timer: null,
        }
    },
    methods:{
       ...mapActions(['setFrameData']),
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
                        console.log(res.data)
                    })
                }
        },
        bdsjhEvent(){
         let data = new FormData();
         data.append('mobile',this.mobile);
         data.append('code',this.code);
          this.$axios.post(
            '/api/user/userResetMobile',data
          ).then((res)=>{
              this.code = ''
              if(res.data.code == 0){
                  alert(res.data.data)
                  this.$root.Bus.$emit('bdsjh')
                  this.setFrameData('')
              }else{
                  alert(res.data.msg)
              }
          })
        }
    },
    mounted(){
        console.log(this.centerDialogVisible)
    }

}
</script>
<style lang='less' scoped>
 .el-col{
     border-radius:0px;
 }
</style>

