import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './view/Quest/Home.vue'
import LoginPage from './view/authPage/loginPage.vue'
import { useAuthStore } from './store/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginPage
    }
  ]
})
router.beforeEach((to)=>{
    const store=useAuthStore()
    if(!store.isLoggedIn && to.name!='login') return '/login'
})
export default router
