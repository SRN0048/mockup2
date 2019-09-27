<template>
<v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center custom-card-actions-padding">
        Copyright &copy; 2019 — Control Data (Thailand) Ltd. | All Rights Reserved.
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default  {
    name: 'subfooter',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    .custom-card-actions-padding {
    padding-top: 2%
  }
</style>
