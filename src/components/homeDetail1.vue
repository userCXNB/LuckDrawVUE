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
                            <el-dropdown-item v-for="(item,index) in sortlist" :key='index' @click.native="sort(item)">{{item.name}}</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
              </dd>
            </dl>
            <ul class="set-content">
                <listSon v-for="(item,index) in datalist.results" :key='index' :data="item" :switchStatus='switchStatus'/>
            </ul>
            <el-pagination
              style="text-align:center;margin:22px 0 75px;"
              background
              :current-page="currentPage"
              @current-change="handleCurrentChange"
              :page-size="20"
              layout="prev, pager, next"
              :total="datalist.count">
            </el-pagination>
      </div>    
</template>

<script>
import listSon from '@/components/listSon'
import {mapActions,mapState} from "vuex";
export default {
  props:['switchStatus','menu','group'],
  data () {
    return {
        datalist:{},
        keyWord:"",
        sortName:"title_string",
        currentPage:1,
        sortlist:[
          {name:'名称',Ename:'title_string'},
          {name:'时间',Ename:'metadata_modified'}
        ]
    }
  },
      components:{
      listSon
    },
     computed: {
            ...mapState([
                'organization'
            ]),
        },
    watch:{
     keyWord(New,Old){
       this.getPackageData(1)
       },
     sortName(New,Old){
       this.getPackageData(1)
     },
     menu(){  
       this.getPackageData(1)
     },
      group(){
        this.getPackageData(1)
      },
    },
    mounted () {
       this.keyWord = JSON.parse(this.$route.params.channel).keyWord//主页关键字
       this.getPackageData(1)
    },
     methods: {
      handleCurrentChange(val){    
        this.getPackageData(val)
        this.currentPage = val
        window.scrollTo(0,0);
      },
      getPackageData(val){//请求ckan数据
      console.log('ckan出发')
       this.currentPage = 1
          if(!this.menu){
            this.menu = {Ename:'*'}//groups(资源方)的值
          }
          if(!this.group){//父组件没有传group就默认赋值
            this.group = {name:'China Open Data'}
          }

          var url = ''
          
          if(this.group.name == "China Open Data"){
           url =  '/ckan/api/3/action/package_search?q=title:*'+this.keyWord+'*&fq=groups:'+this.menu.Ename+' AND organization:'+JSON.parse(this.$route.params.channel).Ename+'&start='+(val-1)*20+'&rows=20&sort='+this.sortName+'+desc'
          }else{
           url =  '/ckan/api/3/action/package_search?q=title:*'+this.keyWord+'*&fq=groups:'+this.menu.Ename+' AND organization:'+this.group.Ename+'&start='+(val-1)*20+'&rows=20&sort='+this.sortName+'+desc'
          }
                      this.$axios.get(
                        url
                      ).then((res)=>{
                                if(res.status == 200){
                                      this.datalist = res.data.result
                                }       
                        })
      },
      sort(item){
           this.sortName = item.Ename
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
  .set_home_right{
      width:797px;
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
</style>
