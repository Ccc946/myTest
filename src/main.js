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

import Message from '@/components/message'
Vue.prototype.$message = Message.install;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
