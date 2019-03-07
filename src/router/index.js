import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import turntable from '@/components/turntable'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
import main from '@/components/main'
import tab from '@/components/tab'
import detail from '@/components/detail'
import listSon from '@/components/listSon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
    },{
      path: '/turntable',
      name: 'turntable',
      component: turntable
    },{
      path: '/home',
      name: 'home',
      component: home
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
      path: '/main',
      name: 'main',
      component: main
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
