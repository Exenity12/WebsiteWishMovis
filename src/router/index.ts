import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from "@/Components/MainPage.vue"
import ActiveFilm from "@/Components/ActiveFilm.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/ActiveFilm',
    name: 'ActiveFilm',
    component: ActiveFilm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router


