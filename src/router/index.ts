import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
      path: '/',
      name: 'Home',
      component: import('./../views/Home.vue'),
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