<template>
    <div class="myChart" :style="{width: '320px', height: '280px'}"></div>
</template>
<script>
export default {
  props:{
      setOption:Object,
      num:String
  },
  mounted(){
      console.log(this)
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let _that = this
        let myChart = this.$echarts.init(document.getElementsByClassName('myChart')[_that.num])
        // 绘制图表
        myChart.setOption(this.setOption);
    }
  }
}
</script>
