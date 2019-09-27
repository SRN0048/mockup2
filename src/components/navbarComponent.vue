<template>
  <span>
 
    <v-toolbar 
    app 
    color="white" 
    fixed
    height="80"
    id="shrinkNav"
    >
      <v-toolbar-title>
        <!-- logo  color="	#323376" -->
      <a href="https://www.cdg.co.th/website/solutions/specific-solutions/education-administration-enhancement-solutions/">
        <img  class="companylogo" id="logo" :src="companyIcon" alt="cdg_newlogo_2018" align-center>
      </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- hide toolbar items @ width less than 960px -->
        <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[0].page"
        > {{ $t('navbarComponent.Home') }}</v-btn> 
        <!-- <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[1].page"
        > {{ $t('navbarComponent.About') }}</v-btn>
        <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[2].page"
        > {{ $t('navbarComponent.Services') }}</v-btn> 
        <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[3].page"
        > {{ $t('navbarComponent.News') }}</v-btn> 
        <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[4].page"
        > {{ $t('navbarComponent.Contact') }}</v-btn>
        <v-btn
          active-class="v-btn--active"
          class="custom-btn"
          flat
          large
          :ripple="false"
          :to="navbarItems[5].page"
        > {{ $t('navbarComponent.Careers') }}</v-btn>   -->

        <!-- CHANGE LANGUAGE BUTTON START-->
        <v-btn 
          class="custom-btn"
          flat
          :ripple="false"
        >
        <v-menu v-model="menuLanguageA" offset-y>
        <v-btn class="custom-btn" :ripple="false" slot="activator" flat>
          <v-img v-if="flag=='en'" :src="require('../assets/en.svg')"
           contain height="25"></v-img>
          <v-img v-if="flag=='th'" :src="require('../assets/th.svg')"
           contain height="25"></v-img>
           <v-flex v-if="flag=='en'">{{locales[0].text}}</v-flex>
           <v-flex v-if="flag=='th'">{{locales[1].text}}</v-flex>           
        </v-btn>
         <v-list class="hidden-sm-and-down" v-for="item in locales" :key="item.title">
          <v-list-tile @click="changeLocale(item.language)">
            <v-list-tile-action>
              <v-img :src="item.image"  contain height="30"></v-img>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{item.title}} </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>       
      </v-menu>
        </v-btn> 
        
      </v-toolbar-items>
      <!-- hide toolbar side icon @ width 960px and up -->
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

      <v-navigation-drawer app class="hidden-md-and-up" 
      clipped 
      disable-resize-watcher 
      enable-route-watcher
      right 
      v-model="drawer" >
      <v-list>
        <v-list-tile :to="navbarItems[0].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.Home') }}
            </v-list-tile-content>
        </v-list-tile>  
        <v-divider></v-divider>
        <v-list-tile :to="navbarItems[1].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.About') }}
            </v-list-tile-content>
        </v-list-tile>  
        <v-divider></v-divider>
        <v-list-tile :to="navbarItems[2].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.Services') }}
        </v-list-tile-content>
        </v-list-tile>  
        <v-divider></v-divider>
        <v-list-tile :to="navbarItems[3].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.News') }}
            </v-list-tile-content>
        </v-list-tile>  
        <v-divider></v-divider>
        <v-list-tile :to="navbarItems[4].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.Contact') }}
            </v-list-tile-content>
        </v-list-tile>  
        <v-divider></v-divider>
        <v-list-tile :to="navbarItems[5].page">
            <v-list-tile-content> 
              {{ $t('navbarComponent.Careers') }}
            </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>  
        <!-- CHANGE LANGUAGE BUTTON START-->
        <v-list-tile>
          <v-list-tile-content> 
        <v-menu v-model="menuLanguageB" offset-y>
        <v-btn class="custom-btn" :ripple="false" slot="activator" flat>
          <v-img v-if="flag=='en'" :src="require('../assets/en.svg')"
           contain height="25"></v-img>
          <v-img v-if="flag=='th'" :src="require('../assets/th.svg')"
           contain height="25"></v-img>
           <v-flex v-if="flag=='en'">{{locales[0].text}}</v-flex>
           <v-flex v-if="flag=='th'">{{locales[1].text}}</v-flex>           
        </v-btn>
         <v-list class="hidden-md-and-up" v-for="item in locales" :key="item.title">
          <v-list-tile @click="changeLocale(item.language)">
            <v-list-tile-action>
              <v-img :src="item.image"  contain height="30"></v-img>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{item.title}} </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>       
      </v-menu>
           </v-list-tile-content>  
        </v-list-tile>
        <v-divider></v-divider>         
      </v-list>
      </v-navigation-drawer>

  </span>
</template>

<script>
import i18n from '@/i18n'

  window.onscroll = function() {shrinkNavbaronScroll()}

  function shrinkNavbaronScroll() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("shrinkNav").style.padding = "0px 0px";
    document.getElementById("logo").style.width = "40%";
  } else {
    document.getElementById("shrinkNav").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "45%";    
  }
}

export default {
  name: 'navbar-component',
  components: {
    
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale
    }
  },
  data() {
    return {
      companyIcon: require('@/assets/cdg_newlogo_2018.png'),
      navbarItems :[
        {id: 0, title: "Home", page:'/'},
        {id: 1, title: "About", page:'/About'},
        {id: 2, title: "Services", page:'/Services'},
        {id: 3, title: "News", page:'/News'},
        {id: 4, title: "Contact Us", page:'/Contact'},
        {id: 5, title: "Careers", page:'/Careers'}
      ],
      drawer: false,
      menuLanguageA: false,
      menuLanguageB: false,
      flagBtn: '',
      locales: [
        {  language: 'en', title: 'English', image: require('../assets/en.svg'), text: 'EN' },
        {  language: 'th', title: 'ไทย', image: require('../assets/th.svg'), text: 'TH' }
      ]           
    }
  },
  computed: {
    flag () {
      return this.flagBtn = i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>

#shrinkNav {
  transition: all 0.5s;
  padding: 10px 10px;
}

.companylogo {
  transition: all 0.5s;
  width: 45%;
  height: auto;
  padding: 10px 0px 5px 0px;
}

//Some pre-processors, such as Sass, may not be able to parse >>> properly. 
//In those cases you can use the /deep/ or ::v-deep combinator instead 
.v-btn--active {
 /deep/ .v-btn__content {
  color:#0797cf;
 }
}

.custom-btn::before {
    color: transparent;  
}

.v-btn /deep/.custom-btn{
    padding-left: 0;
    padding-right: 0
} 

.removeUnderline {
  text-decoration: none
}

</style>
