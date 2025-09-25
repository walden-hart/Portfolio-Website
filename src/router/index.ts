import { createRouter, createWebHistory, type Router } from 'vue-router'

import Home from "@/components/Home.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
