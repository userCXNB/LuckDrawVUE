<template>
   <div class="set_home_right" style="padding:0px 97px 0 30px;">
      <div style="font-size:30px;line-height:61px;margin-top:55px;">{{detail.title}}</div>
      <!-- <el-button plain @click.native="toHref">前往资源</el-button> -->
      <div v-show="userName == ''">
         小站提示:若获取该资源,请先
         <el-button plain @click.native="register">
             注册
         </el-button>
         并
         <el-button plain @click.native="login">
           登录
         </el-button>
      </div>
      <div v-show="userName !== ''">
                    <el-table
                    :data="urlData"
                    border
                    style="width: 100%"
                    center
                    >
                    <el-table-column
                    prop="id"
                    label="序号"
                    width="80">
                        <template slot-scope="scope">
                            {{scope.$index+1}}
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="url"
                    label="下载地址">
                    </el-table-column>
                    <el-table-column
                    prop="password"
                    label="提取码"
                    width="180">
                    </el-table-column>                   
                </el-table>
      </div>

      <div style="font-size:15px;line-height:22px;margin:35px 0 48px;color:gray">
        {{detail.notes}}
      </div>
      <div class="set_home_left_title">数据说明</div>
      <el-table
      :data="tableData"
      :show-header="false"
      border
      style="width: 100%">
          <el-table-column
            prop="date"
            label="介绍"
            width="180"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="详情"
            >
          </el-table-column>
    </el-table>
     <el-button plain @click="DswitchStatus" style="float:right;margin-top:10px;">返回</el-button>
   </div>
</template>
 
<script>
import {mapGetters,mapState} from "vuex";
export default {
  props:['detail','DswitchStatus'],
  data() {
    return {
            tableData: [{
                  date: '资源方',
                  name: ''
                },{
                  date: '数据来源',
                  name: ''
                },{
                  date: '数据领域',
                  name: ''
                },{
                  date: '数据格式类型',
                  name: ''
                },{
                  date: '维护者',
                  name: ''
                },{
                  date: '版本',
                  name: ''
                },{
                  date: '更新时间',
                  name: ''
                },{
                  date: '发布日期',
                  name: ''
                }],
          urlData:[]//储存下载地址提取码
    }
  },
  watch: {

  },
  computed: {
      ...mapState([//状态管理数据时时变化
          'userName'
      ]),
  },
  methods: {
    ...mapGetters(['getUserName']),
    toHref(){
      window.location.href =this.detail.url
    },
    goBack () {
        // history.pushState(null, null, document.URL);
        this.DswitchStatus()
        console.log("点击了浏览器的返回按钮");
        // window.history.back();
    },
    login() {
     history.pushState({detail:this.detail}, null, document.URL);
     window.history.forward(1)//原理是利用JS产生一个“前进”的动作，以抵消后退功能，可以不需要考虑用户连点两次或多次“后退”的情况
     this.$router.push({name:'login',params:{type:'pc',unionid:'pc'}})

    },
    register() {
     history.pushState({detail:this.detail}, null, document.URL);
     window.history.forward(1)
     this.$router.push({name:'register',params:{type:'pc',unionid:'pc'}})
    },
    getBDurl(){
       this.$axios.get(
         '/api/openData/v1/dataResource?bussinessKey='+this.detail.name
         ).then((res)=>{
         if(res.data.code ==0){
            console.log(res)
         }
      })
    }
  },
  mounted() {
     this.tableData[0].name = this.detail.organization.title
     this.tableData[1].name = this.detail.author
     this.tableData[2].name = this.detail.groups[0].title
     this.tableData[3].name = this.detail.resources[0].format
     this.tableData[4].name = this.detail.maintainer
     this.tableData[5].name = this.detail.version
     this.tableData[6].name = this.detail.resources[0].last_modified
     this.tableData[7].name = this.detail.resources[0].created
     console.log(history.state)

       if (window.history && window.history.pushState) {
        // 向历史记录中插入了当前页
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
      }
        this.$axios.get(//获取下载地址提取码
         '/api/openData/v1/dataResource?bussinessKey='+this.detail.name
         ).then((res)=>{
         if(res.data.code ==0){
            this.urlData = res.data.data
         }
      })
      this.$root.Bus.$emit('industryDetail',false)
  }, 
  destroyed () {
      window.removeEventListener('popstate', this.goBack, false);
        this.$root.Bus.$emit('industryDetail',true)
  }
}
</script>
 
<style lang="less" scoped>
    .set_home_right{
       width:670px;
    }
         .set_home_left_title{
        margin:15px 0 4px;
        font-size:20px;
        background:#52e4cd;
        text-align:center;
        line-height:54px;
        color:#fff;
    }
</style>