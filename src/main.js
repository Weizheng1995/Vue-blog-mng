import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.min.css'
// 支持$http
import axios from 'axios'
import utils from './js/CommonUtil'

Vue.use(ElementUI);
Vue.use(Router);

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
Vue.prototype.$util = utils;
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
      sessionStorage.removeItem('userInfo');
  }
  let user = JSON.parse(sessionStorage.getItem('userInfo'));
  if (!user && to.path != '/login') {
      next({
          path: '/login'
      });
  } else {
      next();
  }
});

// 引入路由
import router from "./router.js"

new Vue({
  el: '#app',
  router, // 注入到根实例中
  render: h => h(App)
})
