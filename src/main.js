import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
//import * as VueGoogleMaps from "vue2-google-maps";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
  router.beforeEach((to,from,next) => {
    document.title = to.meta.title
    next()
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
