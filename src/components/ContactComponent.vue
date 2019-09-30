<template link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <v-layout class="bg-color1" id="Contact" row wrap>
    <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
           <!-- <img :src="image" >  -->
           <!-- <GoogleMap/> -->
      </v-layout>
    </v-flex>

    <v-container grid-list-xs>
        <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-5>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom contact-title">{{ $t('Contact.title') }}</h1>     
          </v-layout>

          <v-layout text-xs-center row wrap justify-center>
            <p class="custom-margin1">บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด
       ได้เปิดสำนักงานใหม่ซึ่งเป็นเป็นห้อง Show Room
      เพื่อให้ลูกค้าได้เห็นเครื่องจริง และทดสอบการทำงานของเครื่่องตรวจข้อสอบ OMR ก่อนตัดสินใจ</p>     
          </v-layout>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom contact-title">สถานที่ติดต่อ</h1>  
          </v-layout>

          <v-layout text-xs-center row wrap justify-center>
            <p><i class="material-icons">location_on</i>  อาคาร LPN Tower ชั้น 1<br>
             <span>  ถนน นางลิ้นจี่ ช่องนนทรี</span> <br>
             <span>  เขตยานาวา กรุงเทพฯ</span><br>
           <i class="material-icons">phone</i>  โทรศัพท์: 02-2852328<br>
           <img :src="fax_icon" style="width:24px;height:24px" />  โทรสาร: 02-2852340<br>
           <i class="material-icons">access_time</i>  เวลาทำการ: จันทร์-ศุกร์ 8:00น.-17:00น.
          </p>             
          </v-layout>
        </v-flex>   
    </v-container>
     

  </v-layout>

</template>

<script>
//import GoogleMap from '../GoogleMap'
export default {
  name: 'ContactComponent',
  components : {
    //GoogleMap
  },
  data() {
    return {
      image: require('@/assets/950 X 350 px.png'),
      fax_icon: require('@/assets/fax.png')
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

  h1, p{
    color: white;
    font-size: 16px
  }

  .contact-title {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }

  .custom-margin1 {
    margin: 0px 28% 2% 28%
  }

  .border-bottom {
    border-bottom: 2px solid 	#FFEA00;
  }

  .custom-space {
    padding-left: 15%
  }
</style>
