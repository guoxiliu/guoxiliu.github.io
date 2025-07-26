import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Publications from './views/Publications.vue'
import Trajectory from './views/Trajectory.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/publications', component: Publications },
  { path: '/trajectory', component: Trajectory },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;