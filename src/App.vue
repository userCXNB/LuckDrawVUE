<template>
  <div>
      <nav class="set-nav">        
          <router-link to="/" class="set-logo">
            <img src="./assets/images/logo.png"  @click="toOpen" style="width:150px;height:47px;">
          </router-link>
          <ul>
            <!-- <li>
                <span class="iconfont icon-denglu"></span>
                <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
            </li> -->
            <li>
                <!-- <el-button type="text" @click="centerDialogVisible = true">8888</el-button> -->
                <el-dropdown :hide-on-click="false">
                  <span class="el-dropdown-link">
                    下拉菜单
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>基本资料</el-dropdown-item>
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
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
                  <div style="height:32px;width:1180px;align-self:center;background:#fff;position:absolute;bottom:0;">
                     <div style="background:#83e2cc;border-top:2px solid #48ba89;height:14px;margin-top:0;"></div>
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
        cssSRC:[
          "../static/images/city/bj.png) center/100%",
          "../static/images/city/sh.png) center/100%",
          // "../static/images/city/gz.png) center/100%",
          // "../static/images/city/cq.png) center/100%",
          "../static/images/city/sd.png) center/100%",
          "../static/images/city/hn.png) center/100%",
          "../static/images/city/wh.png) center/100%",
          "../static/images/city/zj.png) center/100%",
          // "../static/images/city/sz.png) center/100%",
          "../static/images/city/1.jpg) center/100%",
          ],
        activeIndex:6,
        groupList:[
          {Ename:"beijing",name:"北京市",icon:"city_beijing",src:'bj.png'},
          {Ename:"shanghai",name:"上海市",icon:"city_shanghai",src:'sh.png'},
          // {Ename:"guangdong",name:"广东",icon:"city_guangzhou",src:'gz.png'},
          // {Ename:"chongqing",name:"重庆",icon:"city_zhongqing",src:'cq.png'},
          {Ename:"shandong",name:"山东省",icon:"city_qingdao",src:'sd.png'},
          {Ename:"hainan",name:"海南省",icon:"city_sanya",src:'hn.png'},
          {Ename:"wuhan",name:"武汉市",icon:"city_wuhan",src:'wh.png'},
          {Ename:"zhejiang",name:"浙江省",icon:"hangzhou",src:'zj.png'},
          // {Ename:"shenzhen",name:"深圳",icon:"city_shenzhen",src:'sz.png'}
        ],
        keyWord:'',
        watchTitle:{Ename:"*",name:"China Open Data"}
    }
  },
  watch:{
     activeIndex(New,Old){
          console.log(New)
          this.watchTitle = New =='6'? {Ename:"*",name:"China Open Data"}:this.groupList[New]
          //organization状态管理
          this.setOrganization(this.watchTitle)
       },
       frameData(){
         console.log(this.frameData)
       }
  },
  computed: {
            ...mapState([
                'switchStatus','organization','frameData'
            ]),
        }, 
  methods: {
      ...mapActions(['setSwitchStatus','setOrganization']),
      ...mapGetters(['getSwitchStatus']),
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
          this.$router.push({ 
                name:'home',params:{channel:JSON.stringify(this.watchTitle)}
                })
    },
    toOpen(){
      console.log(9999)
      this.activeIndex = '6'      
    }
  },
  mounted(){
     if(this.$route.path=='/'){
         this.setSwitchStatus({banner:true,menu:true})
     }
    console.log(this.frameData)

    // (function isMobile(){
    //     if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    //         // return true;  // 移动端
    //         alert("移动端")
    //     }else{
    //         // return false;  // PC端
    //         alert("PC端")
    //     }
    // })()
  } 
}
</script>
<style lang="less" scoped>
  
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
         margin:0 10px;
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

  }
  .el-input__inner {
   height: 45px!important;
   border-right:0;
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
