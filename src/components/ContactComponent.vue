<template link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <v-layout class="bg-color1 custom-anchor" id="Contact" row wrap>
    <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
      </v-layout>
    </v-flex>

    <v-container grid-list-xs>
          <v-layout row wrap justify-center class="my-12">

            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                    <img 
                    class="companylogo"
                    :src="image"
                    >
                </v-card-title>
                <v-card-text class="white--text custom-font-size1">
                    บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด
                  ได้เปิดสำนักงานใหม่ซึ่งเป็นเป็นห้อง Show Room
                  เพื่อให้ลูกค้าได้เห็นเครื่องจริง และทดสอบการทำงานของเครื่่องตรวจข้อสอบ OMR ก่อนตัดสินใจ
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="border-bottom headline white--text">{{ $t('Contact.title') }}</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="white--text text--lighten-2">home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="white--text">บริษัท: คอนโทรล ดาต้า (ประเทศไทย) จำกัด</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile><br>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="white--text text--lighten-2">location_on</v-icon>
                    </v-list-tile-action>
                    <span>
                      <v-list-tile-title class="white--text">ที่อยู่: ชั้น 1 เลขที่ 216/1 อาคารแอลพีเอ็น </v-list-tile-title>
                      <v-list-tile-title class="white--text">ถนนนางลิ้นจี่ แขวงช่องนนทรี เขตยานนาวา</v-list-tile-title>
                      <v-list-tile-title class="white--text">กรุงเทพฯ 10120</v-list-tile-title>
                    </span>
                  </v-list-tile><br>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="white--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="white--text">โทรศัพท์: 0-2285-2328</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile><br>
                  <v-list-tile>
                    <v-list-tile-action>
                      <img :src="fax_icon" style="width:24px;height:24px" />
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title class="white--text">โทรสาร: 02-285-2339</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile><br>                  

                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'ContactComponent',
  components : {
    
  },
  data() {
    return {
      image: require('@/assets/affiliate.png'),
      fax_icon: require('@/assets/fax.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-color1 {
    background-color:#323376
  }

  .custom-anchor { 
    padding-top: 90px;
  }

  .companylogo {
  width: 30%;
  height: 30%;
}

  .custom-font-size1 {
    font-size: 16px
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
