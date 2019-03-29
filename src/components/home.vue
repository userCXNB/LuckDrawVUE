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
            <div class="set_home_left_title">资源方</div>
            <el-dropdown style="width:300px;">
              <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
                全部<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" style="width:300px;">
                <el-dropdown-item  style="text-align:center" v-for="(item,index) in groupList" :key="index"  @click.native="group(index)"
                ><img :src="item.src" style="margin-right:15px;" alt="">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div style="padding:17px 21px 71px;">
              <dl v-if='groupIndex == -1'>
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
            <div class="set_home_left_title">数据领域</div>
            <el-button plain type="info" class="menuList" v-for="(item,index) in menuList" :key="index" @click.native="menu(index)"
             :style='index==menuindex? "width:300px;margin-left:0px;margin-bottom:2px;background:#52e4cd;":"width:300px;margin-left:0px;margin-bottom:2px;background:#fff;"'>
             {{item.name}}
             </el-button>
             <el-button plain type="info" v-if='JSON.parse($route.params.channel).name=="China Open Data"' class="menuList" @click.native="loadMore" style="width:300px;margin-left:0px;margin-bottom:2px;background:gray;">加载更多</el-button>
            <div class="set_home_left_title">文件格式</div>
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
      menuList:[],
      organization:{
          wuhan:[
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
          shanghai:[
              {name:"城市建设",Ename:"csjs"},
              {name:"卫生健康",Ename:"wsjk"},
              {name:"道路交通",Ename:"dljt"},
              {name:"文化休闲",Ename:"whxx"},
              {name:"社会发展",Ename:"shfz"},
              {name:"经济建设",Ename:"jjjs"},
              {name:"民生服务",Ename:"msfw"},
              {name:"机构团体",Ename:"jgtt"},
              {name:"资源环境",Ename:"zyhj"},
              {name:"信用服务",Ename:"xyfw"},
              {name:"公共安全",Ename:"safety"},
          ],
          beijing:[
              {name:"财税金融",Ename:"csjr"},
              {name:"旅游住宿",Ename:"lyzs"},
              {name:"餐饮美食",Ename:"cyms"},
              {name:"医疗健康",Ename:"yljk"},
              {name:"文体娱乐",Ename:"wtyl"},
              {name:"消费购物",Ename:"xfgw"},
              {name:"生活安全",Ename:"shaq"},
              {name:"宗教信仰",Ename:"zjxy"},
              {name:"教育科研",Ename:"jyky"},
              {name:"社会保障",Ename:"shbz"},
              {name:"劳动就业",Ename:"ldjy"},
              {name:"生活服务",Ename:"shfw"},
              {name:"房屋住宅",Ename:"fwzz"},
              {name:"政府机构与社会团体",Ename:"zfjgyshtt"},
              {name:"环境与资源保护",Ename:"hjyzybh"},
              {name:"企业服务",Ename:"qyfw"},
              {name:"经济建设",Ename:"jjjs"},
              {name:"信用服务",Ename:"xyfw"},
              {name:"交通服务",Ename:"traffic"},
              {name:"农业农村",Ename:"agricultural"},
          ],
          hainan:[
              {name:"财政",Ename:"cz"},
              {name:"旅游服务业",Ename:"lyfwy"},
              {name:"科技教育",Ename:"kjjy"},
              {name:"文化卫生体育",Ename:"whwsty"},
              {name:"民政社区",Ename:"mzsq"}
          ],
          zhejiang:[
             {name:"生态环境",Ename:"sthj"},
             {name:"商贸流通",Ename:"smlt"},
             {name:"社保就业",Ename:"sbjy"},
             {name:"教育文化",Ename:"jywh"},
             {name:"工业农业",Ename:"gyny"},
             {name:"交通运输",Ename:"jtys"},
             {name:"气象服务",Ename:"qxfw"},
             {name:"地理空间",Ename:"dlkj"},
             {name:"科技创新",Ename:"kjcx"},
             {name:"市场监督",Ename:"scjd"},
             {name:"安全生产",Ename:"aqsc"},
             {name:"城建住房",Ename:"cjzf"},
             {name:"资源能源",Ename:"zyny"},
             {name:"社会救助",Ename:"shjz"}
          ],
          all:[]},
      groupList:[
          {Ename:"beijing",name:"北京",icon:"city_beijing",src:'bj.png'},
          {Ename:"shanghai",name:"上海",icon:"city_shanghai",src:'sh.png'},
          // {Ename:"guangdong",name:"广东",icon:"city_guangzhou",src:'gz.png'},
          // {Ename:"chongqing",name:"重庆",icon:"city_zhongqing",src:'cq.png'},
          // {Ename:"shandong",name:"山东",icon:"city_qingdao",src:'sd.png'},
          {Ename:"hainan",name:"海南",icon:"city_sanya",src:'hn.png'},
          {Ename:"wuhan",name:"武汉",icon:"city_wuhan",src:'wh.png'},
          {Ename:"zhejiang",name:"浙江",icon:"hangzhou",src:'zj.png'},
          // {Ename:"shenzhen",name:"深圳",icon:"city_shenzhen",src:'sz.png'}
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
      status:true
    }
  },
      components:{
      homeDetail,detail
    },
    watch:{
      menuList(){}
    },
    methods: {
      loadMore(){
          this.loadstatus = false
          var arr = this.organization
          // for()
          this.menuList = arr.wuhan.concat(arr.shanghai,arr.beijing)
          //数组去重
          var tmpObj = {};
          var result = [];
          this.menuList.forEach(function(a) {
            var key = (typeof a) + a.name;
             console.log(key)
            if (!tmpObj[key]) {
              tmpObj[key] = true;
              result.push(a);
            }
          })
          this.menuList = result
      },
      switchStatus (data) {
          this.status=false
          this.detail = data
          console.log(data,700000)
      },
      DswitchStatus(){
         this.status = true
      },
      menu(ind){
        this.menuindex = ind
        console.log(this.menuindex)
      },
      format(ind){
        // console.log(this.formatIndex)
        this.formatIndex = ind
      },
      group(ind){
         this.groupIndex = ind
         this.menuindex = -1
         this.formatIndex = -1
         this.DswitchStatus()
         this.loadstatus = false
         this.menuList = this.organization[this.groupList[this.groupIndex].Ename]
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
      this.organization.all = this.organization.wuhan
      this.menuList = this.organization.all
      if(JSON.parse(this.$route.params.channel).Ename!='*'){
          this.menuList = this.organization[JSON.parse(this.$route.params.channel).Ename]
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
                    background:#52e4cd;
                    text-align:center;
                    line-height:54px;
                    color:#fff;
                    .menuList{
                      
                    }
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
