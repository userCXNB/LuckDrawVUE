import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import PhotoWall from '@/components/PhotoWall'
import turntable from '@/components/turntable'
// import circular from '@/components/circular'
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
    }
    // ,{
    //   path: '/circular',
    //   name: 'circular',
    //   component: circular
    // }
  ]
})
