<template>
      <el-dialog
        title="身份验证"
        :visible.sync="centerDialogVisible"
        width="30%"
        :closeOnClickModal = false
        center>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid red;"><div class="grid-content bg-purple-light">
                  <input v-model="input" style="border:0;" placeholder="使用手机8888888验证"/>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid red;"><div class="grid-content bg-purple-light">
                  <input v-model="input" style="border:0;" placeholder="设置新密码(8-16位)"/>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12" style="text-align:center;border-bottom:1px solid red;"><div class="grid-content bg-purple-light">
                  <input v-model="input" style="border:0;width:50%;" placeholder="请输入验证码"/>
                  <a href="" style="width:50%;">发送验证码</a>
              </div></el-col>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-row>
            <el-col :span="6" style="height:30px;"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">
                <el-button type="primary" style="width:80%;" @click="centerDialogVisible = false">确 定</el-button>
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
        // centerDialogVisible: true,
        }
    },
    methods:{
       ...mapActions(['setFrameData']),
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

