<template>
  <div>
      <article class="set-scenario">
           <dl class="set-name">
               <dt>应用场景</dt>
               <dd class="p_r_center" >Scenario</dd>
           </dl>
           <ul class="set-main">
               <template>
                   <el-carousel>
                        <el-carousel-item v-for="(ScenarioItem,index) in ScenarioData" :key="index">
                            <div class="setMainCarousel">
                                <li v-for="(item,ind) in ScenarioItem" :key="ind" @click="toScenario(item.code)">
                                    <div>
                                        <img :src="'/cms/api/info/v1/pic?code='+item.code" alt="">
                                    </div>
                                    <marquee class="title" style="width:165px;">{{item.title}}</marquee>
                                    <dl>
                                        <dt>
                                            <P class="tag p_r_center">{{item.newsFrom|ellipsis(5)}}</P>
                                        </dt>
                                        <dd style="padding:16px;padding-bottom:0;">
                                            {{item.summery|ellipsis(45)}}
                                        </dd>
                                        <dd style="color:#44e2c9;text-align:right;padding-right:16px;">全文</dd>
                                    </dl>
                                </li>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </template>
           </ul>
      </article>
      <article class="setInformation">
           <dl class="setName">
               <dt>行业资讯</dt>
               <dd class="p_r_center">Information</dd>
           </dl>
           <ul class="setMain">
             <InformationSon v-for="(item,index) in InformationData" :key="index" :data="item"></InformationSon>
           </ul>

      </article>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="true" infinite-scroll-distance="10" style="margin-top:10px;">
        <template>
            <el-table
                v-loading="busy"
                element-loading-text="内容加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="#fff"
                style="width: 100%">
            </el-table>
        </template>
    </div>
  </div>
</template>
 
<script>
import infiniteScroll from 'vue-infinite-scroll'
import InformationSon from '@/components/InformationSon'
var count = 0;
export default {
    components:{
        InformationSon
    },
    directives: {infiniteScroll},
  data() {
    return {
        InformationData: [],
        ScenarioData:[],
        maxResult:3,
        busy: false  
         }
  },
  watch: {
     ScenarioData(){
         console.log(this.ScenarioData)
     }
  },
  methods: {
    toScenario(code){
        console.log(code)
          this.$router.push({  
                name:'content1',params:{code:code}
                })
    },
    loadMore: function(){
      this.busy = true;
      setTimeout(() => {
        this.Information()
      }, 1000);
    },
    Information:function(){
                //行业资讯
                 console.log(this.InformationData)
        var _that = this
        this.$axios.get('/cms/api/info/v1/list?firstResult=0&type=2&maxResult='+this.maxResult)
        .then((res)=>{
            if(res.status == 200){
                //加载限制
                console.log(res.data.list.length)
                console.log(_that.InformationData.length)
                if(res.data.list.length ==  _that.InformationData.length){
                     _that.busy = false
                }
                _that.InformationData = res.data.list
                _that.maxResult=_that.maxResult+3

            }
                  
       })
    },
    Scenario:function(){
                //应用场景
                 console.log(this.ScenarioData)
        var _that = this
        this.$axios.get('/cms/api/info/v1/list?firstResult=0&type=1&maxResult=12')
        .then((res)=>{
            if(res.status == 200){
                //加载限制
                for(var i=0;i<Math.ceil(res.data.list.length/4);i++){
                    _that.ScenarioData.push([])
                }
                for(var i=0;i<_that.ScenarioData.length;i++){
                    _that.ScenarioData[i] = res.data.list.slice(i*4,(i+1)*4)
                }
                console.log(_that.ScenarioData)
            }
                  
       })
    }
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:true,menu:true})
       this.Information()
       this.Scenario()

  }
}
</script>
 
<style lang="less">
.set-scenario{
    .set-name{
      color:#44e2c9;text-align:center;margin-top:74px;
      dt{
        font-size:30px;line-height:36px;
      }
      dd{
        font-size:14px;line-height:35px;width:270px;border-bottom:3px solid #44e2c9;
      }
    }
    .set-main{
       padding:69px 0 25px;
       .el-carousel__container{
           height:410px!important;
       }
       .setMainCarousel{
         display:flex;justify-content:space-around;align-items:center;
         li{
            text-align:center;width:280px;height:376px;box-shadow: 0 0 30px #e0e2e1;
            img{
                width:280px;
                height:180px;
            }
            .title{height:33px;font-size:13px;line-height:33px;color:#44e2c9;}
             dd{font-size:10px;line-height:13px;}
            .tag{padding-top:8px;width:73px;font-size:12px;line-height:20px;background:#edefee url(../assets/images/1.jpg) no-repeat;}
         }
       }
    }
}
.setInformation{
  .setName{
      color:#44e2c9;text-align:center;margin-top:74px;
      dt{font-size:30px;line-height:36px;}
      dd{font-size:14px;line-height:35px;width:270px;border-bottom:3px solid #44e2c9;}
      }
   .setMain{
       margin-top:18px;
   }
}
</style>