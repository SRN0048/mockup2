import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //mode: 'history', //remove hashtag from url
  //hash: false, //remove hashtag from url
  scrollBehavior () { //reset scrollbar when route change to next component
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ( )=> import('@/components/navbar/Home.vue'),
      meta: { title: 'บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด' }
    },
    {
      path: '/Home',
      name: 'Home',
      component: ( )=> import('@/components/navbar/Home.vue'),
      meta: { title: 'บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด' }
    },
    {
      path: '/Services',
      name: 'Home',
      component: ( )=> import('@/components/navbar/Home.vue'),
      meta: { title: 'บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด' }
    },
    {
      path: '/Contact',
      name: 'Home',
      component: ( )=> import('@/components/navbar/Home.vue'),
      meta: { title: 'บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด' }
    },
    // {
    //   path: '/About',
    //   name: 'About',
    //   component: ( )=> import('@/components/navbar/About.vue')
    // },
    // {
    //   path: '/Services',
    //   name: 'Services',
    //   component: ( )=> import('@/components/navbar/Services.vue')   
    // },
    // {
    //   path: '/News',
    //   name: 'News',
    //   component: ( )=> import('@/components/navbar/News.vue') 
    // },
    // {
    //   path: '/Contact',
    //   name: 'Contact',
    //   component: ( )=> import('@/components/navbar/Contact.vue') 
    // },
    // {
    //   path: '/Careers',
    //   name: 'Careers',
    //   component: ( )=> import('@/components/navbar/Careers.vue') 
    // },
    // {
    //   path: '/Software&System',
    //   name: 'Software&System',
    //   component: ( )=> import('@/components/showcase/software&system.vue') 
    // },
    // {
    //   path: '/SmartCard',
    //   name: 'SmartCard',
    //   component: ( )=> import('@/components/showcase/smartcard.vue') 
    // },
    // {
    //   path: '/Solution1',
    //   name: 'Solution1',
    //   component: ( )=> import('@/components/solutions/solution1.vue') 
    // },
    // {
    //   path: '/Solution2',
    //   name: 'Solution2',
    //   component: ( )=> import('@/components/solutions/solution2.vue') 
    // },
    // {
    //   path: '/Solution3',
    //   name: 'Solution3',
    //   component: ( )=> import('@/components/solutions/solution3.vue') 
    // },
    // {
    //   path: '/Solution4',
    //   name: 'Solution4',
    //   component: ( )=> import('@/components/solutions/solution4.vue') 
    // },
  ]
})
