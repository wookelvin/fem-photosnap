import { createRouter, createWebHistory } from 'vue-router'


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

export default router