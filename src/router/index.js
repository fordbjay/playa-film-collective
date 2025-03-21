import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;