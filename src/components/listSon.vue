<template>
    <li class="list">
          <div class="title" v-text="data.resources[0].name" @click="toDetail"></div>
          <div>作者 / {{data.author}}</div>
          <div>数据领域 / {{data.groups[0].title}}</div>
          <div>{{data.organization.title}} / {{data.resources[0].last_modified}}</div>
          <div>{{data.resources[0].description|ellipsis(100)}}</div>
          <img :src="'../../static/images/'+data.resources[0].format.toLowerCase()+'.png'" alt="">
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