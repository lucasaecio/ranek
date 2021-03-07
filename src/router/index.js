import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  }, {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props: true
  },
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
