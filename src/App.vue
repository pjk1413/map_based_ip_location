<template>
  <div id="app">
    <Grid/>
  </div>
</template>

<script>
import Grid from './Grid.vue'
import axios from 'axios'
import leaflet from 'leaflet';

export default {
  name: 'App',
  components: {
    Grid
  },
  computed : {
    ip() {
      return this.$store.state.ip
    },
    lat() {
        return this.$store.state.lat
    },
    long() {
        return this.$store.state.long
    },
    location() {
      return this.$store.state.location
    }
  },
  data() {
    return {
      ipify_key : 'at_ZJrcEdWzYsFZyjyLJ94FqHjha4psX'
    }
  },
  mounted() {
    this.asyncFunction()
  },
  methods : {
      asyncFunction : async function() {
        this.getIp()
      },
      getIp : function() {
          
          axios.get("https://api.ipify.org?format=json").then((response) => {
              this.$store.commit('changeIP', response.data.ip)
          }).then(() => {
            axios.get(`https://geo.ipify.org/api/v1?apiKey=${this.ipify_key}&ipAddress=${this.ip}`).then((response) => {
                this.$store.commit('changeLat', response.data.location.lat)
                this.$store.commit('changeLong', response.data.location.lng)
                this.$store.commit('changeLocation', response.data.location)
          }).then(() => {
            let mymap = leaflet.map('mapid').setView([this.lat, this.long], 13);
            this.$store.commit('map', mymap)
            leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoicGprMTQxMyIsImEiOiJja29ia2FtbmkyNnFiMm9yd3YyMGliaG1iIn0.fDeP1iFFfDrdlgq99GYKGg'
            }).addTo(mymap);
        })})
      },
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
</style>
