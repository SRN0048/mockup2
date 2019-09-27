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
          <v-layout v-for="(item,index) in details2" 
          :key="index" row wrap justify-center>
            <h1 class="border-bottom news-title">{{ $t(item.topic) }}</h1>     
          </v-layout>
          <v-layout row wrap>
            <p> บริษัท คอนโทรล ดาต้า (ประเทศไทย) จำกัด ได้นำผลิตภัณฑ์เครื่องอ่านบัตร Smart Card ยี่ห้อ ACS รุ่น  ACR38 มาจำหน่ายโดยมีคุณสมบัติเบื้องต้นดังนี้</p>
              <p>1. การติดต่อใช้งานเป็นไปตามมาตรฐาน Microsoft PS/SC
              <br>
              2. สามารถอ่าน-เขียน บัตร Smart Card ตามมาตรฐาน ISO 7816
              <br>
              3. สามารถ อ่าน-เขียน บัตรประจำตัวประชาชนแบบเอนกประสงค์ (Smart Card) ของกรมการปกครองได้
              <br>                    
              4. สามารถทำงานร่วมกับ ระบบปฏิบัติการ Microsoft Windows XP, Windows Vista, Windows 7
              <br>
              5. รองรับการเชื่อมต่อแบบ USB Port
              <br>
              6. ได้รับการรับรองมาตรฐาน FCC , RoHS
              </p>  
          </v-layout>
          <v-layout row wrap>
              <p> ท่านสามารถ Download เอกสารที่เกี่ยวข้อง จาก Link ด้านล่าง </p>             
          </v-layout>
          <v-layout row wrap>
            <pre><a href="https://www.controldata.co.th/cdt-info/download/290/">1. DOWNLOAD คู่มือการติดตั้งเครื่องอ่าน Smart Card และ การใช้งานพร้อมวิธีบำรุงรักษา</a> <br><a href="https://www.controldata.co.th/cdt-info/download/296/">2. DOWNLOAD Driver สำหรับติดตั้ง บน Windows XP, Windows Vista และ Windows 7 ใช้ File เดียวกัน</a><br><span>3. Reference Manual สำหรับ ผู้พัฒนาการเชื่อมต่อกับเครื่องอ่าน Smart Card</span><br><a href="https://www.controldata.co.th/cdt-info/download/300/">3.1 DOWNLOAD Reference Manual</a><br><a href="https://www.controldata.co.th/cdt-info/download/304/">3.2 DOWNLOAD API</a></pre>             
          </v-layout>
        </v-flex>   
    </v-container>
     
    </v-content>

  </v-layout>
</template>

<script>
export default {
  name: 'smartcard', //this is the name of the component
  data() {
    return {
      image: require('@/assets/950 X 350 px.png'),
      details2: [
          { topic: 'showcaseComponent.topic2', text: 'showcaseComponent.description2'}
      ],      
    }
  }
}
</script>
<style>

</style>

<style lang="scss" scoped>
  .bg-color1 {
    background-color:#323376
  }

  img {
    width: 100%;
    height: auto;
  }

 h1, p, span {
   color: white
 }


  a {
    color: white;
    text-decoration: none
  }

  a:hover {
    text-decoration: underline;
  }

  .border-bottom {
    border-bottom: 2px solid 	#FFEA00;
  }

  .news-title {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }
</style>

