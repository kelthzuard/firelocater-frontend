import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import client from '@/components/client'
import login from '@/components/login'


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        requireLogin: false
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/client/:number',
      name: 'client',
      component: client,
      meta: {
        requireLogin: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    const token = window.localStorage.getItem('token')
    if (token == undefined) {
      next('/')
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
