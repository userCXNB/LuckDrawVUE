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
            <el-col :span="12" style="text-align:center;border-bottom:1px solid red;"><div class="grid-content bg-purple-light">
                  <span style="margin-right:4px;">+86</span>|
                  <input v-model="input" style="border:0;width:80%;" placeholder="请输入手机号/账号/用户"/>
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

