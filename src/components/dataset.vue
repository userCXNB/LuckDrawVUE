<template>
  <div class="set-data">

  </div>
</template>
 
<script>
export default {
  data(){

  },
  watch: {
    endrotate(val) {
      if (val == 0) {
        this.reset()
      }
    }
  },
  methods: {
    startRotate() {
    }
  },
 
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
.set-main{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
}
</style>