<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/images/1ef7ea6559.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1ef7ea6559.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1ef7ea6559.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1ef7ea6559.jpg"></swiper-slide>
    </swiper>
    <!--以下看需要添加-->
    <div class="swiper-scrollbar"></div> //滚动条
    <div class="swiper-button-next"></div> //下一项
    <div class="swiper-button-prev"></div> //上一项
    <div class="swiper-pagination"></div> //标页码
  </div>
</template>
 
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {//swiper3
      autoplay: 3000,
      speed: 1000,
      }
    }
  },
  watch: {

  },
  methods: {
    drawLine(){
    }
  },
 
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
</style>