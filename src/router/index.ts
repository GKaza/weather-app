import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:id',
    name: 'City',
    props: true,
    component: City
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = new VueRouter({
  routes
})

export default router
