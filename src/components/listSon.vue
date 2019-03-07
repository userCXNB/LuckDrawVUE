<template>
    <li class="list" @click="toDetail">
          <div class="title">CEA Salesperson Information</div>
          <div>Council For Estate Agencies / 06 Mar 2019</div>
          <div>Listing of 'Active' salesperson that is currently registered under CEA. Data is updated 3 times a day.</div>
          <img src="../assets/images/csv.jpg" alt="">
    </li>
</template>
 
<script>
export default {
  data() {
   return {
        }
  },
  watch: {

  },
  methods: {
    toDetail(){
       this.$router.push({  //核心语句
                path:'/detail'
                })
    }
  },
  mounted() {
  }
}
</script>
 
<style lang="less" scoped>
          .list{
            background:#fff;
            margin-bottom:2px;
            padding:20px 45px 16px 23px;
            div{
              font-size:12px;
              line-height: 24px;
            }
            .title{
                font-size:20px;
                line-height:32px;
            }
            img{
              margin:7px 0 7px;
            }
          }
</style>