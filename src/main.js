import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible'

//设置过滤器
import * as filters from './filters/index'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

import vueSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'  //引入样式
Vue.use(vueSwiper)  //使用插件

//引入自定义全局组件
import './custom-components'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
