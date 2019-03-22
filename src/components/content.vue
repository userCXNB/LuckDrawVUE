<template>
  <div style="padding-bottom:20px;">
      <contentSon :width="width" :data='contentSonData'></contentSon> 
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
      width:'auto',
      contentSonData:{}
    }
  },
  watch: {

  },
  methods: {
    drawLine(){
    }
  },
 
  mounted() {
    console.log(this.$route.params)
        var _that = this
        this.$axios.get('/cms/api/info/v1/newsDetail?code='+this.$route.params.code)
        .then((res)=>{
            if(res.status == 200){
            _that.contentSonData = res.data 
            }
                  
       })
  }
}
</script>
 
<style lang="less" scoped>
</style>