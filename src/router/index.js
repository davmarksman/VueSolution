import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// @ is an alias to /src. Can also just do ../views
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'

// style sheets
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    component: ProductList
  },
  {
    path: '/product/:id',
    component: Product,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
