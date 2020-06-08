import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '花漾锦江',
        isLogin: false
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    }
  ]
})
