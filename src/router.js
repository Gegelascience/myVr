import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AframeScene from './views/AframeScene.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/eiffelTower',
      name: 'eiffelTower',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EiffelTower.vue')
    },
    {
      path:'/solarSys',
      name:'solarSys',
      component: () => import('./views/SolarSystem.vue')
    },
    {
      path:'/scene/:id',
      name:'aframeScene',
      component: AframeScene,
      props:true
    }
  ]
})
