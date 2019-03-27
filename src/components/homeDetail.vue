<template>
 <div class="set_home_right">
           <!-- <el-button type="primary" style="float:right;margin:50px 0 10px;background:#fff;color:#113355;">下载<i class="el-icon-download el-icon--right"></i></el-button> -->
            <div>
              <el-input placeholder="请输入内容" v-model="keyWord" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <dl>
              <dt>
                 找到{{datalist.count}}条相关数据
              </dt>
              <dd>
                        <span>排序方式:</span>
                        <el-dropdown>
                          <el-button type="primary" style="background:#fff;color:#113355;">
                            名称<i class="el-icon-arrow-down el-icon--right"></i>
                          </el-button>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>名称</el-dropdown-item>
                            <el-dropdown-item>时间</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
              </dd>
            </dl>
            <ul class="set-content">
                <listSon v-for="(item,index) in datalist.results" :key='index' :data="item"/>
            </ul>
            <el-pagination
              style="text-align:center;margin:22px 0 75px;"
              background
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="datalist.count">
            </el-pagination>
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
      datalist:{},
    }
  },
      components:{
      slider,
      slideritem,
      listSon
    },
     computed: {
            ...mapState([
                'organization'
            ]),
        },
    watch:{
     organization(New,Old){
           this.getPackageData(0)
       },
     keyWord(New,Old){
           this.getPackageData(0)
       }
    },
    mounted () {
       console.log(JSON.parse(this.$route.params.channel))
       this.keyWord = JSON.parse(this.$route.params.channel).keyWord
       this.getPackageData(0)
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
        
      },
      handleCurrentChange(val){
        //  this.dataPageList = this.datalist.slice((val-1)*10,val*10)
        this.getPackageData(val)
        window.scrollTo(0,0);
      },
      getPackageData(val){
          
          console.log(this.keyWord)
          this.$axios.get('/api/api/3/action/package_search?q=title:*'+this.keyWord+'*&fq=organization:'+this.organization.Ename+'&start='+val+'&rows=20')
                  .then((res)=>{
                    if(res.status == 200){
                          this.datalist = res.data.result
                    }
                    
        })
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
