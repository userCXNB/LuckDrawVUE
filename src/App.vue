<template>
  <div>
      <div id="app">
         <div class="core" style="margin-bottom:1px;">
           <nav class="set-nav">        
              <a href="https://data.gov.sg/" class="set-logo">
                <img src="./assets/images/logo.jpg" alt="Data.gov.sg" title="Data.gov.sg">
              </a>
              <a href="https://data.gov.sg/" class="set-title">Data.gov.sg</a>
              <ul>
                <li>www1</li>
                <li>www2</li>
                <li>www3</li>
              </ul>
          </nav>
          <section class="set-section" v-show="switchStatus" style="background:url(./static/images/banner.jpg)">
                 <dd style="font-size:44px;line-height:70px;margin-top: 84px;">Transport</dd>
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
            <el-menu-item v-for="item in menuList" >{{item}}</el-menu-item>
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
        activeIndex: '1',
        menuList:['处理中心','我的工作台','消息中心','订单管理']
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
    background:red;
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
