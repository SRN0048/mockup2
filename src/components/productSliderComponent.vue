<template>

  <section fluid class="gradient-bg">
      <v-container class="no-bottom-padding">
          <v-flex>
                <v-layout align-center justify-center pb-5>
                  <h1 class="text-xs-center white--text">OMR Scanner Products</h1>              
                </v-layout>
                <v-spacer></v-spacer>                
          </v-flex> 
        <v-carousel :cycle="false" style="box-shadow: 0px 0px; height: 370px">
          <v-carousel-item :key="i" v-for="i in 2">
            <v-layout row>
              <v-flex xs12 sm4 md4 :key="j" v-for="j in 3" pl-2 pr-2>
                <v-card 
                  color="white"
                  min-height="262.3"
                   >
                   <v-responsive :aspect-ratio="16/9">
                  <div v-if="i==1" class="custom-img-container">
                    <img class="card-img" :src="group1[j-1].src" alt="news">
                  </div>
                  <!-- <div v-if="i==2" class="custom-img-container">
                    <img class="card-img" :src="group2[j-1].src" alt="news">
                  </div>                                -->
                  <div v-else class="custom-img-container">
                    <img class="card-img" :src="group3[j-1].src" alt="news">
                  </div> 

                  <div> 
                    <v-card-title v-if="i==1" class="custom-title">
                        {{ group1[j-1].title }}
                    </v-card-title> 
                    <!-- <v-card-title v-else-if="i==2" class="custom-title">
                        {{ group2[j-1].title }}
                    </v-card-title>  -->
                    <v-card-title v-else class="custom-title">
                        {{ group3[j-1].title }}
                    </v-card-title>                                                        
                  </div>          

                  <!-- <div class="custom-textbox">
                    <v-card-text v-if="i==1" class="card__txt">
                        {{$t(group1[j-1].desc)}}
                    </v-card-text>
                    <v-card-text v-if="i==2" class="card__txt">
                        {{$t(group2[j-1].desc)}}
                    </v-card-text> 
                    <v-card-text v-if="i==3" class="card__txt">
                        {{$t(group3[j-1].desc)}}
                    </v-card-text>                                                       
                  </div>                                             -->

                    <v-flex v-if="i==1" align-end class="text-xs-left custom-btn-padding">
                      <v-btn :href="group1[j-1].page" class="custom-btn" target="_blank">Learn more</v-btn>
                    </v-flex>
                   <!-- <v-flex v-if="i==2"  align-end class="text-xs-left custom-btn-padding">
                      <v-btn :href="group2[j-1].page" class="custom-btn" target="_blank">Learn more</v-btn>
                    </v-flex>    -->
                    <v-flex v-else align-end class="text-xs-left custom-btn-padding">
                      <v-btn :href="group3[j-1].page" class="custom-btn" target="_blank">Learn more</v-btn>
                    </v-flex>
                   </v-responsive>
                </v-card>                
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
          </v-carousel-item>
        </v-carousel>        
      </v-container> 
  </section>

</template>

<script>
export default  {
    name: 'productSliderComponent',
    props: [],
    mounted() {

    },
    data() {
      return {
        group1:[
          {title: 'OpScan® 4ES OMR Scanner ', desc: 'slider.product1', src: require('../assets/opscan4es_clip-590x342.jpg'), page:'https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-4es-omr-scanner/'},
          {title: 'OpScan® 6 Scanner (Maintenance only)', desc: 'slider.product2', src: 'https://www.scantron.com/wp-content/uploads/2018/08/OpScan-6.jpg', page: 'https://www.scantron.com/wp-content/uploads/2018/08/OpScan-6-Datasheet.pdf'},
          {title: 'OpScan® 8 Scanner (Maintenance only)', desc: 'slider.product3', src: 'https://www.scantron.com/wp-content/uploads/2018/08/OpScan-6.jpg', page: 'https://www.scantron.com/wp-content/uploads/2018/08/OpScan-8-Datasheet.pdf'}
        ],
        // group2:[
        //   {title: 'ScanTools® Plus', desc: 'slider.product4', src: 'https://www.scantron.com/wp-content/uploads/2018/09/GettyImages-908252358-660x371.jpg', page: 'https://www.scantron.com/scanners-forms/scantools-plus/'},
        //   {title: 'ScanTools® Prisma', desc: 'slider.product5', src: 'https://www.scantron.com/wp-content/uploads/2018/09/GettyImages-908252358-660x371.jpg', page: 'https://www.scantron.com/scanners-forms/scantools-prisma/'},
        //   {title: 'ItemAnalysis & StudentScore', desc: 'slider.product6', src: require('../assets/sample-660x371.jpg'), page: 'https://www.google.co.th/?gws_rd=ssl'}
        // ],
        group3:[
          {title: 'iNSIGHT™ 4ES Scanner', desc: 'slider.product7', src: require('../assets/opscan4es_clip-590x342.jpg'), page: 'https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-4es/'},
          {title: 'iNSIGHT™ 700c Scanner', desc: 'slider.product8', src: 'https://www.scantron.com/wp-content/uploads/2018/08/iNSIGHT700c-660x383.jpg', page: 'https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/insight-700c-scanner/'},
          {title: 'OpScan® 16 Scanner', desc: 'slider.product9', src: 'https://www.scantron.com/wp-content/uploads/2018/08/OpScan-16.jpg', page: 'https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/opscan-16-scanner/'}
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
  /deep/ .v-carousel__controls {
    background: transparent
  }

  .gradient-bg {
    background:#323376
    // background-color: #323376;
    // background-image: linear-gradient(0deg, #323376 0%, #289fb9 100%);
  }

  .no-bottom-padding {
    //padding-bottom: 0;
    margin-bottom: 1%
  }

  .custom-img-container {
    width: 100%;
    height: auto;
    max-height: 214px;
    overflow: hidden;
  }

  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 59px;
    max-height: 113px
  }

  .custom-textbox {
    width: 100%; 
    max-height: 220px; 
    min-height: 179px;
    overflow: hidden;
  }

@media screen and (max-width: 1263px) {
  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 86px;
  }
}

@media screen and (max-width: 860px) {
  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 86px;
  }
}

@media screen and (max-width: 681px) {
  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 113px;
  }
}

@media screen and (max-width: 664px) {
  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 113px;
  }
}

@media screen and (max-width: 524px) {
  .custom-title {
    font-weight: bold;
    font-size: large;
    margin-left: 5% 0 5% 4%;
    min-height: 113px;
  }
}

@media screen and (max-width: 524px) {
  .custom-img-container {
    width: 100%;
    height: auto;
    min-height: 106.45px;
    overflow: hidden;
  }
}

  .card-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: inline-block;
    margin-bottom: 1rem;
    border: solid 4px #fefefe;
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
    line-height: 0;
    transition: all 0.3s;
    transform: scale(1);
  }

  .card-img:hover {
    transform: scale(1.1);
  }

  .custom-title, .card__txt{
    color: black
  }

  .custom-btn-padding {
    padding-left: 2%
  }

  .v-btn.custom-btn {
    background: rgb(2,0,36);
    background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(50,51,118,1) 0%, rgba(0,212,255,1) 100%);
    /deep/ .v-btn__content {
      color: white;
    }
  }

  /deep/ .v-carousel__prev, /deep/ .v-carousel__next {
    top: 93%;
    z-index: 2;
  }


// .thumbnail {
//   display: inline-block;
//   max-width: 100%; /* only this one important */
//   margin-bottom: 1rem;
//   border: solid 4px #fefefe;
//   border-radius: 3px;
//   box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
//   line-height: 0; }
</style>
