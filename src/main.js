// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './css/global.css'
import '../node_modules/plyr/dist/plyr.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import echarts from 'echarts'
import store from './store';
import axios from "axios";
import './mock/index'

//全局注册
Vue.prototype.$echarts = echarts 
Vue.prototype.$axios = axios 
Vue.use(animated)


Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
