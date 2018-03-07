import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import routers from '../components/';
import demoRoter from './routers/demo.js'

export default new Router({
  routes: [{
    path: '/',
    redirect: to => {
      return 'login';
    },
    hidden: true
  }, {
    path: '/login',
    component: routers.Login,
    hidden: true
  }, {
    path: '/404',
    component: routers.Home,
    hidden: true,
    children: [{
      path: '',
      component: routers.NotFound
    }]
  }].concat(demoRoter)
})
