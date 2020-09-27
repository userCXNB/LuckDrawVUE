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
          <section class="set-section">
                 <dd style="font-size:44px;">Transport</dd>
                  <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </div>

                  <el-button  type="primary">view All Datasets</el-button>

          </section>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
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
export default {
  name: 'App',
    data () {
    return {
        activeIndex: '1',
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>
  
  #app{
    
    display:flex;
    justify-content:center;
    .core{
      background: red;
       width:1050px;
    }
  }
  .set-nav{
    height:47px;
    background: gray;
    // margin-bottom: 350px;
    .set-logo{
       float:left;
       display:flex;
       align-items: center;
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
    left:0;
    top:47px;
    right:0;
    margin:0 auto;
    height:350px;

  }
  .el-menu-demo{
    margin-top:350px;
  }
  .set-footer{
    display:flex;
    justify-content: center;
    background:#113355;
    .footer-main{
      height:340px;
      padding-top:33px;
      background: red;
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