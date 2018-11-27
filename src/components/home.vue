<template>
  <div class="height">
        <div class="top">
           <p v-html="msg"></p>
        </div>
        <slider ref="slider" :options="options" @tap='onTap' style="height:100%;">
          <!-- 直接使用slideritem slot -->
           <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
  </div>    
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider';
import {mapActions,mapState} from "vuex";
export default {
  data () {
    return {
      msg: '抽奖系统',
      someList:[{
            html: 'slide1',
            style: {
              'background':"url(./static/images/46eae50db6.jpg)",
              'background-size':'cover'
            }
          },
          {
            html: 'slide2',
            style: {
              'background':"url('./static/images/ed57bce8c4.jpg')",
              'background-size':'cover'
            }
          },
          {
            html: 'slide3',
            style: {
              'background':'url(./static/images/1ef7ea6559.jpg)',
              'background-size':'cover'
            }
          }],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:1000,
          autoplay:3000,
          loop:true,
          direction:'vertical',
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 300,
          effect:'fade'
        } 
    }
  },
      components: {
      slider,
      slideritem
    },
    mounted () {
      this.setState('payload11')
      this.$axios.post('/user') //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中  http://10.101.8.163:8080/hello
        .then((res)=>{
          console.log(res)
          this.datalist = res.data.data
        })
        .catch((err)=>{
          console.log('调用失败',err)
        })

      // this.$store.commit("SET_STATE")
      // this.$store.dispatch("setState")
    },
     methods: {
       ...mapActions(['setState']),
      onTap (data) {
        if(data.currentPage==0){
           this.$router.push("/PhotoWall")
        }else{
           this.$router.push("/turntable")
        }
        
      }
    }
}
</script>

<style>
        #app{
          height:100%;
        }
        .height{
          height:100%;
        }
        .top{
         height:100%;background:url(../assets/images/home.gif) no-repeat center;background-size:cover;overflow:hidden;
        }
        .top>p{
          height:100%;
          text-align:center;
          font:italic 700 100px/100px '宋体'; 
          color: #FFCC33;
          margin-top:30%;
        }
</style>
