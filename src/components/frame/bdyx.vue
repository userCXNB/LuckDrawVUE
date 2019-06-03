<template>
      <el-dialog
        title="绑定邮箱"
        :visible.sync="centerDialogVisible"
        width="30%"
        :closeOnClickModal = false
        @close="setFrameData('')"
        center>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid gray;"><div class="grid-content bg-purple-light">
                  <!-- <span style="margin-right:4px;">+86</span>| -->
                  <input v-model="email" style="border:0;width:80%;" placeholder="请输入邮箱"/>
                  <p>{{emailCue}}</p>
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
                <el-button type="primary" style="width:80%;" @click="bdyxEvent">确 定</el-button>
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
       email:'',
       emailCue:'',
       code:'',
        // centerDialogVisible: true,
         show: true,
         count: '',
         timer: null,
        }
    },
    methods:{
       ...mapActions(['setFrameData']),
       bdyxEvent(){
         let data = new FormData();
         data.append('email',this.email);
         data.append('code',this.code);
         if(this.email!==''&this.code!==''){//判断所有输入框不为空
                this.$axios.post(
                    '/api/user/updateUserEmail',data
                ).then((res)=>{
                    if(res.data.code == 0){
                        alert(res.data.data)
                        this.$root.Bus.$emit('bdyx')
                        this.setFrameData('')//不加''会出现多个accountSettings页面
                    }
                })
         }else{
            alert('输入框不可为空')
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
        if(this.email.length<1){
            this.emailCue = '请输入邮箱'
        }else{  
                this.getCode()
                let data = new FormData();
                data.append('email',this.email);
                this.$axios.post(
                    '/api/common/getEmailCode',data
                ).then((res)=>{})
         }
      }
    },
    mounted(){
        console.log(this.centerDialogVisible)
        console.log(this.$root)

    }

}
</script>
<style lang='less' scoped>
 .el-col{
     border-radius:0px;
 }
</style>

