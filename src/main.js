// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './css/global.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import echarts from 'echarts'
import store from './store';
import axios from "axios";
import "xlsx/dist/xlsx.core.min.js";
import './mock/index'
import 'babel-polyfill'
import md5 from 'js-md5';
import _ from 'lodash'
import infiniteScroll from 'vue-infinite-scroll'//下拉加载数据
import filters from '@/filters/filters.js';//main.js里注册filter

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

console.log(_)
//全局注册
Vue.prototype.$echarts = echarts 
Vue.prototype.$axios = axios 
Vue.prototype.lodash = _
Vue.prototype.$md5 = md5;

Vue.use(animated)
Vue.use(infiniteScroll)

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
     Bus: new Vue()
   }
})
