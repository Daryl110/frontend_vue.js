import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: () => import('./views/Noticias.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('./components/Registro.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('./views/NotFound.vue')
    }
  ]
})
