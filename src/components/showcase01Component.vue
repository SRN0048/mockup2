<template>

  <section class="component-4">
      <v-container fluid grid-list-md text-xs-center>
        <v-layout row wrap>
          
          <v-flex xs12 sm6 md6 order-md1 order-sm1 order-xs1>
            <v-card class="custom-image-bg" flat tile min-height="100%">
              <v-img 
              :src="images[0].src"
            ></v-img>
            </v-card>
          </v-flex>
          
          <v-flex v-for="(item,index) in details1" 
          :key="'A'+ index"  xs12 sm6 md6 order-md2 order-sm2 order-xs2>
          <!-- 'A' is to prevent [Vue warn]: Duplicate keys detected: x. -->
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                {{$t(item.topic)}}
              </v-card-title>   

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{$t(item.text)}}
              </v-card-text>
            </div>

              <v-flex align-end class="text-xs-left">
                <v-btn :to="item.page" class="custom-btn">Learn more</v-btn>
              </v-flex>            
            </v-card>
          </v-flex> 
         
          <v-flex v-for="(item,index) in details2" 
          :key="'B'+ index"  xs12 sm6 md6 order-md3 order-sm3 order-xs4>
            <v-card flat tile height="100%">
              <v-card-title class="custom-title">
                {{$t(item.topic)}}
              </v-card-title>

            <div class="custom-textbox">
              <v-card-text class="custom-card-text">
                {{$t(item.text)}}
              </v-card-text>
            </div>

              <v-flex align-end class="text-xs-left">              
                <v-btn :to="item.page" class="custom-btn">Learn More</v-btn> 
              </v-flex>           
            </v-card>
          </v-flex> 
          
          <v-flex xs12 sm6 md6 order-md4 order-sm4 order-xs3>
            <v-card class="custom-image-bg" flat tile min-height="100%">
            <v-img 
              :src="images[1].src"
            ></v-img>             
            </v-card>
          </v-flex>          
       
        </v-layout>
      </v-container>
  </section>

</template>

<script>
export default  {
    name: 'showcase01Component',
    props: [],
    mounted() {

    },
    data() {
      return {
        images: [
          {src: require('../assets/779 X 382 px.png') },
          {src: require('../assets/779 X 382 px.png') }
        ],
        details1: [
          { topic: 'showcaseComponent.topic1', text: 'showcaseComponent.description1', page: '/mockup-deploy-vuetify1514/Software&System' }
        ],
        details2: [
          { topic: 'showcaseComponent.topic2', text: 'showcaseComponent.description2', page: '/mockup-deploy-vuetify1514/SmartCard'}
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
//#FFE90B yellow
  .component-4 {
    background-color:  rgb(161, 153, 153)
  }

  .custom-image-bg{
    background-color: white
  }

  .custom-title {
    font-weight: bold;
    font-size: large;
    padding: 10% 0% 0% 10%;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
  }


  .custom-textbox {
    width: 100%; 
    height: 116px; 
    min-height: 116px;
    overflow: hidden;
  }

  .v-card__text.custom-card-text{
    padding: 3% 4% 4% 10%;
    text-align: left
  }

  .v-btn.custom-btn {
    margin: 0 0 10% 10%;
    background: rgb(2,0,36);
    background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(50,51,118,1) 0%, rgba(0,212,255,1) 100%);
    /deep/ .v-btn__content {
      color: white;
    }
  }

  .container.grid-list-md .layout .flex {
    padding: 0;
  }

  // @media only screen and (max-width: 1270px) and (min-width: 600px) {
  //   .res /deep/ .v-responsive__content{
  //     height: -webkit-fill-available;
  //   }
  // }
</style>
