<template>
<div>
    <popup/>
    <showImgComponent/>
    <!-- <displayImageComponent/>
    <solutionsComponent/>
    <showcase01Component/> -->
    <productSliderComponent/>
    <ServicesComponent/>
    <ContactComponent/>
    <!-- <customersComponent/>         -->

</div>
</template>

<script>
//@ = get to root dir of src folder
import popup from '@/components/popup'
//import displayImageComponent from '@/components/displayImageComponent'
//import solutionsComponent from '@/components/solutionsComponent'
//import showcase01Component from '@/components/showcase01Component'
import productSliderComponent from '@/components/productSliderComponent'
//import customersComponent from '@/components/customersComponent'
import ServicesComponent from '@/components/ServicesComponent'
import ContactComponent from '@/components/ContactComponent'
import showImgComponent from '@/components/showImgComponent'



export default {
  name: 'Home',
  components: {
    popup,
    //displayImageComponent,
    //solutionsComponent,
    //showcase01Component,
    productSliderComponent,
    //customersComponent
     ServicesComponent,
     ContactComponent,
     showImgComponent
  },
  data () {
    return {
      //
      
    }
  }
}
</script>


