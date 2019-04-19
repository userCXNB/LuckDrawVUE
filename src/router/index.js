import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeDetail from '@/components/homeDetail'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
import main from '@/components/main'
import login from '@/components/login'
import bdsjh from '@/components/frame/bdsjh'
import bdyx from '@/components/frame/bdyx'
import sfxz from '@/components/frame/sfxz'
import register from '@/components/register'
import tab from '@/components/tab'
import detail from '@/components/detail'
import listSon from '@/components/listSon'
import contentSon from '@/components/contentSon'
import content from '@/components/content'
import content1 from '@/components/content1'
import accountSettings from '@/components/accountSettings'
import publish from '@/components/publish'
import industryEntry from '@/components/industryEntry'
import industryList from '@/components/industryList'
import InformationSon from '@/components/InformationSon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
        default:main,
      }
    },{
      path: '/contentSon',
      name: 'contentSon',
      component: contentSon
    },{
      path: '/industryList',
      name: 'industryList',
      component: industryList
    },{
      path: '/industryEntry',
      name: 'industryEntry',
      component: industryEntry
    },{
      path: '/publish',
      name: 'publish',
      component: publish
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/accountSettings',
      name: 'accountSettings',
      // component: accountSettings,
      components:{
        default:accountSettings,
        bdsjh:bdsjh,
        bdyx:bdyx,
        sfxz:sfxz,
      }
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
