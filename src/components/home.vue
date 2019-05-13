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
                        <div v-if="JSON.parse(this.$route.params.channel).Ename !='*'" style="font-size:26px;line-height:26px;">{{JSON.parse(this.$route.params.channel).name}}</div>
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
                        <div style="font-size:26px;line-height:26px;">{{groupList[groupIndex].name}}</div>
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
            <div class="set_home_left_title" @click="format(-1)">文件格式</div>
            <el-dropdown style="width:300px;" v-if='!status'>
              <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item  style="text-align:center" v-for="(item,index) in formatList" :key="index"
                ><img :src="item.src" style="margin-right:15px;" alt="">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-if='status'>
                <el-button plain type="info" v-for="(item,index) in formatList" :key="index"  @click.native="format(index)" :style='index==formatIndex? "width:300px;margin-left:0px;margin-bottom:2px;background:#52e4cd;":"width:300px;margin-left:0px;margin-bottom:2px;background:#fff;"'>
                  <img :src="item.src" style="margin-right:15px;" alt="">{{item.name}}
                </el-button>
            </div>
          </div>
          <homeDetail :switchStatus='switchStatus' :menu='menuList[menuindex]' :format='formatList[formatIndex]' :group="groupList[groupIndex]" v-if='status'/>
          <detail v-if='!status' :detail='detail' :DswitchStatus='DswitchStatus'/>
      </div>   
    </div>
 
</template>

<script>
import homeDetail from '@/components/homeDetail'
import detail from '@/components/detail'
export default {
  data () {
    return { 
      menuList:[
              {name:"经济",Ename:"economy"},
              {name:"金融",Ename:"financial"},
              {name:"信用",Ename:"credit"},
              {name:"文旅",Ename:"travel"},
              {name:"交通",Ename:"transportation"},
              {name:"安全",Ename:"security"},
              {name:"健康",Ename:"health"},
              {name:"教育科技",Ename:"tech"},
              {name:"环境",Ename:"environment"},
              {name:"建设",Ename:"construction"},
              {name:"公共服务",Ename:"publicservice"},
              {name:"社会",Ename:"society"}
      ],
      groupList:[
          {Ename:"beijing",name:"北京",icon:"city_beijing",src:'bj.png'},
          {Ename:"shanghai",name:"上海",icon:"city_shanghai",src:'sh.png'},
          {Ename:"tianjin",name:"天津",icon:"city_tianjin",src:'tj.jpg'},
          {Ename:"zhejiang",name:"浙江",icon:"hangzhou",src:'zj.png'},
          {Ename:"guangdong",name:"广东",icon:"guangdongshengbowuguan",src:'gd.jpg'},
          {Ename:"shandong",name:"山东",icon:"city_qingdao",src:'sd.png'},
          {Ename:"wuhan",name:"武汉",icon:"city_wuhan",src:'wh.png'},
          {Ename:"henan",name:"河南",icon:"henanshengzhengfujizhongducha",src:'hn.jpg'},
          {Ename:"shaanxi",name:"陕西",icon:"city_xian",src:'sx.jpg'},
          {Ename:"jiangxi",name:"江西",icon:"jiangximiaozhai",src:'jx.jpg'},
          {Ename:"hainan",name:"海南",icon:"city_sanya",src:'hn.png'},
          {Ename:"guizhou",name:"贵州",icon:"guizhouzhuanhuan",src:'gz.jpg'},
          {Ename:"guiyang",name:"贵阳",icon:"guiyang",src:'gy.jpg'},
        ],
      formatList:[
        {name:"CSV",src:require("../assets/images/csv.png")},
        {name:"API",src:require("../assets/images/api.png")},
        {name:"KML",src:require("../assets/images/kml.png")},
        {name:"SHP",src:require("../assets/images/shp.png")},
        {name:"PDF",src:require("../assets/images/pdf.png")}
      ],
      menuindex:-1,
      formatIndex:-1,
      groupIndex:-1,
      detail:{},
      loadstatus:true,
      status:true,
    }
  },
      components:{
      homeDetail,detail
    },
    watch:{
      menuindex(){
        console.log(menuindex)
      }
    },
    methods: {
      switchStatus (data) {
          this.status=false
          this.detail = data
      },
      DswitchStatus(){
         this.status = true
      },
      menu(ind){
        console.log(ind,this.menuindex)
        if(ind==this.menuindex){
           this.menuindex = -1
        }else{
           this.menuindex = ind
        }
      },
      format(ind){
        if(ind==this.formatIndex){
           this.formatIndex = -1
        }else{
           this.formatIndex = ind
        }

      },
      group(ind){
         this.groupIndex = ind
         this.menuindex = -1
         this.formatIndex = -1
         this.DswitchStatus()
         this.loadstatus = false
      }
    },
    directives:{
      focus:{
        inserted:function(el,bind){
          // console.log(bind)
          // if(bind.value.name == this.$route.params.channel){
          //        el.focus()
          // }
          
        }
      }
    },
    mounted () {
      console.log(this.$route)

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
