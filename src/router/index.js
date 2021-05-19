import { createWebHashHistory, createRouter } from 'vue-router';

import AssessmentPortal from '../pages/AssessmentPortal';
import Register from '../pages/Register'
import Home from '../pages/Index';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/assessment-portal",
    name: "Assessment Portal",
    component: AssessmentPortal
  },
  {
    path: "/register-user",
    name: "Registration Interface",
    component: Register
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  base: '/',
  routes,
});

export default router;