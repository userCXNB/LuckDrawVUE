<template>
    <div id="myChart" :style="{width: '900px', height: '900px'}"></div>
</template>
<script>
export default {
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
    series : [
        {
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:4,
                    name: '幽州',
                },
                {value:3, name: '荆州'},
                {value:2, name: '兖州'},
                {value:1, name: '益州'},
                {value:1, name: '西凉'}
            ]
        }
    ]
        });
    }
  }
}
</script>
