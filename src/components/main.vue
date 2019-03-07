<template>
  <div>
         <p>Similar Datasets</p>
         <div class="set-main">
            <div class="set_echarts">
                <div class="echarts_title">Singapore Residents By Ethnic Group, End June, Annual (2018)</div>
                <echarts :setOption='setOption0' :num='"0"'/>
            </div>
            <div class="set_echarts">
                <div class="echarts_title">Singapore Residents By Ethnic Group, End June, Annual (2018)</div>
                <echarts :setOption='setOption1' :num='"1"'/>
            </div>
            <div class="set_echarts">
                <div class="echarts_title">Singapore Residents By Ethnic Group, End June, Annual (2018)</div>
                <echarts :setOption='setOption2' :num='"2"'/>
            </div>
            <div class="set_echarts">
                <div class="echarts_title">Singapore Residents By Ethnic Group, End June, Annual (2018)</div>
                <echarts :setOption='setOption3' :num='"3"'/>
            </div>
            <div class="set_echarts">
                <div class="echarts_title">Singapore Residents By Ethnic Group, End June, Annual (2018)</div>
                <echarts :setOption='setOption4' :num='"4"'/>
            </div>
         </div>
  </div>

</template>
 
<script>
import echarts from '@/components/echarts'
export default {
  components: {
      echarts
  },
  data() {
    return {
      setOption0: {series:[{
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
              },
        setOption1: {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
},
      setOption2: {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Step Start', 'Step Middle', 'Step End']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Step Start',
            type:'line',
            step: 'start',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'Step Middle',
            type:'line',
            step: 'middle',
            data:[220, 282, 201, 234, 290, 430, 410]
        },
        {
            name:'Step End',
            type:'line',
            step: 'end',
            data:[450, 432, 401, 454, 590, 530, 510]
        }
    ]
},
          setOption3:  {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
},
          setOption4: {series:[{
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
    }       
  
    }
  },
  watch: {

  },
  methods: {
  },
  mounted() {
      this.$store.dispatch('setSwitchStatus',true)
  }
}
</script>
 
<style lang="less" scoped>
    p{
      font-size: 20px;
      line-height: 56px;
      margin-top: 56px;
    }
.set-main{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

    .set_echarts{
       font-size:12px;
       line-height: 20px;
       width:320px;height:320px;background:#fff;
       padding:10px;
       padding-top:34px;
       margin-bottom: 20px;
       .echarts_title{
           height:40px;
       }
    }

}
</style>