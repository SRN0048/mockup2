<template>
  <v-layout row wrap>
    <v-content class="bg-color1">
    <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
           <img :src="image" > 
      </v-layout>
    </v-flex>

    <v-container grid-list-xs>
        <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-5>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom news-title">{{ $t('solutionsComponent.topic2') }}</h1>     
          </v-layout>
        
          <v-layout row wrap justify-center>
            <p>{{ $t('lorem') }}</p>     
          </v-layout>  

        </v-flex>   
    </v-container>
     
    </v-content>

  </v-layout>
</template>

<script>
export default {
  name: 'Solution2', //this is the name of the component
  data() {
    return {
      image: require('@/assets/950 X 350 px.png')
    }
  }
}
</script>
<style>

</style>

<style lang="scss" scoped>
  .bg-color1 {
    background-color:#323376
  }

  img {
    width: 100%;
    height: auto;
  }

 h1, p {
   color: white
 }


  .border-bottom {
    border-bottom: 2px solid 	#FFEA00;
  }

  .news-title {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }
</style>

