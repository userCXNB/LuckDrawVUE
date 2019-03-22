<template>
  <div>
      <nav class="set-nav">        
          <router-link to="/" class="set-logo">
            <img src="./assets/images/logo.png" style="width:150px;height:47px;">
          </router-link>
          <ul>
            <li><span class="iconfont icon-denglu"></span>登录/注册</li>
            <li><span class="iconfont icon-lianxi"></span>联系我们</li>
          </ul>
      </nav>
      <div id="app">
         <div class="core" style="margin-bottom:1px;">

          <section class="set-section" v-if="switchStatus.banner" :style="'background:url('+cssSRC[activeIndex]+')'">
                 <dd style="font:44px/70px '微软雅黑';color:#fff;margin-top: 240px;text-shadow:5px 2px 6px #000;">{{watchTitle}}</dd>
                  <div style="margin-bottom:30px;">
                    <el-input placeholder="请输入内容"  class="input-with-select" style="width:500px;">
                      <el-button slot="append" icon="el-icon-search" style="height:54px;"></el-button>
                    </el-input>
                  </div>
                  <div>
                         <el-button  type="primary" style="width:175px;" @click="switchBtn">
                           <span class="iconfont icon-earth"></span>
                           浏览所有数据信息
                         </el-button>
                  </div>
                  <div style="height:32px;width:1180px;align-self:center;background:#fff;margin-top:255px;">
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
                  <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index" style="text-align:center;">
                      <div>
                          <div :class="'iconfont icon-'+item.icon" style="font-size:20px;"></div>
                          <div>{{item.name}}</div>
                      </div>
                  </el-menu-item>
          </el-menu>
          <router-view/>
        </div>

      </div>
        <footer class="set-footer">
            <div class="footer-main">
               <div>
                  <p style="font-size:10px;line-height:12px;margin:7px 12px;"> © 上海数据交易中心有限公司  地址:上海市静安区万荣路1268号A座3层<br/>沪ICP备17003045号</p>
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
          require("./assets/images/city/bj.png"),
          require("./assets/images/city/sh.png"),
          require("./assets/images/city/gz.png"),
          require("./assets/images/city/cq.png"),
          require("./assets/images/city/sd.jpg"),
          require("./assets/images/city/sy.jpg"),
          require("./assets/images/city/wh.jpg"),
          require("./assets/images/city/zj.jpg"),
          require("./assets/images/city/sz.jpg"),
          require("./assets/images/city/1.png"),
          ],
        activeIndex:'9',
        menuList:[
          {Ename:"",name:"北京",icon:"city_beijing"},
          {Ename:"",name:"上海",icon:"city_shanghai"},
          {Ename:"",name:"广州",icon:"city_guangzhou"},
          {Ename:"",name:"重庆",icon:"city_zhongqing"},
          {Ename:"",name:"山东",icon:"city_qingdao"},
          {Ename:"",name:"海南",icon:"city_sanya"},
          {Ename:"",name:"武汉",icon:"city_wuhan"},
          {Ename:"",name:"浙江",icon:"hangzhou"},
          {Ename:"",name:"深圳",icon:"city_shenzhen"}
        ],
        watchTitle:"dataopen"
    }
  },
  watch:{
     activeIndex(New,Old){
          this.watchTitle = New =='-1'? 'dataopen':this.menuList[New].name
       }
  },
  computed: {
            ...mapState([
                'switchStatus'
            ]),
        }, 
  methods: {
      ...mapActions(['setSwitchStatus']),
      ...mapGetters(['getSwitchStatus']),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        this.activeIndex = key
      },
      menuOpt(){
          
      },
      switchBtn(){
          this.setSwitchStatus({banner:false,menu:false})
          this.$router.push({ 
                name:'home',params:{channel:this.watchTitle}
                })
    }
  },
  mounted(){
     this.setSwitchStatus({banner:true,menu:true})
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
         margin:0 10px;
         line-height:47px;
         }
    }
  }
  .set-section{
    width: 100%;
    background:darkcyan;
    position:absolute;
    display:flex;
    flex-direction:column;
    left:0;
    top:47px;
    right:0;
    margin:0 auto;
    height:720px;
    text-align:center;

  }
  .el-input__inner {
   height: 55px!important;
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
