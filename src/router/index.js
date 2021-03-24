import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Index.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Matlab from '../components/MatlabProjects.vue';
import Python from '../components/PythonProjects.vue';
import MachineLearning from '../components/MachineLearningProjects.vue';

const routes = [
  {
    path: "/index",
    name: "Home",
    component: Home,
    props: {
      color: 'blue'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    props: {
      color: 'blue'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    props: {
      color: 'blue'
    }
  },
  {
    path: "/projects/matlab",
    name: "Matlab",
    component: Matlab,
    props: {
      color: 'green'
    }
  },
  {
    path: "/projects/python",
    name: "Python",
    component: Python,
    props: {
      color: 'blue'
    }
  },
  {
    path: "/projects/machine-learning",
    name: "MachineLearning",
    component: MachineLearning,
    props: {
      color: 'red'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;