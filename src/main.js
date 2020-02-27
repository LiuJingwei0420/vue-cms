//入口文件
console.log('ok')
import Vue from 'vue'

//导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)  



import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
//导入 APP 根组件
import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})