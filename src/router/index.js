import { createRouter, createWebHistory } from 'vue-router'
import { STORAGE_KEYS } from '@/utils/constanst'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/vehiculos',
      name: 'vehiculos-list',
      component: () => import('../views/VehiculoListView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/vehiculos/crear',
      name: 'vehiculos-crear',
      component: () => import('../views/VehiculoCreateView.vue'),
      meta: { requiresAuth: true }, 
    },
  ],
})

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  const expiresAt = localStorage.getItem(STORAGE_KEYS.EXPIRES_AT)
  
  // Verificar si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    // Verificar si hay token y si no ha expirado
    if (!token || !expiresAt || Date.now() / 1000 >= Number(expiresAt)) {
      // Redirigir al login si no está autenticado o el token expiró
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    // Si la ruta no requiere autenticación, permitir acceso
    next()
  }
})

export default router 

