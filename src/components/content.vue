<template>
  <div style="padding-bottom:20px;">
      <contentSon :width="width"></contentSon> 
      <p style="font-size:27px;text-indent:75px;">相关资讯</p>
      <InformationSon></InformationSon>
      <InformationSon></InformationSon>
      <InformationSon></InformationSon>
  </div>
</template>
 
<script>
import contentSon from '@/components/contentSon'
import InformationSon from '@/components/InformationSon'
export default {
  components: {
     contentSon,InformationSon
  },
  data(){
    return {
      width:'auto'
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