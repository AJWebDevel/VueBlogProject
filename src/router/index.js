import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/create',
        component: () => import('../views/CreatePostView.vue')
      },
      {
        path: '/post/:id', 
        component: () => import('../views/PostView.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/NotFoundView.vue')
      }
  ]
})

export default router
