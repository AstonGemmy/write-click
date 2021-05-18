import { createWebHashHistory, createRouter } from 'vue-router';

import Home from '../pages/Index.vue';
import AssessmentPortal from '../pages/AssessmentPortal.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/assessment-portal",
    name: "AssessmentPortal",
    component: AssessmentPortal
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  base: '/',
  routes,
});

export default router;