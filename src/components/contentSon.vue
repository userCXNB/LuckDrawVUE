<template>
   <div :style="'padding:40px;width:'+width+';'">
      <dl>
          <dt style="font-size:12px;line-height:61px;color:gray;">我的位置:
              <router-link to='/'>首页</router-link>
              >{{data.contentName=='Scenario'? '应用场景':'行业资讯'}}
              >正文
          </dt>
          <dd style="font-size:41px;line-height:61px;">{{data.title}}</dd>
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
  window.scrollTo(0,0);
  }
}
</script>
 
<style lang="less" scoped>
</style>