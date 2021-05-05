<template>
<div class="container">
    <div class="row py-2">
      <div class="col"></div>
      <div class="col">
          <Spinner v-if="this.loading"/>
          <IP v-else/>
      </div>
      <div class="col"></div>
    </div>
    <div class="row py-2">
      <div class="col">
          <Location/>
      </div>
      <div class="col">
          <Map />
      </div>
      <div class="col"></div>
    </div>
    <div class="row py-2">
      <div class="col"></div>
      <div class="col">
          <SearchBar/>
      </div>
      <div class="col"></div>
    </div>
</div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import Location from './components/Location.vue'
import IP from './components/IP.vue'
import Map from './components/Map.vue'
import SearchBar from './components/SearchBar.vue'
// import store from './main'

export default {
    components: { Map, IP, SearchBar, Location, Spinner },
    computed : {
        ip() {
            return this.$store.state.ip
        },
        loading() {
            return this.$store.state.loading
        }
    },
}

</script>

<style scoped>

</style>
