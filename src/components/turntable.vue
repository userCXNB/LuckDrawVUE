<template>
  <div>
    <div class="luck-wheel">
      <div id="luck-wheel" class="wheel" :style="rotateStyle">nihao</div>
      <img class="control" :src="controlImg" @click="startRotate" />
    </div>
    <h1 @click="isAllowClick = false">stop</h1>
    <h1>记录转动后的角度 可大于360度 = {{deg}}</h1>
    <h1>在360度内 最后指针停下的角度 = {{rotate}}</h1>
  </div>
</template>
 
<script>
import startBtn from '../assets/images/btn_start_n.png'
import rotateBtn from '../assets/images/btn_start_s.png'
let t1 = 0
let t2 = 0
export default {
  props: {
    endrotate: {
      type: Number,
      default: 0
    }
  },
 
  data() {
    return {
      // t1: 0,
      // t2: 0,
      divide: 90, // 平分度    注：必须修改
      speed: 0, // 转的幅度 默认匀速 最好为两个角度间 90/10  的十分之一  注：必须修改
      deg: 0, // 记录转动后的角度 可大于360
      rotate: 0, // 在360度内 最后指针停下的角度
      //   endrotate: false, // 传入endrotate
      isAllowClick: true, // 转动转盘的开关
      isAllowClick2: true, // 转动转盘的开关
      time: 100,
      controlImg: startBtn,
      rotateStyle:
        '-webkit-transform: rotate(' +
        this.deg +
        'deg);transform: rotate(' +
        this.deg +
        'deg);'
    }
  },
  watch: {
    endrotate(val) {
      if (val == 0) {
        this.reset()
      }
    }
  },
  methods: {
    reset() {
      t1 = 0
      t2 = 0
      this.speed = 0 // 转的幅度 默认匀速 最好为两个角度间 90/10  的十分之一  注：必须修改
      this.deg = 0 // 记录转动后的角度 可大于360
      this.rotate = 0 // 在360度内 最后指针停下的角度
      this.rotateStyle =
        '-webkit-transform: rotate(' +
        this.deg +
        'deg);transform: rotate(' +
        this.deg +
        'deg);'
    },
    startRotate() {
      let that = this
      that.isAllowClick = true
      that.controlImg = rotateBtn
      that.turntable()
    },
    endfuc() {
      let that = this
 
      if (that.endrotate) {
        let com = that.endrotate - that.rotate
        console.log(com)
        let comdeg = that.deg + com + 720
 
        // -----------------------计数时有问题--------------------------
        // let x = com * 1 + 720
        // let a = that.speed * that.speed / (2 * x)
        // t2 = setInterval(function() {
        //   if (that.isAllowClick2) {
        //     that.speed = that.speed <= 10 ? that.speed : that.speed - a
        //     that.deg = that.deg + that.speed
        //     that.rotate = that.deg % 360
        //     console.log('最终度数2')
        //     console.log(that.speed)
        //     if (that.deg > comdeg) {
        //       that.isAllowClick2 = false
        //     } else {
        //       that.rotateStyle =
        //         '-webkit-transform: rotate(' +
        //         that.deg +
        //         'deg);transform: rotate(' +
        //         that.deg +
        //         'deg);'
 
        //       console.log('最终度数')
        //       console.log(comdeg)
        //     }
        //   } else {
        //     for (let i = 0; i <= t2; i++) {
        //       clearInterval(i)
        //     }
        //     return
        //   }
        // }, that.time)
        //-------------------------END---------------------------
 
        //-------------------目前无bug------------------------
        that.rotateStyle =
          '-webkit-transform: rotate(' +
          comdeg +
          'deg);transform: rotate(' +
          comdeg +
          'deg);transition:all 2s ease-out'
 
        console.log('最终度数')
        console.log(comdeg)
        //------------------END---------------------
 
        that.isAllowClick = false
        that.controlImg = startBtn
        return
      }
    },
    turntable() {
      let that = this
      that.$emit('endlottery')
      t1 = setInterval(function() {
        console.log('最终度数')
 
        if (that.isAllowClick) {
          that.speed = that.speed >= 120 ? that.speed : that.speed + 10
          that.deg = that.deg + that.speed
          that.rotateStyle =
            '-webkit-transform: rotate(' +
            that.deg +
            'deg);transform: rotate(' +
            that.deg +
            'deg);transition:all 0.2s linear'
          that.rotate = that.deg % 360
          // console.log(that.deg)
          // console.log(that.deg % 360)
          that.endfuc()
        } else {
          for (let i = 0; i <= t1; i++) {
            clearInterval(i)
          }
        }
      }, that.time)
    }
  },
 
  mounted() {}
}
</script>
 
<style lang="less" scoped>
.luck-wheel {
  position: relative;
  width: 600px;
  height: 600px;
  background-size: cover;
 
  .wheel {
    width: 100%;
    height: 100%;
    color:red;
    background-image: url('../assets/images/lotterydial.png');
    background-size: cover;
  }
 
  .control {
    position: absolute;
    top: 195px;
    left: 200px;
    width: 200px;
    height: 200px;
  }
}
</style>