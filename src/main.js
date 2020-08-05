import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible'

//设置过滤器
import * as filters from './filters/index'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
