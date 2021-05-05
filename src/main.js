import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    loading : false,
    location : null,
    ip : null,
    lat: null,
    long: null,
    mymap: null
  },
  mutations : {
    loading(state) {
      state.loading = true
    },
    loaded(state) {
      state.loading = false
    },
    changeLocation(state, location) {
      state.location = location
    },
    map(state, map) {
      state.mymap = map
    },
    changeIP(state, ip) {
      state.ip = ip
    },
    changeLat(state, lat) {
      state.lat = lat
    },
    changeLong(state, long) {
      state.long = long
    }

  }
})

new Vue({
  render: h => h(App),
  store : store,
}).$mount('#app')
