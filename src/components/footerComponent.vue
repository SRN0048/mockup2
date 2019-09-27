<template>

  <section class="component-7">
  <v-container class="container-color" grid-list-md text-xs-center>
  <v-layout row wrap>
  <v-footer 
    dark
    height="auto"
  >
  <v-layout row wrap>
  <v-flex xs12 sm12 md3 order-md1 order-sm1 order-xs1>
    <v-card
      flat
      height="100%"
      tile    
    >
      <v-card-title>
        <img class="companylogo" src="@/assets/affiliate.png" alt="cdg_newlogo_2018">
        <h1 class="custom-seperator"> | </h1>
        <strong class="subheading">
          <!-- บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด -->
          Control Data (Thailand) Ltd.
          </strong>
      </v-card-title> 
      <v-card-text class="custom-card-text">
        {{card_text[1].company}}
      </v-card-text>         
    </v-card>
  </v-flex>

  
  <v-flex xs12 sm12 md3 order-md1 order-sm1 order-xs2>
    <v-card
      flat
      height="100%"
      tile   
    >
      <v-card-title><strong class="subheading custom-subheading">OMR Scanners</strong></v-card-title>
      
  <v-layout row justify-center>
      <template>
        <v-card-text class="custom-card-text" >
        <a href="https://www.scantron.com/scanners-forms/optical-mark-recognition-omr-scanners-opscan-series/">{{$t('footerComponent.opscanSeries')}}</a>
        <br>
        <a href="https://www.scantron.com/scanners-forms/omr-image-scanners-insight-series/">{{$t('footerComponent.insightSeries')}}</a>
        </v-card-text>      
      </template>
  </v-layout>        
    </v-card>  
  </v-flex>

    <v-flex xs12 sm12 md3 order-md1 order-sm1 order-xs4>
    <v-card
      flat
      height="100%"
      tile 
    >
      <v-card-title><strong class="subheading custom-subheading">USEFUL LINKS</strong></v-card-title>
      <v-card-text class="custom-card-text">
        <a href="https://www.cdg.co.th/website/web/viewer.html?file=/website/wp-content/uploads/2019/04/CDG-Code-of-Conduct_24042019.pdf" target="_blank">
          หลักจรรยาบรรรณ (CODE OF CONDUCT)
        </a>
        <!-- <router-link to="/Contact">
          <span>
            CONTACT US
          </span>                
        </router-link>  
        <br>
        <router-link to="/Careers">
          <span>
            CAREERS
          </span>                
        </router-link>  -->
        <br>
        <a href="https://www.cdg.co.th/website/" target="_blank">CDG GROUP</a>      
      </v-card-text>  
    </v-card>  
    </v-flex>

  <v-flex xs12 sm12 md3 order-md1 order-sm1 order-xs3>
    <v-card
      flat
      height="100%"
      tile 
    >
      <v-card-title><strong class="subheading custom-subheading">CONTACT US</strong></v-card-title>
          <v-layout pl-3 row wrap>
            <p><i class="material-icons">location_on</i>  อาคาร LPN Tower ชั้น 1<br>
             <span class="custom-space">ถนน นางลิ้นจี่ ช่องนนทรี</span> <br>
             <span class="custom-space2">เขตยานาวา กรุงเทพฯ</span><br>
           <i class="material-icons">phone</i>  โทรศัพท์: 02-2852328<br>
           <img :src="fax_icon" style="width:24px;height:24px" />  โทรสาร: 02-2852340
          </p>             
          </v-layout>

    </v-card>  
  </v-flex>

  </v-layout>
  </v-footer>
  </v-layout>
  </v-container>
  <subfooter/>
  </section>

</template>

<script>
import subfooter from '@/components/subfooter'
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'


export default  {
    name: 'footerComponent',
    components: {
      subfooter
    },
    props: [],
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      details: { required, maxLength: maxLength(300)}
    },
    mounted() {

    },
    data() {
      return {

        card_text: [
          {lorem: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'},
          {company: 'ที่ปรึกษาส่วนตัวสำหรับองค์กรขนาดใหญ่ ให้บริการที่เป็นเลิศแก่หน่วยงานภาครัฐ รัฐวิสาหกิจ และเอกชน เพื่อดูแลโครงการสำคัญระดับชาติ'}
        ],
        dialog: false,
        name: '',
        email: '',
        details: '',
        fax_icon: require('@/assets/fax.png')
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.details = ''
      }
    },
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
      detailsErrors () {
        const errors = []
        if (!this.$v.details.$dirty) return errors
        !this.$v.details.required && errors.push('Details are required')
        return errors
      }
    }
}
</script>

<style lang="scss" scoped>

  .component-7 {
    background-color: #424242
  }

  .container-color {
    background-color:	#424242
  }

  .custom-seperator {
    font-size: xx-large;
    padding: 0% 2% 0% 2%
  }

  .companylogo {
  width: 30%;
  height: auto;
  padding: 5px 0px 5px 0px;
}

  .v-card__text.custom-card-text{
    padding: 5px 16px 16px 16px;
    text-align: left
  }

  a {
    color: white;
    text-decoration: none
  }

  a:hover {
    text-decoration: underline;
  }

  .custom-subheading {
    padding-top: 9.645%;
    padding-bottom: 7%
  }

  .custom-space {
    padding-left: 15%
  }

  .custom-space2 {
    padding-left: 8%
  }

  .container.grid-list-md .layout .flex{
    padding: unset
  }
</style>
