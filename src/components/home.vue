<template>
  <div class="set_home">
      <div class="set_home_left">
        <div class="set_home_left_title">Topics</div>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-jingji"></span>经济</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-huanjing"></span>环境</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-education_icon"></span>教育</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-jiuyechuangye"></span>就业</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-traffic"></span>交通</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-anquan"></span>安全</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-wenhuachuanmei"></span>文化</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-huanjing"></span>卫生</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'><span style="margin-right:6px;" class="iconfont icon-zhongxinhuanjing"></span>市场监管</el-button>
        <div class="set_home_left_title">Topics</div>
        <el-dropdown style="width:300px;">
          <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" style="width:300px;">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="set_home_left_title">Topics</div>
        <el-dropdown style="width:300px;">
          <el-button type="primary" style="width:300px;background:#fff;color:#113355;">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" style="width:300px;">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="set_home_right">
           <el-button type="primary" style="float:right;margin:50px 0 10px;background:#fff;color:#113355;">下载<i class="el-icon-download el-icon--right"></i></el-button>
            <div>
              <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <dl>
              <dt>
                 1690 datasets found
              </dt>
              <dd>
                sort by:
                        <el-dropdown>
                          <el-button type="primary" style="background:#fff;color:#113355;">
                            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                          </el-button>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
              </dd>
            </dl>
            <ul class="set-content">
                <listSon v-for="(item,index) in datalist" :key='index' :data="item"/>
            </ul>
            <el-pagination
              style="text-align:center;margin:22px 0 75px;"
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
      </div>
  </div>    
</template>

<script>
import listSon from '@/components/listSon'
import { slider, slideritem } from 'vue-concise-slider';
import {mapActions,mapState} from "vuex";
import qs from 'qs';
export default {
  data () {
    return {
      datalist:[]
    }
  },
      components:{
      slider,
      slideritem,
      listSon
    },
    mounted () {


       console.log(this.$route.params.channel)
        this.$axios.post('/api/api/3/action/package_search')
                .then((res)=>{
                  if(res.status == 200){
                        this.datalist = res.data.result.results
                  }
                  
       })



      // this.$store.commit("SET_STATE")
      // this.$store.dispatch("setState")
    },
     methods: {
       ...mapActions(['setState']),
      onTap (data) {
        if(data.currentPage==0){
           this.$router.push("/PhotoWall")
        }else{
           this.$router.push("/turntable")
        }
        
      }
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
                 margin-top:159px;
                 width: 300px;
                 .set_home_left_title{
                    font-size:20px;
                    line-height:62px;
                 }
              }
              .set_home_right{
                 width:720px;
                 dl{
                   height:68px;
                   display:flex;
                   justify-content:space-between;
                    font-size:24px;
                    line-height:68px;
                 }
                 .set-content{

                   
                   li{
                      background:#fff;
                      margin-bottom:2px;
                      padding:20px 45px 16px 23px;
                      div{
                        font-size:12px;
                        line-height: 24px;
                      }
                      .title{
                          font-size:20px;
                          line-height:32px;
                      }
                      img{
                        margin:7px 0 7px;
                      }
                   }
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
