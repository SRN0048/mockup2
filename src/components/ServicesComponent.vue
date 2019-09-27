<template>
  <v-layout class="bg-color1" row wrap>
    <v-container>
      
    <!-- <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
           <img :src="image.src" > 
      </v-layout>
    </v-flex> -->

      <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-3>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom Services">{{ $t('Services.title') }}</h1>     
          </v-layout>
          
      <v-layout row wrap>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md6 order-md1 order-sm1 order-xs1>
            
            <v-card flat height="100%">
              <v-img
                  :src="image.src"
                  aspect-ratio="2.75"
                ></v-img>
              <v-divider light></v-divider>
              <v-card-title class="custom-title">
                <v-layout justify-center>
                  Grading Management Solutions               
                </v-layout>
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{ $t('ServicesComponent') }}
              </v-card-text>
            </div>         
            </v-card>
            
          </v-flex> 
        </v-layout>
      </v-layout>
    </v-flex>   
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'ServicesComponent', //this is the name of the component
  data() {
    return {
      image: {src: 'https://www.cdg.co.th/website/wp-content/uploads/2016/11/solution_solution.jpg'}
    }
  }
}
</script>


<style lang="scss" scoped>
  .bg-color1 {
    background-color:#323376
    // background-color: #21D4FD;
    // background-image: linear-gradient(19deg, #21D4FD 0%, #323376 58%);

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

  .Services {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }

  .custom-title {
    font-weight: bold;
    font-size: large;
    padding: 10% 0% 0% 10%
  }

  .custom-textbox {
    width: 100%; 
    height: auto; 
    overflow: hidden;
  }

  .v-card__text.custom-card-text{
    //padding: 3% 4% 4% 10%;
    padding: 3% 4% 10%;
    text-align: left
  }
</style>

