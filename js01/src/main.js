import Vue from 'vue'
import App from './App.vue'
require('./components/loading')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
