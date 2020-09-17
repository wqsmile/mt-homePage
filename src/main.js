import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './http'

Vue.config.productionTip = false

Vue.directive('document-click', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false)
  }
})
Vue.directive('document-scroll', {
  bind(el, binding) {
    // const { arg } = binding
    // document.addEventListener('scroll', e => {
    //   const { scrollHeight, offsetHeight, scrollTop } = e.target.scrollingElement
    //   const dec = scrollHeight - offsetHeight - scrollTop
    //   console.log(arg, 1)
    //   if (!arg && dec > 500) {
    //     // console.log(dec)
    //     binding.value()
    //   }
    // }, false)
  },
  update(el, binding) {
    document.addEventListener('scroll', e => {
      const { scrollHeight, offsetHeight, scrollTop } = e.target.scrollingElement
      const dec = scrollHeight - offsetHeight - scrollTop
      if (dec > 500) {
        binding.value()
      }
    }, false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
