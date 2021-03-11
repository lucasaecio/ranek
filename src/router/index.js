import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Product.vue'
import Login from '../views/Login.vue'
import User from '../views/profile/User.vue'
import UserProducts from '../views/profile/UserProducts.vue'
import UserUpdate from '../views/profile/UserUpdate.vue'
import UserPurchase from '../views/profile/UserPurchase.vue'
import UserSale from '../views/profile/UserSale.vue'

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
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/user',
    component: User,
    children: [
      {
        path: "",
        name: 'user',
        component:UserProducts
      },
      {
        path: "editar",
        name: 'user-update',
        component:UserUpdate
      },
      {
        path: "compras",
        name: 'user-purchase',
        component:UserPurchase
      },
      {
        path: "vendas",
        name: 'user-sale',
        component:UserSale
      },
    ]
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
