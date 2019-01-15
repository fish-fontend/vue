import Vue from 'vue'
import App from './App.vue'

// Math = 'Math'
// 组件中可以使用

// var a = 'a'
// 组件中不能使用

Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App)
}).$mount('#app')
console.info(vm)
