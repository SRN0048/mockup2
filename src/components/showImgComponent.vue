<template>
    <section >
        <v-container grid-list-xs>
            <v-content>
                <v-layout row wrap>
                    <v-flex xs1>
                       <v-img :src="img.src" :to="img.page"></v-img> 
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
        img:[
          {src: require('../assets/iNSIGHT700c_-removebg.png'), page:'https://www.youtube.com/watch?v=DRfkzYOK0js'},
        ]
      }
    },
}
</script>

<style lang="scss" scoped>

</style>
