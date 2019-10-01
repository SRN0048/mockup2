<template>
  <v-layout class="custombg" id="Services" row wrap>
    <v-container>

      <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-3>
          
      <v-layout row wrap>
        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md6 order-md1 order-sm1 order-xs1>
                <v-layout justify-center>
                  <h1 class="custom-font text-xs-center">Grading Management Solutions </h1>              
                </v-layout>
                <v-divider></v-divider>
                <v-spacer></v-spacer>
                <v-layout text-xs-center justify-center pt-4 pl-4 pr-4 pb-4>
                  <p class="custom-details">{{ $t('ServicesComponent') }}</p>
                </v-layout>
                    
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
      img: require('../assets/parallax_test.jpg'),
    }
  }
}
</script>


<style lang="scss" scoped>

  // .bg-color1 {
  //   background-color:#323376
  //   background-color: #21D4FD;
  //   background-image: linear-gradient(19deg, #21D4FD 0%, #323376 58%);
  // }

  .custombg {
    background: linear-gradient(to bottom right, rgba(2,0,36,1) 0%, rgba(50,51,118,0.7) 0%), url( 'https://www.cdg.co.th/website/wp-content/uploads/2016/11/solution_solution.jpg') no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }

  .custom-font {
    font-family: 'Roboto Slab', sans-serif;
  }

  .custom-details {
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
    font-size: 25px;
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

