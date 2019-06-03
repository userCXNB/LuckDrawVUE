<template>
      <el-dialog
        title="身份验证"
        :visible.sync="centerDialogVisible"
        width="30%"
        :closeOnClickModal = false
         @close="setFrameData('')"
        center>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                   <div>{{'使用手机'+mobile+'验证'}}</div>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                  <input v-model="password" type="password" style="border:0;width:100%;" placeholder="设置新密码(8-16位)"/>
                  <span>{{passwordCue}}</span>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                  <input v-model="code" style="border:0;width:50%;" placeholder="请输入验证码"/>
                  <span style="width:50%;cursor:pointer" v-show="show" @click="codeEvent">发送验证码</span>
                  <span v-show="!show" class="count">{{count}} s</span>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <el-button type="primary" style="width:80%;" @click="sfyzEvent">确 定</el-button>
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
         password:'',
         passwordCue:"",
         code:'',
         mobile:'',
        // centerDialogVisible: true,
        show: true,
         count: '',
         timer: null,
        }
    },
    watch:{
            password(){
            if(8 <= this.password.length & this.password.length <= 16){
                this.passwordCue = ''
            let reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
                if(!reg.test(this.password)){
                    this.passwordCue = '格式不正确'
                }
            }
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
          this.getCode()
          this.$axios.post(
            '/api/user/getCode'
          ).then((res)=>{
              console.log(res.data)
          })
       },
       sfyzEvent(){
         let data = new FormData();
         data.append('password',this.$md5.update(this.password).digest('hex'));
         data.append('code',this.code);
         if(this.password!==''&this.code!==''){//判断所有输入框不为空
                if(this.password.length<8||this.password.length>16){//判断密码位数
                      this.passwordCue = '密码位数有误'
                  }else{
                        this.$axios.post(
                            '/api/user/changePassword',data
                        ).then((res)=>{
                            if(res.data.code == 0){
                                alert(res.data.data)
                                this.$root.Bus.$emit('sfyz')
                                this.setFrameData('')
                            }else{
                                alert(res.data.msg)
                            }
                        })
                }
         }else{
             alert('输入框不可为空')
         }
       }
    },
    mounted(){
        console.log(this.centerDialogVisible)
        this.$axios.get(//无奈之举获取mobile
            '/api/user/getUserAccountDetail'
        ).then((res)=>{
            console.log(res.data)
            this.mobile = res.data.data.mobile
        })
    }

}
</script>
<style lang='less' scoped>
 .el-col{
     border-radius:0px;
 }
</style>

