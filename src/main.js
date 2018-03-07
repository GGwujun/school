// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex store
import store from './store/';


// 注册element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import modal from './plugins/modal'
Vue.use(modal)


//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.config.productionTip = false

import 'register/';
import 'mixin/';

// import 'mixin/';
router.beforeEach((to, from, next) => {
  debugger;
  window.scroll(0, 0);
  var userinfo = store.state.user.userinfo;
  if (!userinfo.token && to.path !== '/login') {
    store.dispatch('remove_userinfo');
    next('/login');
  } else {
    //判断是否开启权限
    if (userinfo.access_status === 1) {
      var web_routers = typeof userinfo.web_routers === 'object' ? userinfo.web_routers : {};

      //判断当前用户是否拥有目标页面访问权限，防止用户强制在地址栏输入访问没有权限的页面
      if (!web_routers[to.path]) {
        ElementUI.MessageBox.alert('您没用权限访问此页面！', '访问错误', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (userinfo.default_web_routers) {
            next(userinfo.default_web_routers);
          } else {
            store.dispatch('remove_userinfo');
            next('/login');
          }
        });
      } else {
        NProgress.start();
        next();
      }
    } else {

      if (userinfo.token && to.path === '/login') {
        next({
          path: '/demo/course/list'
        });
      } else {
        NProgress.start();
        next();
      }
    }

  }
})

router.afterEach(transition => {
  NProgress.done();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
