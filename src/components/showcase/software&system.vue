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
          <v-layout v-for="(item,index) in details1" 
          :key="index" row wrap justify-center>
            <h1 class="border-bottom news-title">{{ $t(item.topic) }}</h1>     
          </v-layout>
          <v-layout row wrap>
            <p> ตั้งแต่บัตร Proximity จนถึงบัตร Smart Card ทั้งที่เป็นแบบ Contact และ Contactless นั้น วันนี้ไม่ได้มีหน้าที่แสดงถึงตัวบุคคลเท่านั้น เราสามารถนำไปใช้ในระบบงานต่างๆได้มากมาย เช่น บัตรทางด้านการเงิน บัตรเพื่อการเดินทาง บัตรแสดงสิทธิ บัตรลงเวลาและผ่านเข้าออก เป็นต้น Fargo และ Control Data (Thailand) Ltd. ยินดีให้คำปรึกษาระบบการออกบัตรสำหรับองค์กรหรือระบบงานของท่าน
เพื่อเพิ่มประสิทธิภาพการใช้งานของบัตรและความปลอดภัยของบัตร ป้องกันการปลอมแปลงบัตร โดยเรามี Software Solution เพื่อรองรับกับความต้องการของระบบงานต่างๆ ดังนี้</p>
          </v-layout>
          <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card flat tile height="auto">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">OnQueue Card Production Software</h3>
              <div> Software จาก Fargo ที่จะช่วยให้ระบบการออกบัตรจากส่วนต่างๆ มาอยู่ในส่วนกลาง </div>
            </div>
          </v-card-title>
          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/1.png"
            aspect-ratio="2.75"
          ></v-img>
  
          <v-card-actions>
            <v-btn :href="products[0].page" class="custom-btn" flat>Download Brochure</v-btn>
          </v-card-actions>
          <v-divider></v-divider>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Asure ID Solo</h3>
              <div> เพื่อการออกแบบและพิมพ์บัตร ใช้งานง่าย แถมให้ฟรีเมื่อคุณซื้อ Printer ของ Fargo </div>
            </div>
          </v-card-title>
          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-9-31-55-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text class="text-xs-center">
            Asure ID Express
          </v-card-text>
          <v-card-text>
             เหมาะกับงานที่เป็น Standalone สามารถออกแบบและพิมพ์บัตรได้ทั้งหน้าและด้านหลังพร้อมบันทึกข้อมูลของบัตรในฐานข้อมูลสามารถนำข้อมูลเข้า (Import) จาก MS Access ในรูปแบบ ODBC ได้ 
          </v-card-text>   

          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-9-33-17-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text class="text-xs-center">
            Asure ID Enterprise
          </v-card-text>
          <v-card-text>
            เป็นโปรแกรมสำหรับออกแบบ, ควบคุมการพิมพ์ เหมาะสำหรับองค์กรขนาดกลางถึงใหญ่ที่มีการออกบัตรนผ่านระบบ Network สามารถ Import/Export ข้อมูลในรูปแบบของ ODBC และ ออกรายงานต่างตามต้องการได้จาก MS Access ในรูปแบบ ODBC ได้
          </v-card-text> 

          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-9-34-25-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-text class="text-xs-center">
            Asure ID Exchange
          </v-card-text>
          <v-card-text>
             เป็นโปรแกรมที่มีประสิทธิภาพสูงสุด ในตระกูล Asure ID เหมาะสำหรับองค์กรที่ต้องการความปลอดภัยในการออกบัตร จัดการกับฐานข้อมูลหลากหลายรูปแบบ คลอบคลุมในเรื่อง การ Design, Print, Manage, Share, Control
          </v-card-text>  
          <v-card-actions>
            <v-btn :href="products[1].page" class="custom-btn" flat>Download Brochure</v-btn>
          </v-card-actions>
          <v-divider></v-divider> 

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Secure Vault</h3>
            </div>
          </v-card-title>
          <v-card-text>
           ระบบ Software ที่ทำงานร่วมกับตู้จัดเก็บ Ribbon ของ Fargo (Secure Vault) ทำเราบริหารจัดการวัสดุสินเปลืองต่างๆ เช่น Ribbon, Film, Laminate ในเรื่องการเบิกจ่าย, Stock แบบ Real Time
          </v-card-text> 

          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-10-38-27-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-actions>
            <v-btn :href="products[2].page" class="custom-btn" flat>Download Brochure</v-btn>
          </v-card-actions>
          <v-divider></v-divider> 

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Print Security Manager</h3>
            </div>
          </v-card-title>
          <v-card-text>
          โปรแกรมที่บริการจัดการเครื่องพิมพ์บัตร อย่างสมบูรณ์แบบ เหมาะกับองค์กรที่ต้องการควบคุมการพิมพ์และตัวเครื่องพิมพ์ที่กระจายอยู่ตามหน่วยงานสาขาต่างๆ ผ่านระบบ Network สามารถกำหนดผู้ใช้งาน, จัดกลุ่มเครื่องพิมพ์, รายงานการพิมพ์, และการควบคุม, Setup, Diagnosetic เครื่องพิมพ์ ระยะไกลผ่าน Network เสมือนท่านไปอยู่หน้าเครื่องพิมพ์เอง
          </v-card-text> 

          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-10-43-08-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-actions>
            <v-btn :href="products[3].page" class="custom-btn" flat>Download Brochure</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Software Development Kit (SDK)</h3>
            </div>
          </v-card-title>
          <v-card-text>
           Fargo ได้จัดเตรียม SDK สำหรับนักพัฒนาโปรแกรม ที่ต้องการจะเขียนโปรแกรม ติดต่อหรือควบคุม เครื่องพิมพ์เองรองรับหลายหลากภาษา
          </v-card-text> 

          <v-img class="card-img"
            src="https://www.controldata.co.th/cdt-info/wp-content/uploads/2018/04/4-9-2018-10-46-00-AM.png"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-actions>
            <v-btn :href="products[4].page" class="custom-btn" flat>Download SDK</v-btn>
          </v-card-actions>

          
        </v-card>
      </v-flex>            
          </v-layout>
        </v-flex>   
    </v-container>
     
    </v-content>

  </v-layout>
</template>

<script>
export default {
  name: 'softwareandsystem', //this is the name of the component
  data() {
    return {
      image: require('@/assets/950 X 350 px.png'),
      details1: [
          { topic: 'showcaseComponent.topic1', text: 'showcaseComponent.description1'}
      ],
      products: [
          { page: 'https://www.controldata.co.th/cdt-info/download/242/'},
          { page: 'https://www.controldata.co.th/cdt-info/download/258/'},
          { page: 'https://www.controldata.co.th/cdt-info/download/264/'},
          { page: 'https://www.controldata.co.th/cdt-info/download/269/'},
          { page: 'https://www.controldata.co.th/cdt-info/download/274/'}
      ]      
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

 h1, p , strong{
   color: white
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

  .card-img /deep/ .v-image__image--cover {
      background-size: unset; 
  }

  .v-btn.custom-btn {
    background: rgb(2,0,36);
    background: linear-gradient(14deg, rgba(2,0,36,1) 0%, rgba(50,51,118,1) 0%, rgba(0,212,255,1) 100%);
    /deep/ .v-btn__content {
      color: white;
    }
  }
</style>

