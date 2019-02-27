import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import PhotoWall from '@/components/PhotoWall'
import turntable from '@/components/turntable'
import element from '@/components/element'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/PhotoWall',
      name: 'PhotoWall',
      component: PhotoWall
    },{
      path: '/turntable',
      name: 'turntable',
      component: turntable
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
