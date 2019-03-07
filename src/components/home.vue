<template>
  <div class="set_home">
      <div class="set_home_left">
        <div class="set_home_left_title">Topics</div>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
        <el-button plain type="info" style='width:300px;margin-left:0px;margin-bottom:2px;background:#fff;'>朴素按钮</el-button>
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
              <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
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
                <listSon/>
                <listSon/>
                <listSon/>
                <listSon/>
                <listSon/>

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
    }
  },
      components:{
      slider,
      slideritem,
      listSon
    },
    mounted () {
      // api/3/action/package_search

       console.log(this)

        this.$axios.post('/api/api/3/action/package_search')
                .then((res)=>{
                  console.log(res,135)
       })





               


      console.log(arrCookie)
      var arrCookie = document.cookie.split(';')
      
      var csrftoken = ''
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == "csrftoken") csrftoken =arr[1];
      }
      // this.setState('payload11')
      var _that = this
      var arr = {username:'0000115_adm',pwdInput:_that.$md5('123456'),verCode:''}
      this.$axios.post('/api/',{},
      {headers: {'X-CSRFToken': csrftoken}}
      ) //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中  http://10.101.8.163:8080/hello
        .then((res)=>{
          console.log(res)

      this.$axios.post('/api/show_code_user_name/', qs.stringify({username:'0000115_adm'}),
                    {headers: {'X-CSRFToken': csrftoken,'Content-Type':'application/x-www-form-urlencoded;','Accept':'*/*'}
                    }
      ) //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中  http://10.101.8.163:8080/hello
        .then((res)=>{
          console.log(res)

                  _that.$axios.post('/api/admin_login/',
                    qs.stringify(arr),
                    {headers: {'X-CSRFToken': csrftoken,'Content-Type':'application/x-www-form-urlencoded;','Accept':'*/*'}}
                    ) //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中  http://10.101.8.163:8080/hello
                      .then((res)=>{
                        console.log(res)
                        this.datalist = res.data.data
                      })
                      .catch((err)=>{
                        console.log('调用失败',err)
                      })

               })









          this.datalist = res.data.data
        })
        .catch((err)=>{
          console.log('调用失败',err)
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
