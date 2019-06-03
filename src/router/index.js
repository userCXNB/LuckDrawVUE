import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeDetail from '@/components/homeDetail'
import home1 from '@/components/home1'
import homeDetail1 from '@/components/homeDetail1'
import echarts from '@/components/echarts'
import awesome from '@/components/awesome'
import main from '@/components/main'
import login from '@/components/login'
import bdsjh from '@/components/frame/bdsjh'
import bdyx from '@/components/frame/bdyx'
import sfyz from '@/components/frame/sfyz'
import wxgl from '@/components/frame/wxgl'
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
import reset from '@/components/reset'
import industryList from '@/components/industryList'
import InformationSon from '@/components/InformationSon'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name:'main',
      components:{
        default:main,
        wxgl:wxgl,
      }
    },{
      path: '/contentSon',
      name: 'contentSon',
      component: contentSon
    },{
      path: '/reset',
      name: 'reset',
      component: reset
    },{
      path: '/industryList',
      name: 'industryList',
      component: industryList
    },{
      path: '/industryEntry/:key',
      name: 'industryEntry',
      component: industryEntry
    },{
      path: '/publish',
      name: 'publish',
      component: publish
    },{
      path: '/login/:type/:unionid',
      name: 'login',
      component: login
    },{
      path: '/register/:type/:unionid',
      name: 'register',
      component: register
    },{
      path: '/accountSettings/:accountSetInit',
      name: 'accountSettings',
      // component: accountSettings,
      components:{
        default:accountSettings,
        bdsjh:bdsjh,
        bdyx:bdyx,
        sfyz:sfyz,
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
    },{
      path: '/homeDetail',
      name: 'homeDetail',
      component: homeDetail
    },{
      path: '/home1/:channel',
      name: 'home1',
      component: home1,
    },{
      path: '/homeDetail1',
      name: 'homeDetail1',
      component: homeDetail1
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
