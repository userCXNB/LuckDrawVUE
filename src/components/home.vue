<template>
    <div>
        <div style="font-size:18px;line-height:61px;" v-if='!status'>我的位置:
          <router-link to='/'>首页</router-link>
          >
          <span @click="DswitchStatus">{{JSON.parse($route.params.channel).name}}</span>
          >
          {{detail.title}}</div>
        <div class="set_home">
          <div class="set_home_left">
            <div class="set_home_left_title">资源方</div>
            <div style="padding:17px 21px 71px;">
              <dl>
                <td>
                  <img v-if="JSON.parse(this.$route.params.channel).Ename !='*'" :src="'../../static/images/city/'+JSON.parse($route.params.channel).src" style="width:100%;" alt="">
                  <img v-if="JSON.parse(this.$route.params.channel).Ename =='*'" src="../../static/images/city/1.png" style="width:100%;" alt="">
                </td>
                <dd style="border-top:2px solid #52e4cd;margin-top:33px;position:relative">
                    <div style="position:absolute;top:-21px;left:81px;background:#fff;text-align:center;color:#52e4cd;width:95px;">
                        <div v-if="JSON.parse(this.$route.params.channel).Ename !='*'" style="font-size:26px;line-height:26px;">{{JSON.parse(this.$route.params.channel).name}}</div>
                        <marquee v-if="JSON.parse(this.$route.params.channel).Ename =='*'" style="font-size:26px;line-height:26px;">{{JSON.parse(this.$route.params.channel).name}}</marquee>
                        <div style="font-size:10px;line-height:20px;">{{JSON.parse(this.$route.params.channel).Ename}}</div>
                    </div>
                </dd>
              </dl>
            </div>
            <div class="set_home_left_title">数据领域</div>
            <el-button plain type="info" v-for="(item,index) in menuList" :key="index" @click.native="menu(index)" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>{{item.name}}</el-button>
            <div class="set_home_left_title">文件格式</div>
            <el-dropdown style="width:300px;" v-if='!status'>
              <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item  style="text-align:center" v-for="(item,index) in formatList" :key="index"><img :src="item.src" style="margin-right:15px;" alt="">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div v-if='status'>
                <el-button plain type="info" v-for="(item,index) in formatList" :key="index"  @click.native="format(index)" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>
                  <img :src="item.src" style="margin-right:15px;" alt="">{{item.name}}
                </el-button>
            </div>
          </div>
          <homeDetail :switchStatus='switchStatus' :menu='menuList[index]' :format='formatList[formatIndex]' v-if='status'/>
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
          {name:"公共服务",Ename:"public_service"},
          {name:"政府机构",Ename:"government_org"},
          {name:"能源环境",Ename:"energy_environment"},
          {name:"经济发展",Ename:"economic"},
          {name:"农业农村",Ename:"agricultural"},
          {name:"文化娱乐",Ename:"culture"},
          {name:"教育科技",Ename:"education"},
          {name:"金融服务",Ename:"financial_service"},
          {name:"公共安全",Ename:"safety"},
          {name:"交通服务",Ename:"traffic"},
          {name:"医疗卫生",Ename:"healthy"},
          {name:"法律服务",Ename:"legal_service"},
        ],
      formatList:[
        {name:"CSV",src:require("../assets/images/csv.png")},
        {name:"API",src:require("../assets/images/api.png")},
        {name:"KML",src:require("../assets/images/kml.png")},
        {name:"SHP",src:require("../assets/images/shp.png")},
        {name:"PDF",src:require("../assets/images/pdf.png")}
      ],
      index:-1,
      formatIndex:-1,
      detail:{},
      status:true
    }
  },
      components:{
      homeDetail,detail
    },
    methods: {
      switchStatus (data) {
          this.status=false
          this.detail = data
          console.log(data,700000)
      },
      DswitchStatus(){
         this.status = true
      },
      menu(ind){
        this.index = ind
        console.log(this.index)
      },
      format(ind){
        // console.log(this.formatIndex)
        this.formatIndex = ind
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
                    background:#52e4cd;
                    text-align:center;
                    line-height:54px;
                 }
                 .el-button.is-plain:focus, .el-button.is-plain:hover{
                   background:#52e4cd!important;
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
