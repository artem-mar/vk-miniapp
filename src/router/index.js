import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import EventList from '../components/EventList.vue'
import WinnersList from '../components/WinnersList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/events',
      name: 'events',
      component: EventList
    },
    {
      path: '/winners',
      name: 'winners',
      component: WinnersList
    }
  ]
})

export default router
