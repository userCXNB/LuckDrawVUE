<template>
  <div>
      <div id="app">
         <div class="core" style="margin-bottom:1px;">
           <nav class="set-nav">        
              <a href="https://data.gov.sg/" class="set-logo">
                <img src="./assets/images/logo.png" style="width:150px;height:47px;" alt="Data.gov.sg" title="Data.gov.sg">
              </a>
              <ul>
                <li>www1</li>
                <li>www2</li>
                <li>www3</li>
              </ul>
          </nav>
          <!-- <section class="set-section" v-show="switchStatus"> -->
          <section class="set-section" v-show="switchStatus" :style="'background:url('+cssSRC[activeIndex]+')'">
                 <dd style="font:44px/70px '微软雅黑';color:#fff;margin-top: 84px;text-shadow:5px 2px 6px #000;">{{menuList[activeIndex].name}}</dd>
                  <div style="margin-bottom:22px;">
                    <el-input placeholder="请输入内容"  class="input-with-select" style="width:500px;">
                      <el-button slot="append" icon="el-icon-search" style="height:54px;"></el-button>
                    </el-input>
                  </div>
                  <div>
                         <el-button  type="primary" style="width:175px;" @click="switchBtn">view All Datasets</el-button>
                  </div>

          </section>
          <el-menu
            v-if="switchStatus"
            :default-active="activeIndex"
            class="el-menu-demo M_top_350"
            mode="horizontal"
            @select="handleSelect"
            background-color="#f5f5f5"
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
                <ul class="firstul">
                  <li class="firstli">asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                </ul>
                <ul>
                  <li class="firstli">asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                </ul>                 
                <ul>
                  <li class="firstli">asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                  <li>asdfasdf</li>
                </ul>
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
        cssSRC:[require("./assets/images/banner.jpg"),require("./assets/images/banner1.jpg")],
        menuList:[
          {name:"经济",icon:"jingji"},
          {name:"环境",icon:"huanjing"},
          {name:"教育",icon:"education_icon"},
          {name:"就业",icon:"jiuyechuangye"},
          {name:"交通",icon:"traffic"},
          {name:"安全",icon:"anquan"},
          {name:"文化",icon:"wenhuachuanmei"},
          {name:"卫生",icon:"huanjing"},
          {name:"市场监控",icon:"zhongxinhuanjing"}
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
          this.setSwitchStatus()
          this.$router.push({  //核心语句
                path:'/home'
                })
    }
  },
  mounted(){
  } 
}
</script>
<style lang="less">
  
  #app{
    
    display:flex;
    justify-content:center;
    .core{
       width:1050px;
    }
  }
  .set-nav{
    height:47px;
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
    background:url(./assets/images/banner.jpg);
    position:absolute;
    display:flex;
    flex-direction:column;
    left:0;
    top:47px;
    right:0;
    margin:0 auto;
    height:350px;
    text-align:center;

  }
  .el-input__inner {
              height: 54px!important;
              }
  .M_top_350{
    margin-top:350px!important;
  }
  .set-footer{
    display:flex;
    justify-content: center;
    background:#113355;
    color:#fff;
    .footer-main{
      height:340px;
      padding-top:33px;
       width:1050px;
       .firstul{
         float:left;
       }
       ul{
         float:right;
         font-size:12px;
         line-height:24px;
         margin-right:60px;
         li{
           margin:12px 0;
         }
       }
      .firstli{
        font-size: 20px;

      }
    }
  }
</style>
