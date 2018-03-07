import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import router from './router/';
import leftmenu from './leftmenu/';
import user from './userinfo/';
import global from './global/';

export default new Vuex.Store({
    modules: {
        global,
        router,
        leftmenu,
        user
    }
});