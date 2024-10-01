// src/router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';

// Definisci le tue rotte
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
];

// Crea l'istanza del router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
