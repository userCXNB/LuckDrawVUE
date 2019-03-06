import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import turntable from '@/components/turntable'
import element from '@/components/element'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
import main from '@/components/main'
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
      path: '/main',
      name: 'main',
      component: main
    },{
      path: '/element',
      name: 'element',
      component: element
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
