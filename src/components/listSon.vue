<template>
    <li class="list">
          <div class="title" v-text="data.resources[0].name" @click="switchStatus(data)"></div>
          <div>资源方 : {{data.organization.title}}</div>
          <div>数据来源 : {{data.author}}</div>
          <div>数据领域 : {{data.groups[0].title}}</div>
          <div>更新时间 : {{data.resources[0].last_modified}}</div>
          <div>{{data.resources[0].description|ellipsis(100)}}</div>
          <img :src="'../../static/images/'+data.resources[0].format.toLowerCase()+'.png'" alt="">
    </li>
</template>
 
<script>
export default {
  props:['data','switchStatus'],
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
                cursor:pointer;
            }
            .title:hover{
            color:#52e4cd;
            }
            img{
              margin:7px 0 7px;
            }
          }
</style>