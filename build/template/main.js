// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './src/app'
import 'global'

import importDirective from '../../directive'
import '../../modules/style/index.scss'
import store from './src/store'
import router from './src/router'
// import * as global from 'global/common'
import * as filters from '@/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.directive('loadmore', {
  inserted: (el, binding) => {
    el.addEventListener('scroll', function() {
      if ((el.scrollHeight - el.clientHeight) - el.scrollTop === 0) {
        binding.value()
      }
    })
  }
})
importDirective(Vue)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
