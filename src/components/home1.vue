<template>
    <div>
        <div style="font-size:18px;line-height:61px;color:gray">我的位置:
          <router-link to='/'>首页</router-link>
          >
          <span @click="DswitchStatus" v-if='groupIndex == -1'>{{JSON.parse($route.params.channel).name}}</span>
          <span @click="DswitchStatus" v-if='groupIndex != -1'>{{groupList[groupIndex].name}}</span>
          <span  v-if='!status'>
          >{{detail.title}}
          </span>
          </div>
        <div class="set_home">
          <div class="set_home_left">
            <div class="set_home_left_title" @click="group(-1)">资源方</div>
            <el-dropdown style="width:300px;">
              <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item  style="text-align:center" v-for="(item,index) in groupList" :key="index"  @click.native="group(index)"
                >{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div style="padding:17px 21px 71px;">
              <dl v-if='groupIndex == -1'>
                <td>
                  <img v-if="JSON.parse(this.$route.params.channel).Ename !='*'" :src="'../../static/images/city/'+JSON.parse($route.params.channel).src" style="width:100%;" alt="">
                  <img v-if="JSON.parse(this.$route.params.channel).Ename =='*'" src="../../static/images/city/1.jpg" style="width:100%;" alt="">
                </td>
                <dd style="border-top:2px solid #52e4cd;margin-top:33px;position:relative">
                    <div style="position:absolute;top:-21px;left:81px;background:#fff;text-align:center;color:#52e4cd;width:95px;">
                        <marquee v-if="JSON.parse(this.$route.params.channel).Ename !='*'" style="font-size:26px;line-height:26px;">{{JSON.parse(this.$route.params.channel).name}}</marquee>
                        <marquee v-if="JSON.parse(this.$route.params.channel).Ename =='*'" style="font-size:26px;line-height:26px;">{{JSON.parse(this.$route.params.channel).name}}</marquee>
                        <div style="font-size:10px;line-height:20px;">{{JSON.parse(this.$route.params.channel).Ename}}</div>
                    </div>
                </dd>
              </dl>

              <dl v-if='groupIndex != -1'>
                <td>
                  <img :src="'../../static/images/city/'+groupList[groupIndex].src" style="width:100%;" alt="">
                </td>
                <dd style="border-top:2px solid #52e4cd;margin-top:33px;position:relative">
                    <div style="position:absolute;top:-21px;left:81px;background:#fff;text-align:center;color:#52e4cd;width:95px;">
                        <marquee style="font-size:26px;line-height:26px;">{{groupList[groupIndex].name}}</marquee>
                        <div style="font-size:10px;line-height:20px;">{{groupList[groupIndex].Ename}}</div>
                    </div>
                </dd>
              </dl>

            </div>
            <div class="set_home_left_title" @click="menu(-1)">数据领域</div>
            <el-button plain type="info" class="menuList" v-for="(item,index) in menuList" :key="index" @click.native="menu(index)"
             :style='index==menuindex? "width:300px;margin-left:0px;margin-bottom:2px;background:#52e4cd;":"width:300px;margin-left:0px;margin-bottom:2px;background:#fff;"'>
             {{item.name}}
             </el-button>
          </div>
          <homeDetail1  v-if='status' :switchStatus='switchStatus' :menu='menuList[menuindex]' :group="groupList[groupIndex]"/>
          <detail1 v-if='!status' :detail='detail' :DswitchStatus='DswitchStatus'/>
      </div>   
    </div>
 
</template>

<script>
import homeDetail1 from '@/components/homeDetail1'
import detail1 from '@/components/detail1'
export default {
  data () {
    return { 
      menuList:[ 
             {name:"计算机视觉",Ename:"cv"},
             {name:"自然语言处理",Ename:"nlp"},
             {name:"语音",Ename:"voice"},
             {name:"医疗",Ename:"medical"},
             ],
      groupList:[
          {Ename:"ai",name:"人工智能",icon:"city_beijing",src:'rgzn.jpg'},
        ],
      menuindex:-1,
      groupIndex:0,
      detail:{},
      loadstatus:true,
      status:true,
    }
  },
      components:{
      homeDetail1,detail1
    },
    // watch:{
    //   menuindex(){
    //     console.log(this.menuindex)
    //   }
    // },
    methods: {
      switchStatus (data) {
          this.status=false
          this.detail = data
      },
      DswitchStatus(){
         this.status = true
      },
      menu(ind){
        this.DswitchStatus()//不加触发不了数据领域
        if(ind == this.menuindex){
           this.menuindex = -1
        }else{
           this.menuindex = ind
        }
      },
      group(ind){
        console.log(ind)
         this.groupIndex = ind
         this.menuindex = -1
         this.DswitchStatus()
         this.loadstatus = false
      }
    },
    mounted () {
      console.log(history.state)
      if(history.state){
        this.status = false
        this.detail = history.state.detail
      }
      // this.$store.commit("SET_STATE")
      // this.$store.dispatch("setState")
    }
}
</script>

<style lang="less" scoped>
        #app{
          height:100%;
        }
        .set_home{
         display:flex;
         justify-content:space-between;
              .set_home_left{
                 width: 300px;
                 .set_home_left_title{
                    margin:15px 0 4px;
                    margin-top:0px;
                    font-size:20px;
                    cursor:pointer;
                    background:#52e4cd;
                    text-align:center;
                    line-height:54px;
                    color:#fff;
                    .menuList{
                      
                    }
                 }
                 .el-button.is-plain:hover{
                   background:#52e4cd!important;
                 }
                 .el-button.is-plain:focus{
                   border: 1px solid #DCDFE6;
                   color: #909399;
                   border-color: #d3d4d6;
                 }
              }
        }

        .top>p{
          height:100%;
          text-align:center;
          font:italic 700 100px/100px '宋体'; 
          color: #FFCC33;
          margin-top:30%;
        }
</style>
