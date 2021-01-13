import Vue from 'vue';
import evLoadingC from './src/loading.vue';
const EvLoading = Vue.extend(evLoadingC);0

/**
 * @desc 这样写好处，
 * 1. 不然需要在实例化里面赋值，增加代码量
 * 2. 实例化里面赋值，还需要强制绑定this,比较麻烦
*/
EvLoading.prototype.close = function close() {
  console.log('执行了destroy', this)
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el);
  }
  this.$destroy();
}

/**
 * @desc 需求分析
 * @param {String|Element} el 元素挂载
 * @param {String} loadingText 加载文本 
 * @param {}
 */

function initRender({el, loadingText}) {
  let target = el ? document.querySelector(el) : document.body;
  let instance = new EvLoading({
    // 与$mount()作用一样；
    el: document.createElement('div'),
     data() { 
       return {loadingText}
     }
   });
   target.appendChild(instance.$el);
   return instance;
}

export default initRender;

/**
 * @desc 注册组件的形式，暂时不需要
 */