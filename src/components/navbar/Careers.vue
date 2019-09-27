<template>
  <v-layout row wrap>
    <v-content class="bg-color1">
    <v-flex xs21 sm12 md12 order-xs1 order-sm1>
      <v-layout  row wrap justify-center>
           <img :src="image" > 
      </v-layout>
    </v-flex>

    <v-container grid-list-xs>
        <v-flex xs12 sm12 md12 order-xs2 order-sm2 pt-4>
          <v-layout row wrap justify-center>
            <h1 class="border-bottom careers-title">{{ $t('Careers.title') }}</h1>     
          </v-layout>
        </v-flex>   

        <div class="d-flex justify-between align-center mb-3">
          <v-btn @click="all">{{ $t('Careers.viewAll') }}</v-btn>
          <v-btn @click="none">{{ $t('Careers.closeAll') }}</v-btn>
        </div>

<v-layout row wrap>
  <v-flex xs12 sm4 md4 order-xs1 order-sm1 pl-1 pr-1 pb-4>
    <v-expansion-panel
      v-model="panel"      
      expand
    >
      <v-expansion-panel-content
      >
        <template v-slot:header>
          <div><strong>{{$t(data[0].title)}}</strong></div>
        </template>
        <v-card>
          <strong>{{$t('Careers.employmentType')}}</strong>
          <v-card-text>{{$t(data[0].employmentType)}}</v-card-text>
          <strong>{{$t('Careers.responsibilities')}}</strong>
          <v-card-text>{{$t(data[0].responsibilities)}}</v-card-text>
          <strong>{{$t('Careers.qualifications')}}</strong>
          <v-card-text>{{$t(data[0].qualifications)}}</v-card-text>
          <strong>{{$t('Careers.benefits')}}</strong>
          <v-card-text>{{$t(data[0].benefits)}}</v-card-text>
          <strong>{{$t('Careers.salary')}}</strong>
          <v-card-text>{{$t(data[0].salary)}}</v-card-text>
          <strong>{{$t('Careers.workLocation')}}</strong>
          <v-card-text>{{$t(data[0].workLocation)}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>    
  </v-flex>

    <v-flex xs12 sm4 md4 order-xs2 order-sm2 pl-1 pr-1 pb-4>
    <v-expansion-panel
      v-model="panel1"      
      expand
    >
      <v-expansion-panel-content
      >
        <template v-slot:header>
          <div><strong>{{$t(data[1].title)}}</strong></div>
        </template>
        <v-card>
          <strong>{{$t('Careers.employmentType')}}</strong>
          <v-card-text>{{$t(data[1].employmentType)}}</v-card-text>
          <strong>{{$t('Careers.responsibilities')}}</strong>
          <v-card-text>{{$t(data[1].responsibilities)}}</v-card-text>
          <strong>{{$t('Careers.qualifications')}}</strong>
          <v-card-text>{{$t(data[1].qualifications)}}</v-card-text>
          <strong>{{$t('Careers.benefits')}}</strong>
          <v-card-text>{{$t(data[1].benefits)}}</v-card-text>
          <strong>{{$t('Careers.salary')}}</strong>
          <v-card-text>{{$t(data[1].salary)}}</v-card-text>
          <strong>{{$t('Careers.workLocation')}}</strong>
          <v-card-text>{{$t(data[1].workLocation)}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>    
  </v-flex>

    <v-flex xs12 sm4 md4 order-xs3 order-sm3 pl-1 pr-1 pb-5>
    <v-expansion-panel
      v-model="panel2"      
      expand
    >
      <v-expansion-panel-content
      >
        <template v-slot:header>
          <div><strong>{{$t(data[2].title)}}</strong></div>
        </template>
        <v-card>
          <strong>{{$t('Careers.employmentType')}}</strong>
          <v-card-text>{{$t(data[2].employmentType)}}</v-card-text>
          <strong>{{$t('Careers.responsibilities')}}</strong>
          <v-card-text>{{$t(data[2].responsibilities)}}</v-card-text>
          <strong>{{$t('Careers.qualifications')}}</strong>
          <v-card-text>{{$t(data[2].qualifications)}}</v-card-text>
          <strong>{{$t('Careers.benefits')}}</strong>
          <v-card-text>{{$t(data[2].benefits)}}</v-card-text>
          <strong>{{$t('Careers.salary')}}</strong>
          <v-card-text>{{$t(data[2].salary)}}</v-card-text>
          <strong>{{$t('Careers.workLocation')}}</strong>
          <v-card-text>{{$t(data[2].workLocation)}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>    
  </v-flex>

    <v-flex xs12 sm4 md4 order-xs4 order-sm4 pl-1 pr-1>
    <v-expansion-panel
      v-model="panel3"      
      expand
    >
      <v-expansion-panel-content
      >
        <template v-slot:header>
          <div><strong>{{$t(data[3].title)}}</strong></div>
        </template>
        <v-card>
          <strong>{{$t('Careers.employmentType')}}</strong>
          <v-card-text>{{$t(data[3].employmentType)}}</v-card-text>
          <strong>{{$t('Careers.responsibilities')}}</strong>
          <v-card-text>{{$t(data[3].responsibilities)}}</v-card-text>
          <strong>{{$t('Careers.qualifications')}}</strong>
          <v-card-text>{{$t(data[3].qualifications)}}</v-card-text>
          <strong>{{$t('Careers.benefits')}}</strong>
          <v-card-text>{{$t(data[3].benefits)}}</v-card-text>
          <strong>{{$t('Careers.salary')}}</strong>
          <v-card-text>{{$t(data[3].salary)}}</v-card-text>
          <strong>{{$t('Careers.workLocation')}}</strong>
          <v-card-text>{{$t(data[3].workLocation)}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>    
  </v-flex>


    <v-flex xs12 sm4 md4 order-xs5 order-sm5 pl-1 pr-1>
    <v-expansion-panel
      v-model="panel4"      
      expand
    >
      <v-expansion-panel-content
      >
        <template v-slot:header>
          <div><strong>{{$t(data[4].title)}}</strong></div>
        </template>
        <v-card>
          <strong>{{$t('Careers.employmentType')}}</strong>
          <v-card-text>{{$t(data[4].employmentType)}}</v-card-text>
          <strong>{{$t('Careers.responsibilities')}}</strong>
          <v-card-text>{{$t(data[4].responsibilities)}}</v-card-text>
          <strong>{{$t('Careers.qualifications')}}</strong>
          <v-card-text>{{$t(data[4].qualifications)}}</v-card-text>
          <strong>{{$t('Careers.benefits')}}</strong>
          <v-card-text>{{$t(data[4].benefits)}}</v-card-text>
          <strong>{{$t('Careers.salary')}}</strong>
          <v-card-text>{{$t(data[4].salary)}}</v-card-text>
          <strong>{{$t('Careers.workLocation')}}</strong>
          <v-card-text>{{$t(data[4].workLocation)}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>    
  </v-flex>

</v-layout>

    </v-container>
     
    </v-content>

  </v-layout>
</template>

<script>
export default {
  name: 'Careers',
  data() {
    return {
      image: require('@/assets/950 X 350 px.png'),
      panel: [],
      panel1: [],
      panel2: [],
      panel3: [],
      panel4: [],
      items: 5,
      data: [
        {
          title: "Careers.pos1",
          employmentType: "Careers.employmentType1",
          responsibilities: "Careers.responsibilities1",
          qualifications: "Careers.qualifications1",
          benefits: "Careers.benefits1",
          salary: "Careers.salary1",
          workLocation: "Careers.workLocation1" 
        },
        {
          title: "Careers.pos2",
          employmentType: "Careers.employmentType2",
          responsibilities: "Careers.responsibilities2",
          qualifications: "Careers.qualifications2",
          benefits: "Careers.benefits2",
          salary: "Careers.salary2",
          workLocation: "Careers.workLocation2" 
        },        {
          title: "Careers.pos3",
          employmentType: "Careers.employmentType1",
          responsibilities: "Careers.responsibilities3",
          qualifications: "Careers.qualifications3",
          benefits: "Careers.benefits3",
          salary: "Careers.salary3",
          workLocation: "Careers.workLocation3" 
        },        {
          title: "Careers.pos4",
          employmentType: "Careers.employmentType2",
          responsibilities: "Careers.responsibilities4",
          qualifications: "Careers.qualifications4",
          benefits: "Careers.benefits4",
          salary: "Careers.salary4",
          workLocation: "Careers.workLocation4" 
        },        
        {
          title: "Careers.pos5",
          employmentType: "Careers.employmentType1",
          responsibilities: "Careers.responsibilities5",
          qualifications: "Careers.qualifications5",
          benefits: "Careers.benefits5",
          salary: "Careers.salary5",
          workLocation: "Careers.workLocation5" 
        }
      ]
    }
  },
  methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map(_ => true)
        this.panel1 = [...Array(this.items).keys()].map(_ => true)
        this.panel2 = [...Array(this.items).keys()].map(_ => true)
        this.panel3 = [...Array(this.items).keys()].map(_ => true)
        this.panel4 = [...Array(this.items).keys()].map(_ => true)
      },
      // Reset the panel
      none () {
        this.panel = [],
        this.panel1 = [],
        this.panel2 = [],
        this.panel3 = [],
        this.panel4 = []
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

 h1, p {
   color: white
 }

  .border-bottom {
    border-bottom: 2px solid 	#FFEA00;
  }

  .careers-title {
    margin-bottom: 20px;
    color: white;
    text-align: center;
    font-weight: 300;
    font-size: 25px
  }

  .custom-title {
    font-weight: bold;
    font-size: large;
    padding: 10% 0% 0% 10%
  }

  .custom-textbox {
    width: 100%; 
    height: 116px; 
    min-height: 116px;
    overflow: hidden;
  }

  .v-card__text.custom-card-text{
    padding: 3% 4% 4% 10%;
    text-align: left
  }
</style>

