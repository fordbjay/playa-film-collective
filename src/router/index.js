import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'


const routes = [
  {
    path: '',
    name: '',
    component: Home,
    meta: {
      title: ""
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router