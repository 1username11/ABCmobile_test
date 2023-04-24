import { createRouter, createWebHistory } from 'vue-router'
import TestInfo from '@/views/TestInfo.vue'
import Home from '@/views/Home.vue'
import TestForm from '@/components/TestForm.vue'
import TestFormWithColour from '@/components/TestFormWithColour.vue'
import FirstQuestion from '@/views/FirstQuestion.vue'
import SecondQuestion from '@/views/SecondQuestion.vue'
import ThirdQuestion from '@/views/ThirdQuestion.vue'
import FourthQuestion from '@/views/FourthQuestion.vue'
import FifthQuestion from '@/views/FifthQuestion.vue'
import SixthQuestion from '@/views/SixthQuestion.vue'
import SeventhQuestion from '@/views/SeventhQuestion.vue'
import EighthQuestion from '@/views/EighthQuestion.vue'
import NinthQuestion from '@/views/NinthQuestion.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import TenthQuestion from '@/views/TenthQuestion.vue'
import EleventhQuestion from '@/views/EleventhQuestion.vue'
import TwelveQuestion from '@/views/TwelveQuestion.vue'
export const routerNames = {
  home: 'Home',
  testInfo: 'TestInfo',
  testForm: 'FirstQuestion'

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
      path: '/progressbar',
      component: ProgressBar
    },
    {
      path: '/first-question',
      name: 'FirstQuestion',
      component: FirstQuestion
    },
    {
      path: '/second-question',
      name: 'SecondQuestion',
      component: SecondQuestion
    },
    {
      path: '/third-question',
      name: 'ThirdQuestion',
      component: ThirdQuestion
    },
    {
      path: '/fourth-question',
      name: 'FourthQuestion',
      component: FourthQuestion
    },
    {
      path: '/fifth-question',
      name: 'FifthQuestion',
      component: FifthQuestion
    },
    {
      path: '/sixth-question',
      name: 'SixthQuestion',
      component: SixthQuestion
    },
    {
      path: '/seventh-question',
      name: 'SeventhQuestion',
      component: SeventhQuestion
    },
    {
      path: '/eighth-question',
      name: 'EighthQuestion',
      component: EighthQuestion
    },
    {
      path: '/ninth-question',
      name: 'NinthQuestion',
      component: NinthQuestion
    },
    {
      path: '/tenth-question',
      name: 'TenthQuestion',
      component: TenthQuestion
    },
    {
      path: '/eleventh-question',
      name: 'EleventhQuestion',
      component: EleventhQuestion
    },
    {
      path: '/twelve-question',
      name: 'TwelveQuestion',
      component: TwelveQuestion
    }

  ]
})
