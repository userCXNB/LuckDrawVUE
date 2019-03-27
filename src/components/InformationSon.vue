<template>
               <li @click="toInformation(data.code)">
                   <div>
                       <img :src="'/cms/api/info/v1/pic?code='+data.code" alt="">
                   </div>
                   <dl>
                       <dt>{{data.title|ellipsis(25)}}</dt>
                       <dd style="font-size:15px;line-height:17px;">{{data.summery|ellipsis(83)}}</dd>
                       <a style="font-size:13px;line-height:13px;color:#44e2c9;text-align:left;margin-top:24px;">全文</a>
                   </dl>
                   <p>{{data.createTime.time|formatDate('yyyy-MM-dd hh:mm:ss')}}</p>
               </li>
</template>
 
<script>
export default {
  props:['data'],
  data() {
   return {
        }
  },
  watch: {
     data(){
         console.log(this.data)
     }
  },
  methods: {
      toInformation(code){
        this.$router.push({
            name:'content',params:{code:code}
            })
      }
  },
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
       li{
           height:223px;margin:0 120px;border-bottom:1px solid #e4e4e4;position:relative;
           div{
               float:left;width:245px;margin-top:35px;
               img{width:245px;height:157px;}
            }
           dl{
               float:right;width:650px;margin-top:33px;
               dt{font-size:23px;line-height:30px;}
           }
           p{position:absolute;bottom:-11px;right:0;background:#fff;}
       }
</style>