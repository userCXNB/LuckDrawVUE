<template>
  <div>
      <div style="position:fixed;top:75%;right:5px;width:20px;">
          <span class="iconfont icon-zhiding" style="font-size:20px;cursor:pointer;display:inline-block;margin-bottom:10px;" @click="scrollToTop"></span>
          <!-- <span class="iconfont icon-contact" style="font-size:20px;cursor:pointer;" @click="toPublish"></span> -->
      </div>
      <nav class="set-nav">        
          <router-link to="/" class="set-logo">
            <img src="./assets/images/logo.png"  @click="toOpen" style="width:150px;height:47px;">
          </router-link>
          <ul>
            <li v-show="!userName&&industryDetailStatus">
                <span class="iconfont icon-denglu-copy"></span>
                 <router-link :to="{name:'login',params:{type:'pc',unionid:'pc'}}">登录</router-link>
            </li>
            <li v-show="!userName&&industryDetailStatus">
                <span class="iconfont icon-zhuce"></span>
                  <router-link :to="{name:'register',params:{type:'pc',unionid:'pc'}}">注册</router-link>
            </li>
            <li v-show='userName'>
                <!-- <el-button type="text" @click="centerDialogVisible = true">8888</el-button> -->
                <el-dropdown :hide-on-click="false">
                  <div class="el-dropdown-link">
                    {{userName}}
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-show="configTest == 'pc'">
                         <router-link tag="div" :to="{name: 'accountSettings', params: {accountSetInit:0 }}">基本资料</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item v-show="configTest == 'pc'">
                         <router-link tag="div" :to="{name: 'accountSettings', params: {accountSetInit:2 }}">账号密码</router-link>  
                    </el-dropdown-item>
                    <el-dropdown-item @click.native='loginOut'>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </li>
            <!-- <li><span class="iconfont icon-lianxi"></span>联系我们</li> -->
          </ul>
      </nav>
      <div id="app">
         <div class="core" style="margin-bottom:1px;">

          <section class="set-section" v-if="switchStatus.banner" :style="'background:url('+cssSRC[activeIndex]">
                  <dd style="font:44px/70px '';margin-top: 240px;" class="font-color">{{watchTitle.name}}<span v-if="watchTitle.name != 'China Open Data'">开放数据</span></dd>
                  <!-- text-shadow:5px 2px 6px #000; -->
                  <div style="margin-bottom:30px;">
                    <el-input placeholder="请输入内容" v-model="keyWord" class="input-with-select" style="width:500px;" @keyup.native.enter='switchBtn(false)'>
                      <el-button slot="append" icon="el-icon-search" style="height:54px;" @click="switchBtn(false)"></el-button>
                    </el-input>
                  </div>
                  <div>
                         <el-button  type="primary" style="width:175px;background:#44e2c9;" @click="switchBtn(true)">
                           <span class="iconfont icon-earth"></span>
                           浏览所有数据信息
                         </el-button>
                  </div>
                  <div style="height:52px;width:1180px;align-self:center;background:#fff;position:absolute;bottom:0px;display:flex">
                        <el-button :style='"industry"==IGtype? "width:50%":"width:50%;background:#52e4cd;"' @click="IGEvent('GOV')">政务</el-button>
                        <el-button :style='"GOV"==IGtype? "width:50%;margin-left:0px;":"width:50%;background:#52e4cd;margin-left:0px;"' @click="IGEvent('industry')">行业</el-button>
                  </div>
          </section>
          <el-menu
            v-if="switchStatus.menu"
            :default-active="activeIndex"
            :class="['el-menu-demo',switchStatus.banner? 'M_top_350':'']"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#113355"
            active-text-color="#ffd04b">
                  <el-menu-item v-for="(item,index) in groupList" :key="item.Ename" :index="index" style="text-align:center;">
                      <div>
                          <div :class="'iconfont icon-'+item.icon" style="font-size:20px;"></div>
                          <div>{{item.name}}</div>
                      </div>
                  </el-menu-item>
          </el-menu>
          <router-view/>
          <router-view :name="frameData.name" :centerDialogVisible="true"/>
        </div>

      </div>
        <footer class="set-footer">
            <div class="footer-main">
               <div>
                  <p style="font-size:10px;line-height:12px;margin:7px 12px;"> © 上海数据交易中心有限公司  地址:上海市静安区万荣路1268号A座3层<br/>
                  <a href="//www.miibeian.gov.cn/" target="_blank">沪ICP备17003045号</a>
                  </p>
               </div>
            </div>
        </footer>
  </div>

</template>
<script>
import {mapActions,mapState,mapGetters} from "vuex";
export default {
  name: 'App',
    data () {
    return {
        cssSRC:[],
        GOVcssSRC:[
          "../static/images/city/bj.png) center/100%",
          "../static/images/city/sh.png) center/100%",
          "../static/images/city/tj.jpg) center/100%",
          "../static/images/city/zj.png) center/100%",
          "../static/images/city/gd.jpg) center/100%",
          "../static/images/city/sd.png) center/100%",
          "../static/images/city/wh.png) center/100%",
          "../static/images/city/hn.jpg) center/100%",
          "../static/images/city/sx.jpg) center/100%",
          "../static/images/city/jx.jpg) center/100%",
          "../static/images/city/hn.png) center/100%",
          "../static/images/city/gz.jpg) center/100%",
          "../static/images/city/gy.jpg) center/100%",
          "../static/images/city/1.jpg) center/100%",
          ],
        industrycssSRC:[//为了和GOV保持一致不让activeIndex在IG切换时报错
          "../static/images/city/rgzn.jpg) center/100%",
          "../static/images/city/sx.jpg) center/100%",
          "../static/images/city/hn.jpg) center/100%",
          "../static/images/city/gz.jpg) center/100%",
          "../static/images/city/tj.jpg) center/100%",
          "../static/images/city/bj.png) center/100%",
          "../static/images/city/sh.png) center/100%",
          "../static/images/city/gd.jpg) center/100%",
          // "../static/images/city/cq.png) center/100%",
          "../static/images/city/sd.png) center/100%",
          "../static/images/city/hn.png) center/100%",
          "../static/images/city/wh.png) center/100%",
          "../static/images/city/zj.png) center/100%",
          // "../static/images/city/sz.png) center/100%",
          "../static/images/city/1.jpg) center/100%",
          ],
        activeIndex:13,
        industryDetailStatus:true,
        IGtype:'GOV',
        IGindex:'-1',
        groupList:[],
        GOVList:[
          {Ename:"beijing",name:"北京市",icon:"city_beijing",src:'bj.png'},
          {Ename:"shanghai",name:"上海市",icon:"city_shanghai",src:'sh.png'},
          {Ename:"tianjin",name:"天津市",icon:"city_tianjin",src:'tj.jpg'},
          {Ename:"zhejiang",name:"浙江省",icon:"hangzhou",src:'zj.png'},
          {Ename:"guangdong",name:"广东省",icon:"guangdongshengbowuguan",src:'gd.jpg'},
          {Ename:"shandong",name:"山东省",icon:"city_qingdao",src:'sd.png'},
          {Ename:"wuhan",name:"武汉市",icon:"city_wuhan",src:'wh.png'},
          {Ename:"henan",name:"河南省",icon:"henanshengzhengfujizhongducha",src:'hn.jpg'},
          {Ename:"shaanxi",name:"陕西省",icon:"city_xian",src:'sx.jpg'},
          {Ename:"jiangxi",name:"江西省",icon:"jiangximiaozhai",src:'jx.jpg'},
          {Ename:"hainan",name:"海南省",icon:"city_sanya",src:'hn.png'},
          {Ename:"guizhou",name:"贵州省",icon:"guizhouzhuanhuan",src:'gz.jpg'},
          {Ename:"guiyang",name:"贵阳市",icon:"guiyang",src:'gy.jpg'},
        ],
        industryList:[
          {Ename:"ai",name:"人工智能",icon:"rengongzhineng",src:'rgzn.jpg'},
        ],
        keyWord:'',
        watchTitle:{Ename:"*",name:"China Open Data"},
        WXdata:{},
        configTest:'pc'
    }
  },
  watch:{
     activeIndex(New,Old){
          console.log(New)
          this.watchTitle = New =='13'? {Ename:"*",name:"China Open Data"}:this.groupList[New]
          //organization状态管理
          this.setOrganization(this.watchTitle)
       },
       frameData(){
         console.log(this.frameData)
       }
  },
  computed: {
            ...mapState([
                'switchStatus','organization','frameData','userName'
            ]),
        }, 
  methods: {
      ...mapActions(['setSwitchStatus','setOrganization','setUserName','setFrameData']),
      ...mapGetters(['getSwitchStatus','getWX']),
      IGEvent(type){
        console.log(type)
        //政务和行业切换
         this.IGtype = type
         this.activeIndex = 13
         if(type == 'GOV'){
           this.groupList = this.GOVList
           this.cssSRC = this.GOVcssSRC
         }else{
           this.groupList = this.industryList
           this.cssSRC = this.industrycssSRC
         }
      },
      scrollToTop(){
        window.scrollTo(0,0);
      },
      toPublish(){
        if(!!this.userName){
          this.$router.push({ 
                  name:'publish'
                  })
        }else{
          alert('请先登录')
        }

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.activeIndex = key
      },
      switchBtn(state){
          console.log(this.keyWord)
          this.setSwitchStatus({banner:false,menu:false})
          if(state){
             this.keyWord = ''
          }
          this.watchTitle.keyWord = this.keyWord

         if(this.IGtype == 'GOV'){
           console.log('GOV')
          this.$router.push({ 
                name:'home',params:{channel:JSON.stringify(this.watchTitle)}
                })
         }else{
          this.activeIndex = 0
          console.log(this.watchTitle)
          this.$router.push({ 
                name:'home1',params:{channel:JSON.stringify(this.watchTitle)}
                })
         }

    },
    toOpen(){
      this.activeIndex = '13'      
    },
    loginOut(){
          this.$axios.post(
            '/api/login/loginOut'
          ).then((res)=>{
              if(res.data.code == 0){
                this.setUserName()
                
                if(this.$route.path.indexOf('accountSettings') != -1||this.$route.path.indexOf('publish') != -1){//在账号设置或需求发布里面返回到首页
                    this.$router.push({name:'main'})
                }
              }
          })
    }

  },
  mounted(){
      (function(){
            if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                this.configTest = 'mobile'
            }else{
               this.configTest = 'pc'
            }
      }.bind(this))()

     if(this.$route.path=='/'){
         this.setSwitchStatus({banner:true,menu:true})
     }
    this.$root.Bus.$on('industryDetail',(value)=>{
        this.industryDetailStatus = value

    })//在行为详情时去掉右上角登录注册
    console.log(this.frameData)
    this.groupList = this.GOVList
    this.cssSRC = this.GOVcssSRC

    this.setUserName(this)//获取用户信息

    //微信关联登录
        function getUrlParms(name){//获取href
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          console.log(r,27)
          if(r!=null)
          return unescape(r[2]);
          return null;
          }
        var code = getUrlParms("code");
        console.log(this.getWX().name)
        if(code !== null){//判断是否有code
              console.log(window.location.href.split('?')[0])
              window.history.pushState({}, 0, window.location.href.split('?')[0]);
              let data = new FormData();
              data.append('code',code);
              if(this.getWX().name == 'skip'){
                      this.$axios.post(//skip从登录注册页面走的接口
                        '/api/weChat/getCode',data
                     ).then((res)=>{
                        if(res.data.code == 0 && res.data.data!=='登录成功'){
                            localStorage.setItem("weChatState",JSON.stringify(res.data))
                            this.$router.push({name:'main'})
                            this.setFrameData('wxgl')//状态管理控制弹框
                        }else{
                           this.setUserName(this)
                        }
                     })
              }else if(this.getWX().name == 'bind'){
                     this.$axios.post(//bind从登录注册页面走的接口
                        '/api/weChat/getCodeForBind',data
                     ).then((res)=>{
                        console.log(res)
                        if(res.data.code == 0){
                            localStorage.setItem("weChatState",JSON.stringify(res.data))
                            this.$router.push({name:'accountSettings', params: {accountSetInit:2}})
                        }else{
                          alert(res.data.msg)
                        }
                     })
              }





         
        }



  } 
}
</script>
<style lang="less">
  
  #app{
    
    display:flex;
    justify-content:center;
    margin-bottom:66px;
    .core{
       width:1180px;
       background: #fff;
    }
  }
  .set-nav{
    height:47px;
    position: relative;
    padding:0 40px;
    .set-logo{
       float:left;
       display:flex;
       align-items: center;
       margin-right: 14px;
       height:47px;      
    }

    .set-title{
      float:left;
      height:47px;
      line-height: 47px;
    }
    ul{
      float:right;
      height:47px;
      li{float:left;
        //  margin:0 10px;
         line-height:47px;
         }
    }
  }
  .set-section{
    width: 100%;
    background:darkcyan;
    background-size: cover;
    position:absolute;
    display:flex;
    flex-direction:column;
    left:0;
    top:47px;
    right:0;
    margin:0 auto;
    height:720px;
    text-align:center;
    .font-color{
          background: linear-gradient(to left,#64a9e4,#8eed9a);
          -webkit-background-clip: text;
          color: transparent;
    }
   .el-input__inner {
   height: 45px!important;
   border-right:0;
              }

  }

  .el-input-group__append{
    background-color:rgba(255,255,255);
  }
  .el-menu-item{
    line-height:26px!important;
  }
  .M_top_350{
    margin-top:720px!important;
  }
  .el-menu{
    display: flex;
    justify-content: space-around;
  }
  .el-dropdown-link {
    width:200px;
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .set-footer{
    background:#fff;
    height:106px;
    color:#fff;
    .footer-main{
      height:36px;
      background:#42e2c8;
           display:flex;
     justify-content:center;
      div{
     width:1180px;
     }
    }
  }
</style>
