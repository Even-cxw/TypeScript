import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
require('./assets/css/reset.css');
// element-ui的用法
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map