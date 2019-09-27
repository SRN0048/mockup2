<template>

  <section class="component-6">
    <v-container fluid grid-list-md text-xs-center>
      <v-layout align-center justify-center row wrap>
           <v-flex xs12>
            <h1>{{ $t('customersComponent.title') }}</h1>
          </v-flex>       
      </v-layout> 

      <v-layout align-center justify-center row wrap>
        <v-flex      
        v-for="(item,index) in icons" 
        :key="index" 
        xs6 sm4 md2 order-sm1 order-md1>
            <img class="custom-icon" :src="item.src">
        </v-flex>
      </v-layout>

      <v-layout align-center justify-center row wrap>
        <v-flex      
        v-for="(item,index) in icons_2"
        :key="index" 
        xs6 sm4 md2 order-sm1 order-md1>
            <img class="custom-icon" :src="item.src">
        </v-flex>
      </v-layout>
    </v-container>
  </section>

</template>

<script>
export default  {
    name: 'customersComponent',
    props: [],
    mounted() {

    },
    data() {
      return {
          icons: [
            { src: require('../assets/image.png') },
            { src: require('../assets/image.png') },
            { src: require('../assets/image.png') },
            { src: require('../assets/image.png') },
            { src: require('../assets/image.png') },
            { src: require('../assets/image.png') }
          ],
          icons_2: [
            { src: require('../assets/picture.png') },
            { src: require('../assets/picture.png') },
            { src: require('../assets/picture.png') },
            { src: require('../assets/picture.png') },
            { src: require('../assets/picture.png') }
            ]
      }     
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

  h1 {
    padding-bottom: 2%
  }

  .custom-icon {
    width: 50%;
    height: auto
  }
</style>
