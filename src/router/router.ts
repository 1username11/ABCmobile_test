import { createRouter, createWebHistory } from 'vue-router'
import TestInfo from '@/views/TestInfo.vue'
import Home from '@/views/Home.vue'
import StartTest from '@/views/StartTest.vue'
import Countdown from '@/components/Countdown.vue'
export const routerNames = {
  home: 'Home',
  testInfo: 'TestInfo',
  testForm: 'StartTest'

}
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test-info',
      name: 'TestInfo',
      component: TestInfo
    },
    {
      path: '/start-test',
      name: 'StartTest',
      component: StartTest
    },
    {
      path: '/countdown',
      name: 'Countdown',
      component: Countdown
    }
  ]
})
