<template>
    <section class="gradient-bg">
        <v-container class="no-bottom-padding">
             <v-content>
                <v-layout justify-center row wrap>
                    <v-flex xs12 sm12 md12 lg12>
                        <v-card 
                        class="black darken-2"              
                        >   
                            <v-hover>
                            <a :href="youtube" target="_blank" slot-scope="{ hover }">
                            <v-img
                            class="white--text"
                            max-height="475"
                            :src="img"
                            
                            >
                                <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    WATCH VIDEO
                                </div>
                                </v-expand-transition>                            
                            </v-img>            
                            </a>
                            </v-hover>
                            <v-layout justify-center>
                            <v-card-actions>
                            <v-btn flat color="white" :href="brochure">
                                <i class="material-icons" style="color:white">picture_as_pdf</i>&nbsp;
                                DOWNLOAD BROCHURE</v-btn>
                            </v-card-actions>           
                            </v-layout>
                        </v-card>
                        
                    </v-flex>
                </v-layout>
            </v-content>           
        </v-container>
      
    </section>
</template>

<script>
export default  {
    name: 'showImgComponent',
    data() {
      return {
        img: require('../assets/iNSIGHT 700c.png'),
        youtube:'https://www.youtube.com/watch?v=DRfkzYOK0js',
        brochure: 'https://www.dropbox.com/s/ls905zawhscxdz0/insight-700c-scanner.pdf?dl=0'
      }
    },
}
</script>

<style lang="scss" scoped>
  .no-bottom-padding {
    padding-bottom: 0;
  }

  .gradient-bg {
      background: linear-gradient(172deg, rgb(101, 96, 96) 0%, rgb(55, 53, 53) 100%);
  }

  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
