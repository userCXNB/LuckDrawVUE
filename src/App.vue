<template>
  <div>
      <nav class="set-nav">        
          <a href="https://data.gov.sg/" class="set-logo">
            <img src="./assets/images/logo.png" style="width:150px;height:47px;" alt="Data.gov.sg" title="Data.gov.sg">
          </a>
          <p>www.dataopen.com</p>
          <ul>
            <li>登录/注册</li>
            <li>联系我们</li>
          </ul>
      </nav>
      <div id="app">
         <div class="core" style="margin-bottom:1px;">

          <section class="set-section" v-if="switchStatus.banner" :style="'background:url('+cssSRC[activeIndex]+')'">
                 <dd style="font:44px/70px '微软雅黑';color:#fff;margin-top: 240px;text-shadow:5px 2px 6px #000;">{{menuList[activeIndex].name}}</dd>
                  <div style="margin-bottom:30px;">
                    <el-input placeholder="请输入内容"  class="input-with-select" style="width:500px;">
                      <el-button slot="append" icon="el-icon-search" style="height:54px;"></el-button>
                    </el-input>
                  </div>
                  <div>
                         <el-button  type="primary" style="width:175px;" @click="switchBtn">浏览所有数据信息</el-button>
                  </div>
                  <div style="height:32px;width:1180px;align-self:center;background:#fff;margin-top:255px;">
                     <div style="background:#83e2cc;border-top:2px solid #48ba89;height:14px;margin-top:0;"></div>
                  </div>
          </section>
          <el-menu
            v-if="switchStatus.menu"
            :default-active="activeIndex"
            :class="[el-menu-demo,switchStatus.banner? 'M_top_350':'']"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#113355"
            active-text-color="#ffd04b">
            <el-menu-item v-for="(item,index) in menuList" :key="index" :index="index" style="text-align:center;"><span :class="'iconfont icon-'+item.icon" style="top:-27px;left:16px;position:relative;font-size:27px;line-height: 99px;
}"></span><span style="position:relative;left:-12px;">{{item.name}}</span></el-menu-item>
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
        activeIndex:0,
        cssSRC:[require("./assets/images/banner.png"),require("./assets/images/banner1.jpg")],
        menuList:[
          {Ename:"",name:"经济",icon:"jingji"},
          {Ename:"",name:"环境",icon:"huanjing"},
          {Ename:"",name:"教育",icon:"education_icon"},
          {Ename:"",name:"就业",icon:"jiuyechuangye"},
          {Ename:"",name:"交通",icon:"traffic"},
          {Ename:"",name:"安全",icon:"anquan"},
          {Ename:"",name:"文化",icon:"wenhuachuanmei"},
          {Ename:"",name:"卫生",icon:"huanjing"},
          {Ename:"",name:"市场监控",icon:"zhongxinhuanjing"}
        ]
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
          this.$router.push({  //核心语句
                path:'/home'
                })
    }
  },
  mounted(){
    console.log(this.setSwitchStatus)
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
    p{
      height:47px;
      line-height:47px;
      width:300px;
      position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;
      text-align:center;
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
   height: 54px!important;
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
