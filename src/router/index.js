import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import Page5 from '../components/Page5.vue'
import Page6 from '../components/Page6.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      // перенаправление главной страницы на страницу Home
      redirect:'/Home',
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1,
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2,
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3,
    },
    {
      path: '/Page4',
      name: 'Page4',
      component: Page4,
    },
    {
      path: '/Page5',
      name: 'Page5',
      component: Page5,
    },
    {
      path: '/Page6',
      name: 'Page6',
      component: Page6,
    },
  ]
})
