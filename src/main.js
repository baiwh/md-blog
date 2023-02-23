import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import './assets/main.css'

import HomePage from '@/pages/HomePage.vue'
import AboutMe from '@/pages/AboutMe.vue'
import BlogList from '@/pages/BlogList.vue'
import BlogDetail from '@/pages/BlogDetail.vue'
import BlogType from '@/pages/BlogType.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about-me', component: AboutMe },
  {
    path: '/blog-type',
    component: BlogType,
    children: [
      { path: '/blog-detail', component: BlogDetail },
    ]
  },
  { path: '/blog-list', component: BlogList },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

