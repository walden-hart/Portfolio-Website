import { createRouter, createWebHistory, type Router } from 'vue-router'

import Home from "@/components/Home.vue"
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: "About Me", component: AboutMe },
  { path: '/projects', name: "Projects", component: Projects }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
