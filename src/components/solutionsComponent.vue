<template>

  <section class="solutionsComponent">

      <v-container fluid grid-list-md text-xs-center>
        <v-layout align-center justify-center row>
          <v-flex xs12>
            <h1 class="solutions">{{ $t('solutionsComponent.title') }}</h1>
          </v-flex>   
        </v-layout>
        <v-layout row wrap>
          <v-flex
          class="col-md-3 col-lg-3"
          v-for="(item,index) in details" 
          :key="index" 
          :src="item.src"
          xs12 sm6 md3 order-md4 order-sm2
          >
            <div>
              <router-link :to="item.page">
            <i class="material-icons md-48 white">
              {{item.name}}
            </i>                
              </router-link>

            <h1 class="topic">{{$t(item.topic)}}</h1>
            <p class="text">{{$t(item.text)}}</p>
            </div>
          </v-flex> 
        </v-layout>
      </v-container>
  </section>

</template>

<script>

export default  {
    name: 'solutionsComponent',
    props: [],
    mounted() {

    },
    data() {
      return {
        details: [
          { name:'aspect_ratio', src: require('../assets/icon_aspect_ratio.png'), topic: 'solutionsComponent.topic1', text: 'solutionsComponent.description1' , page: '/Solution1'},
          { name:'archive', src: require('../assets/icon_aspect_ratio.png'), topic: 'solutionsComponent.topic2', text: 'solutionsComponent.description2' , page: '/Solution2'},
          { name:'access_time', src: require('../assets/icon_aspect_ratio.png'), topic: 'solutionsComponent.topic3', text: 'solutionsComponent.description3' , page: '/Solution3'},
          { name:'computer', src: require('../assets/icon_aspect_ratio.png'), topic: 'solutionsComponent.topic4', text: 'solutionsComponent.description4' , page: '/Solution4'}
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
  .solutionsComponent {
    background-color: #323376
  }

  .solutions {
    padding-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }

  .material-icons.md-48.white { 
    font-size: 48px; 
    background-color: transparent !important;
    color: white;
  }

  .material-icons.md-48.white:hover {
    color: #FFEA00
  }

  .topic {
    color: white;
    text-align: center;
    font-size: 24px 
  }

  .text {
    color: white;
    text-align: center;
    font-size: 20px 
  }
</style>
