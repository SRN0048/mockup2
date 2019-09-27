import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
//import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyB0vOatJO45YSGJVs7WBvJ8C_Hq_A1yjMI",
//     libraries: "places" // necessary for places input
//   }
// });

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
