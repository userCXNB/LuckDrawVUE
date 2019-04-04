<template>
               <li>
                   <div>
                       <img :src="'/cms/api/info/v1/pic?code='+data.code" alt="">
                   </div>
                   <dl>
                       <dt class="title"  @click="toInformation(data.code)">{{data.title|ellipsis(25)}}</dt>
                       <p style="margin-top:22px;color:gray;">{{data.publishTime.time|formatDate('yyyy-MM-dd hh:mm:ss')}}</p>
                       <dd style="font-size:15px;line-height:25px;margin-top:18px;margin-bottom:24px;color:gray;">{{data.summery|ellipsis(75)}}
                           <a style="font-size:13px;line-height:13px;color:#44e2c9;text-align:left;cursor:pointer" @click="toInformation(data.code)">全文</a>
                       </dd>
                   </dl>
                   
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
            name:'content',params:{code:code,name:'Information'}
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
           .title{
                cursor:pointer;
                }
                .title:hover{
                color:#52e4cd;
                }
           div{
               float:left;width:245px;margin-top:35px;
               img{width:245px;height:157px;}
            }
           dl{
               float:right;width:650px;margin-top:33px;
               dt{font-size:23px;line-height:30px;}
           }
        //    p{position:absolute;bottom:-11px;right:0;background:#fff;}
       }
</style>