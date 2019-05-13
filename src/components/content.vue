<template>
  <div style="padding-bottom:20px;">
      <div id="qrcode" style="position:absolute;right:0px;"></div>
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
      contentSonData:{}
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
        
          wx.config({
              debug:false,
              appId:data.appId,		        //必填，公众号唯一标识
              timestamp:data.timestamp,	//必填，生成签名的时间戳
              nonceStr:data.nonceStr,	    //必填，生成签名的随机串
              signature:data.signature,	  //必填，生成的签名
              jsApiList:['onMenuShareTimeline','onMenuShareAppMessage']	   //必填，需要使用的JS接口列表 
          });
          wx.error((res)=>{
              for(let msg in res){
                let obj = {
                    show:true,
                    msg:JSON.stringify(res[msg]),
                    err:""
                }
                this.$store.commit("ci/SETHOMEALERT",obj);
              }
          });
          console.log(imgurl.replace("\"", "").replace("\"", "")=="http://cf.dtcj.com/6fc22ca2-ef58-4e29-9775-fd53d1ce4150.jpg")
          console.log()
          wx.ready(()=>{
              wx.onMenuShareTimeline({
                  title:title,     
                  // link:this.share.link,
                  desc:summery,
                  imgUrl:imgurl.replace("\"", "").replace("\"", ""),
                  success: function (res){
                      console.log("onMenuShareTimeline res",res);
                  },
                  cancel:function(){}    //取消分享后执行的回调函数
              })
              wx.onMenuShareAppMessage({
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
       this.qrcode();
    console.log(wx)
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
              var imgReg = /<img.*?(?:>|\/>)/gi;
              var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
              var imgurl = str.match(srcReg)[0]

              let data = new FormData();
              data.append('url',window.location.href);
              this.$axios.post('/api/weChat/getSign',data)
              .then((res)=>{
                        console.log(res)
                        this.init(res.data.data,imgurl.split('=')[1],title,summery)
            })

            }
                  
       })


  }
}
</script>
 
<style lang="less" scoped>
#qrcode {
    display: inline-block;
    img {
      width: 132px;
      height: 132px;
      background-color: #fff; //设置白色背景色
      padding: 6px; // 利用padding的特性，挤出白边
    }
  }
</style>