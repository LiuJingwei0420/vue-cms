//入口文件
console.log('ok')
import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)


//导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
 
// git push origin master
// 上面的是指令

// 按需导入 Mint-UI 中的组件
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 APP 根组件
import app from './App.vue'


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到实例上
})