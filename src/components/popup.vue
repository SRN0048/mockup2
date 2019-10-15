<template>

<section>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="text-xs-center">
      <v-dialog
          overflow
          v-model="showPopUp" 
          scrollable
          max-width="1000"
      >
            <v-img :src="require('@/assets/20191010_k9_webcdg_popup.png')" 
            alt="20190429_Coronation_Web_V21" class="responsivePopup" @click="closePopup()"></v-img>
      </v-dialog>
    </div>
</section>
    
</template>
    

<script>
export default {
    data() {
        return {
            showPopUp: true
      }     
    },
    methods: {
        closePopup: function() {
            this.showPopUp = false
        }
    }
}
</script>


<style lang="scss" scoped>
.responsivePopup {
    height: auto;
    width: 100%;
    max-width: 1000px; 
}


</style>