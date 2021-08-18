import { createRouter, createWebHistory } from 'vue-router'
import BusyService from './../services/BusyService';

const routes = [
  {
      path: '/',
      name: 'Home',
      component: import('./../views/Home.vue'),
  },
  {
    path: '/stories',
    name: 'Stories',
    component: import('./../views/Stories.vue'),
  },
  {
    path: '/features',
    name: 'Features',
    component: import('./../views/Features.vue'),
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: import('./../views/Pricing.vue'),
  },
  {
    path: '/ui',
    name: 'UI',
    component: import('./../views/UI.vue'),
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{ 
  const { busy, updateBusy } = BusyService();
  updateBusy(true);
  setTimeout(()=>next(), 200);
});

export default router