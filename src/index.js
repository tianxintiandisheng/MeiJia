// index.js
// 需 npm i vue --save
import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router' // 导入vue-router 库

//组件引入

import home from './components/home/home.vue'
import MoreInformation from './components/more-information.vue'
import Complete from './components/complete.vue'
import Download from './components/download.vue'


Vue.use(VueRouter);

const routes = [
    //利用重定向设置默认路由
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/MoreInformation', component: MoreInformation },
    { path: '/Complete', component: Complete },
    { path: '/Download', component: Download }
];

const router = new VueRouter({
    routes
});

new Vue({
    router,
    el: '#app',
    render: h => h(App),
});