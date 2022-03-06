import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
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

  ]
})
