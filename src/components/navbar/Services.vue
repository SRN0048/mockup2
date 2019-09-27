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
            <h1 class="border-bottom Services">{{ $t('Services.title') }}</h1>     
          </v-layout>
          <v-layout row wrap>

          <v-flex xs12 sm6 md6 order-md1 order-sm1 order-xs1>
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                <v-layout justify-center>
                  SERVICES 1                
                </v-layout>
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{ $t('lorem') }}
              </v-card-text>
            </div>         
            </v-card>
          </v-flex> 
          
          <v-flex xs12 sm6 md6 order-md2 order-sm2 order-xs2>
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                <v-layout justify-center>
                  SERVICES 2               
                </v-layout>
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{ $t('lorem') }}
              </v-card-text>
            </div>         
            </v-card>
          </v-flex> 

          <v-flex xs12 sm6 md6 order-md3 order-sm3 order-xs3>
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                <v-layout justify-center>
                  SERVICES 3               
                </v-layout>
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{ $t('lorem') }}
              </v-card-text>
            </div>         
            </v-card>
          </v-flex> 

          <v-flex xs12 sm6 md6 order-md4 order-sm4 order-xs4>
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                <v-layout justify-center>
                  SERVICES 4               
                </v-layout>
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{ $t('lorem') }}
              </v-card-text>
            </div>         
            </v-card>
          </v-flex> 

          </v-layout>
        </v-flex>   
    </v-container>
     
    </v-content>

  </v-layout>
</template>

<script>
export default {
  name: 'Services', //this is the name of the component
  data() {
    return {
      image: require('@/assets/950 X 350 px.png')
    }
  }
}
</script>


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
    height: 116px; 
    min-height: 116px;
    overflow: hidden;
  }

  .v-card__text.custom-card-text{
    //padding: 3% 4% 4% 10%;
    padding: 3% 4% 10%;
    text-align: left
  }
</style>

