<template>
  <section>
    <v-content>
      <v-carousel height="auto">
        <v-carousel-item
          v-for="(item, index) in images"
          :key="index"
          :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-content>
  </section>
</template>

<script>


export default {
    name: 'displayImageComponent',
    props: [],
    mounted() {

    },
    data() {
      return {
        images: [
          {src: require('../assets/1170 X 530 px.png') },
          {src: require('../assets/1170 X 530 px.png') },
          {src: require('../assets/1170 X 530 px.png') }
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

/deep/ .v-carousel__item {
  height: 100%!important;
}
</style>

