<template>
  <div>
      <article class="set-scenario">
           <dl class="set-name">
               <dt>应用场景</dt>
               <dd class="p_r_center" >Scenario</dd>
           </dl>
           <ul class="set-main">
               <template>
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="item in 3" :key="item">
                            <div class="setMainCarousel">
                                <li v-for="item in 4" :key="item" @click="toScenario">
                                    <div>
                                        <img src="../assets/images/case.jpg" alt="">
                                    </div>
                                    <p class="title">案例标题</p>
                                    <dl>
                                        <dt>
                                            <P class="tag p_r_center">标签/频道</P>
                                        </dt>
                                        <dd style="padding:16px;padding-bottom:0;">
                                            阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿
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
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" style="margin-top:10px;">
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
        maxResult:3,
        busy: false  
         }
  },
  watch: {

  },
  methods: {
    toScenario(){
        //   this.setSwitchStatus()
          this.$router.push({  //核心语句
                path:'/content1'
                })
    },
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        this.Information()
      }, 2000);
      console.log(this.data)
    },
    Information:function(){
                //行业资讯
                 console.log(this.InformationData)
        var _that = this
        this.$axios.get('/cms/api/info/v1/list?firstResult=0&maxResult='+this.maxResult)
        .then((res)=>{
            if(res.status == 200){
                //加载限制
                if(res.data.list.length ==  _that.InformationData.length){
                     _that.busy = false
                }
                _that.InformationData = res.data.list
                _that.maxResult=_that.maxResult+3

            }
                  
       })
    }
  },
  mounted() {
       this.$store.dispatch('setSwitchStatus',{banner:true,menu:true})
       this.Information()

  }
}
</script>
 
<style lang="less" scoped>
.set-scenario{
    .set-name{
      color:#44e2c9;text-align:center;margin-top:74px;
      dt{
        font-size:30px;line-height:36px;
      }
      dd{
        font-size:14px;line-height:35px;width:270px;border-bottom:1px solid #44e2c9;
      }
    }
    .set-main{
       padding:69px 0 25px;
       .setMainCarousel{
         display:flex;justify-content:space-around;align-items:center;
         li{
            text-align:center;width:174px;height:281px;box-shadow: 0 0 30px #e0e2e1;
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