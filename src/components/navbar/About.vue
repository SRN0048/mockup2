<template>


  <v-layout row wrap>
    <v-content class="bg-color1">
    <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
           <img :src="image" > 
      </v-layout>
    </v-flex>

    <v-container grid-list-xs>
        <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-5>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom CompanyName">{{ $t('About.CompanyName') }}</h1>     
          </v-layout>
          <v-layout row wrap>
            <p>บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด
            ดำเนินธุรกิจโดยเน้นความเป็นผู้นำและชำนาญการในการจัดหาระบบที่เป็น System Integrate (SI) ซึ่งรูปแบบที่นำเสนอต่อลูกค้าเป็นลักษณะหลากหลายดังนี้</p> 
            <p>1. ระบบแบบเสร็จสมบูรณ์ (Turnkey System)
            <br>
            2. ระบบแบบให้การดูแลระบบแบบครบวงจร รวมทั้ง วัสดุอุปกรณ์ และบุคลากร (Outsource – System)
            <br>
            3. ระบบการขายพร้อมการติดตั้งกับโครงการเครือข่ายขนาดใหญ่ทั่วประเทศ
            <br>                    
            4. ระบบการให้คำปรึกษาและออกแบบในการดูแล และพัฒนาระบบโปรแกรมประยุกต์ที่มีฐานข้อมูลขนาดใหญ่ และใช้ฐานข้อมูลกับโปรแกรมประยุกต์มุ่งเน้นในเชิงบริหารจัดการ
            <br>
            5. การเป็นผู้นำทางด้าน Research and Developing เกี่ยวกับระบบซอฟท์แวร์ต่าง ๆ ร่วมกับระบบฮาร์ดแวร์ใหม่ ๆ
            </p>

            <br>
            <br>
            <p>จากรูปแบบระบบที่นำเสนอต่อลูกค้าดังกล่าวข้างต้น บริษัทฯ มีจุดเด่นในการดำเนินธุรกิจและระบบงานที่เป็นผลิตภัณฑ์</p> 

          </v-layout>
        </v-flex>   
    </v-container>
     
    </v-content>

  </v-layout>



</template>

<script>
export default {
  name: 'About', //this is the name of the component
  data() {
    return {
      image: require('@/assets/950 X 350 px.png')
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

  .border-bottom {
    border-bottom: 2px solid 	#FFEA00;
  }

   .CompanyName {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }
</style>
