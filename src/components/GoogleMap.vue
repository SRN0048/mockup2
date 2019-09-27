<template>
<v-content style="padding-top:0px">
  <div style="margin-top:1%;">
    <gmap-map
      :center="center"
      :zoom="16"
      style="width:100%;  height: 350px;"
    >

      <gmap-info-window 
      :options="infoOptions" 
      :position="infoPosition" 
      :opened="infoOpened" 
      @closeclick="infoOpened=false">
        {{infoContent}}
      </gmap-info-window>

      <gmap-marker v-for="(item, key) in coordinates" 
      :key="key" 
      :position="getPosition(item)" 
      :clickable="true" 
      @click="toggleInfo(item, key)" />
    </gmap-map>
  </div>    
</v-content>

</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
    center: { lat: 13.704163, lng:  100.544487 },
    coordinates: {
      0: {
        full_name: 'L.P.N. TOWER',
        lat: '13.704163',
        lng: '100.544487'
      },
      1: {
        full_name: 'CDG HOUSE',
        lat: '13.703009',
        lng: '100.543422'
      }
    },
    infoPosition: null,
    infoContent: null,
    infoOpened: false,
    infoCurrentKey: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
    };
  },

  methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.full_name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    }
  }
};
</script>