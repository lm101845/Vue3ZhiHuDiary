import { createApp } from 'vue'
import App from './App.vue'

// 2. 引入组件样式
//导入VANT
import Vant from 'vant';
import './assets/reset.min.css';
import "amfe-flexible"
import 'vant/lib/index.css';
const app = createApp(App)
app.use(Vant);
app.mount('#app')
