<template>
   <div :style="'padding:40px;width:'+width+';'">
      <dl>
          <dt style="font-size:12px;line-height:61px;color:gray;">我的位置:
              <router-link to='/'>首页</router-link>
              >{{data.contentName=='Scenario'? '应用场景':'行业资讯'}}
              >正文
          </dt>
          <dd :style="title">{{data.title}}</dd>
          <!-- <dd style="font-size:15px;line-height:25px;">{{data.summery}}</dd> -->
          <dd style="font-size:14px;line-height:74px;margin-bottom:13px;"><i>来源:{{data.newsFrom}}</i><i style="margin-left:10px;">{{data.publishTime.time|formatDate('yyyy-MM-dd hh:mm:ss')}}</i></dd>
          <!-- <dd><img :src="'/cms/api/info/v1/pic?code='+data.code" style="width:100%;" alt=""></dd> -->
          <dd v-html="data.content"></dd>
      </dl>
   </div>
</template>
 
<script>
import {mapActions,mapState,mapGetters} from "vuex";
export default {
  props:{
    width:String,
    data:Object
  },
  data() {
    return {
      title:'font-size:41px;line-height:61px;'
    }
  },
  watch: {

  },
  methods: {
    ...mapActions(['setSwitchStatus']),
    ...mapGetters(['getSwitchStatus']),
  },
 
  mounted() {
  this.setSwitchStatus({banner:false,menu:false})
  //   let data = new FormData();
  //   data.append('url','http://activity.chinadep.com');
  //   this.$axios.post(
  //   '/api/weChat/getSign',data
  // ).then((res)=>{
  //   console.log(res)
  // })
   var that = this
  window.scrollTo(0,0);
 
      (function isMobile(){
        if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            that.title = 'font-size:20px;line-height:30px;'
            console.log(that.data)
        }else{
        }
    })()

  }
}
</script>
 
<style lang="less" scoped>
</style>