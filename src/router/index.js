import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
        title: "Home"
      }
  },
  { 
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
        title: "About"
      }
  },
  { 
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue'),
    meta: {
        title: "Films"
      }
  },
  { 
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
    meta: {
        title: "News"
      }
  },
  { 
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
        title: "Contact"
      }
  },

];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;