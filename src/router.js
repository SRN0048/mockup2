import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', //remove hashtag from url
  hash: false, //remove hashtag from url
  scrollBehavior () { //reset scrollbar when route change to next component
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/mockup-deploy-vuetify1514/',
      name: 'Home',
      component: ( )=> import('@/components/navbar/Home.vue')
    },
    {
      path: '/mockup-deploy-vuetify1514/About/',
      name: 'About',
      component: ( )=> import('@/components/navbar/About.vue')
    },
    {
      path: '/mockup-deploy-vuetify1514/Services',
      name: 'Services',
      component: ( )=> import('@/components/navbar/Services.vue')   
    },
    {
      path: '/mockup-deploy-vuetify1514/News',
      name: 'News',
      component: ( )=> import('@/components/navbar/News.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Contact',
      name: 'Contact',
      component: ( )=> import('@/components/navbar/Contact.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Careers',
      name: 'Careers',
      component: ( )=> import('@/components/navbar/Careers.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Software&System',
      name: 'Software&System',
      component: ( )=> import('@/components/showcase/software&system.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/SmartCard',
      name: 'SmartCard',
      component: ( )=> import('@/components/showcase/smartcard.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Solution1',
      name: 'Solution1',
      component: ( )=> import('@/components/solutions/solution1.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Solution2',
      name: 'Solution2',
      component: ( )=> import('@/components/solutions/solution2.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Solution3',
      name: 'Solution3',
      component: ( )=> import('@/components/solutions/solution3.vue') 
    },
    {
      path: '/mockup-deploy-vuetify1514/Solution4',
      name: 'Solution4',
      component: ( )=> import('@/components/solutions/solution4.vue') 
    },
  ]
})
