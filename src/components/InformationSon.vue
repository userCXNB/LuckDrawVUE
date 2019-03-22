<template>
               <li @click="toInformation(data.code)">
                   <div>
                       <img :src="'/cms/api/info/v1/pic?code='+data.code" alt="">
                   </div>
                   <dl>
                       <dt>{{data.title}}</dt>
                       <dd style="font-size:15px;line-height:17px;">{{data.subtitle}}</dd>
                       <dd style="font-size:10px;line-height:13px;color:#44e2c9;text-align:left;margin-top:24px;">全文</dd>
                   </dl>
                   <p>{{data.createTime.time}}</p>
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
               float:right;width:650px;margin-top:11px;
               dt{font-size:23px;line-height:83px;}
           }
           p{position:absolute;bottom:-9px;right:0;background:#fff;}
       }
</style>