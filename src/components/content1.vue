<template>
  <div class="core1" style="padding-bottom:20px;display:flex;justify-content:space-between;">
      <contentSon :width="'765px'" :data='contentSonData'></contentSon> 
       <!-- <div class="float" :style="floatStyle">
          <h2>相关数据集</h2>
          <ul class="innerbox">
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
             <li>上海卫生数据统计</li>
          </ul>
       </div> -->
  </div>
</template>
 
<script>
import contentSon from '@/components/contentSon'
export default {
  components: {
     contentSon
  },
  data() {
    return {
      floatStyle:"width:315px;height:340px;background:#f6f6f6;",
      contentSonData:{}
    }
  },
  watch: {

  },
  methods: {
    menu(float,core1){
      this.scroll = document.documentElement.scrollTop
      if(this.scroll-float> 0){
        this.floatStyle="width:315px;height:340px;background:#f6f6f6;position:fixed;top:0;left:"+Number(core1.offsetLeft+865)+"px;"
      }else{
        this.floatStyle="width:315px;height:340px;background:#f6f6f6"
      }
      

    }
  },
 
  mounted() {
    //addEventListener中用选择器出现undefined
    //addEventListener怎么传参
    //如何设置浮动left距离,确保随屏幕百分比而改变
    // let float = document.getElementsByClassName('float')[0].offsetTop-720
    //在contentSon里改变了banner的status,在挂载content1时，offsetTop里算了banner的高,挂载是子到父，子的mounted结束时才会执行父组件
    // let core1 = document.getElementsByClassName('core1')[0]
    // this.menu.bind(null,float,core1)()
    // window.addEventListener('scroll',this.menu.bind(null,float,core1))


    console.log(this.$route.params.code)
    var _that = this
    this.$axios.get('/cms/api/info/v1/newsDetail?code='+this.$route.params.code)
    .then((res)=>{
        if(res.status == 200){
        _that.contentSonData = res.data 
        _that.contentSonData.contentName = '应用场景'
        }
              
    })

  }
}
</script>
 
<style lang="less" scoped>
.float{
  h2{
      font-size:20px;
      line-height:60px;
      margin-top:7px;
  }
  ul{
    height:260px;
    margin-right:21px;
    overflow-y:scroll;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    li{
      width:236px;
      font-size:18px;
      line-height:49px;
      border-bottom:2px solid #fff;
    }
  }

.innerbox::-webkit-scrollbar{ width:4px;}
.innerbox::-webkit-scrollbar-thumb{
    border-radius:10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
/*         .innerbox::-webkit-scrollbar-thumb { 为什么会报错
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        } */
.innerbox::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}


}
</style>