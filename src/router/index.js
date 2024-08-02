import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Navbar from '../components/Navbar.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
