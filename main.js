// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入echarts
//import eacharts from 'echarts'
//Vue.prototype.$echarts=eacharts

Vue.config.productionTip = false

//引入样式重置
import '../static/css/reset.css'

//引入ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css';

//引入及使用Element UI
import {Row,Col} from 'element-ui';
Vue.use(Row).use(Col);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
