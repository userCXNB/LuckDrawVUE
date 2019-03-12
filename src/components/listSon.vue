<template>
    <li class="list" @click="toDetail">
          <div class="title" v-text="data.resources[0].name"></div>
          <div>{{data.organization.title}} / {{data.resources[0].last_modified}}</div>
          <div v-text='data.resources[0].description'></div>
          <img src="../assets/images/csv.jpg" alt="">
    </li>
</template>
 
<script>
export default {
  props:['data'],
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
    console.log(this.data.resources)
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