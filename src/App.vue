<template>
  <v-app>
    <router-view/>
    <navbarComponent/>
    <footerComponent/>
  </v-app>
</template>

<script>
//@ = get to root dir of src folder
import navbarComponent from '@/components/navbarComponent'
import footerComponent from '@/components/footerComponent'

export default {
  name: 'App',
  components: {
    navbarComponent,
    footerComponent
  },
  data () {
    return {
       
    }
  }
}
</script>



