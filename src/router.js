import { createRouter, createWebHistory } from 'vue-router';
import NotFoundPage from './components/notFoundPage.vue'
import HomePage from './components/HomePage.vue'
import ContactMe from './components/ContactMe.vue';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/Contactme',
    name: 'ContactMe',
    component: ContactMe,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
