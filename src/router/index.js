import { createRouter, createWebHistory } from 'vue-router'
import { STORAGE_KEYS } from '@/utils/constanst'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: { requiresAuth: false },
    },
  ],
})


router.beforeEach((to, from, next) => {
  next()
})

export default router
