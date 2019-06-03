<template>
  <div style="padding-bottom:20px;">
      <div v-show="configTest=='pc'" style="position:fixed;right:0px;padding:5px;background:#fff;width:132px;">
           <span style="font-size:10px;">分享到微信</span>
           <div id="qrcode"></div>
           <span style="display:inline-block;font:9px/12px ''!important;margin-top:5px;color:gray;">用微信"扫一扫",点击右上角分享按钮,即可将网页分享给您的微信好友或朋友圈</span>
      </div>
      <contentSon :width="width" :data='contentSonData'></contentSon> 
      <!-- <p style="font-size:27px;text-indent:75px;">相关资讯</p> -->
      <InformationSon></InformationSon>
      <InformationSon></InformationSon>
      <InformationSon></InformationSon>
  </div>
</template>
 
<script>
import contentSon from '@/components/contentSon'
import InformationSon from '@/components/InformationSon'
import QRCode from 'qrcodejs2'  // 引入qrcode

import wx from "weixin-js-sdk";
export default {
  components: {
     contentSon,InformationSon
  },
  data(){
    return {
      width:'auto',
      contentSonData:{},
      configTest:'pc'
    }
  },
  watch: {

  },
  methods: {
    drawLine(){
    },
    qrcode() {//生成二维码
      let qrcode = new QRCode('qrcode', {
        width: 132,  
        height: 132,
        text: document.URL, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
    },
    init(data,imgurl,title,summery){
        //(从后端拿的wx配置参数,缩略图,标题,介绍)
          wx.config({
              debug:false,
              appId:data.appId,		        //必填，公众号唯一标识
              timestamp:data.timestamp,	//必填，生成签名的时间戳
              nonceStr:data.nonceStr,	    //必填，生成签名的随机串
              signature:data.signature,	  //必填，生成的签名
              jsApiList:['onMenuShareTimeline','onMenuShareAppMessage']	   //必填，需要使用的JS接口列表 
          });
          wx.error((res)=>{
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            alert("errorMSG:"+res);
          });
          wx.ready(()=>{
              wx.onMenuShareTimeline({//分享到朋友圈
                  title:title,//标题   
                  // link:this.share.link,// 分享链接,将当前登录用户转为puid,以便于发展下线，不写默认为当前地址
                  desc:summery,//介绍
                  imgUrl:imgurl.replace("\"", "").replace("\"", ""),//因地址前后有"需去掉，为小缩略图
                  success: function (res){
                      console.log("onMenuShareTimeline res",res);
                  },
                  cancel:function(){}    //取消分享后执行的回调函数
              })
              wx.onMenuShareAppMessage({//分享给朋友
                  title:title ,
                  // link:this.share.link,
                  desc:summery,
                  imgUrl:imgurl.replace("\"", "").replace("\"", ""),
                  success: function (res){ //确认分享后执行的回调函数
                      console.log("onMenuShareAppMessage res",res);
                  },
                  cancel:function(){}     //取消分享后执行的回调函数
              });
          });
        },
   },
 
  mounted() {
    (function(){
            if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                this.configTest = 'mobile'
            }else{
               this.configTest = 'pc'
            }
      }.bind(this))()
        this.qrcode();
        var _that = this
        this.$axios.get('/cms/api/info/v1/newsDetail?code='+this.$route.params.code)
        .then((res)=>{
            if(res.status == 200){

            _that.contentSonData = res.data 
            _that.contentSonData.contentName = this.$route.params.name
             document.title = _that.contentSonData.title
             var title = res.data.title 
             var summery = res.data.summery 

              var str = res.data.content//content里面获取第一张照片地址
            //   var imgReg = /<img.*?(?:>|\/>)/gi;//匹配所以img标签
              var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;//匹配所有的src里面的地址
              var imgurl = str.match(srcReg)[0]//拿到第一个src='http://xxxxxx'

              let data = new FormData();
              data.append('url',window.location.href);
              this.$axios.post('/api/weChat/getSign',data)//把当前地址传给后端
              .then((res)=>{
                        this.init(res.data.data,imgurl.split('=')[1],title,summery)
            })

            }
                  
       })


  }
}
</script>
 
<style lang="less" scoped>
</style>