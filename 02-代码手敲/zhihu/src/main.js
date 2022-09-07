import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

// 2. 引入组件样式
//导入VANT
import Vant from 'vant';
import './assets/reset.min.css';
import "amfe-flexible"
import 'vant/lib/index.css';
//处理最大宽度
import {handleMaxWidth} from './assets/utils'
handleMaxWidth();
//屏幕大小改变时，也执行这个方法
window.addEventListener('resize',handleMaxWidth);
//导入API
//在Vue2里面可以这样写，但是Vue3里面不行了
//setup函数里面没有this了，也就没有Vue实例了。
// import api from './api/index'
// Vue.prototype.$api = api;

const app = createApp(App)
app.use(Vant);
app.use(store);
app.use(router);
app.mount('#app')

//  首页             /
//  详情             /detail
//  登录             /login
//  个人信息          /info
//  收藏             /store
//  修改个人信息      /update
