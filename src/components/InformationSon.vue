<template>
               <li @click="toInformation">
                   <div>
                       <img src="../assets/images/case1.jpg" alt="">
                   </div>
                   <dl>
                       <dt>阿斯顿发阿斯顿发阿斯顿发阿斯</dt>
                       <dd style="font-size:15px;line-height:17px;">阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发</dd>
                       <dd style="font-size:10px;line-height:13px;color:#44e2c9;text-align:left;margin-top:24px;">全文</dd>
                   </dl>
                   <p>2019-3-12 21:18:27</p>
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

  },
  methods: {
    toInformation(){
          this.$router.push({
                path:'/content'
                })
    }
  },
  mounted() {
    console.log(this.data.resources)
  }
}
</script>
 
<style lang="less" scoped>
       li{
           height:223px;margin:0 120px;border-bottom:1px solid #e4e4e4;position:relative;
           div{float:left;width:245px;margin-top:35px;}
           dl{
               float:right;width:650px;margin-top:11px;
               dt{font-size:23px;line-height:83px;}
           }
           p{position:absolute;bottom:-9px;right:0;background:#fff;}
       }
</style>