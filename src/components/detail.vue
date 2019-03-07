<template>
   <div class="set_detail">
        <p>About this dataset</p>
        <div class="about">
            Listing of Registered Medical Devices
            <tab/>
        </div>
        <p>Similar Datasets</p>
        <listSon/>
   </div>
</template>
 
<script>
import tab from '@/components/tab'
import listSon from '@/components/listSon'

export default {
  components: {
      tab,listSon
  },
  data() {
    return {
      swiperOption: {//swiper3
    
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
    .set_detail{
      padding-bottom: 95px;
    }
    p{
      font-size: 20px;
      line-height: 56px;
      margin-top: 56px;
    }
    .about{
      padding:28px 15px;
      background:#fff;
    }
</style>