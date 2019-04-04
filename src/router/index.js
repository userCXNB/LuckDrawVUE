import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeDetail from '@/components/homeDetail'
import turntable from '@/components/turntable'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
import main from '@/components/main'
import tab from '@/components/tab'
import detail from '@/components/detail'
import listSon from '@/components/listSon'
import contentSon from '@/components/contentSon'
import content from '@/components/content'
import content1 from '@/components/content1'
import InformationSon from '@/components/InformationSon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
    },{
      path: '/contentSon',
      name: 'contentSon',
      component: contentSon
    },{
      path: '/content/:name/:code',
      name: 'content',
      component: content
    },{
      path: '/content1',
      name: 'content1',
      component: content1
    },{
      path: '/InformationSon',
      name: 'InformationSon',
      component: InformationSon
    },{
      path: '/turntable',
      name: 'turntable',
      component: turntable
    },{
      path: '/home/:channel',
      name: 'home',
      component: home,
      // children:[
      //   {
      //     path: '/detail',
      //     name: 'detail',
      //     component: detail
      //   },{
      //     path: '/homeDetail',
      //     name: 'homeDetail',
      //     component: homeDetail
      //   }
      // ]
    },{
      path: '/homeDetail',
      name: 'homeDetail',
      component: homeDetail
    },{
      path: '/listSon',
      name: 'listSon',
      component: listSon
    },{
      path: '/tab',
      name: 'tab',
      component: tab
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },{
      path: '/awesome',
      name: 'awesome',
      component: awesome
    }
  ]
})
