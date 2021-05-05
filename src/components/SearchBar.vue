<template>
    <div>
        <div class="form-group">
            <label for="ip-address">IP Address</label>
            <input id="ip-address" type="" class="form-control" v-model="text"/>
            <small class="form-text text-muted">Enter an IP Address to find the location</small>
        </div>
        <button v-on:click="alterIp" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
import axios from 'axios'
// import leaflet from 'leaflet'

export default {
data() {
    return {
        text : "",
        ipify_key : 'at_ZJrcEdWzYsFZyjyLJ94FqHjha4psX'
    }
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
    }
},
 methods : {
     alterIp : function() {
        this.$store.commit('loading')
        this.$store.commit('changeIP', this.text)
        this.createMap()
     },
     createMap : async function() {
         let searchParam = 'ipAddress'
         const match = this.ip.match(/[0-9].+/)
         if (match == null) {
             searchParam = 'domain'
         }

        await axios.get(`https://geo.ipify.org/api/v1?apiKey=${this.ipify_key}&${searchParam}=${this.ip}`).then((response) => {
                this.$store.commit('changeLat', response.data.location.lat)
                this.$store.commit('changeLong', response.data.location.lng)
                this.$store.commit('changeLocation', response.data.location)
          }).then(() => {
              let mymap = this.$store.state.mymap
              mymap.setView([this.lat, this.long], 13);
              this.$store.commit('loaded')
        }).catch(() => {
            alert('Invalid IP Address or Domain')
            this.$store.commit('loaded')
        })
     }
 }
}
</script>

<style>

</style>