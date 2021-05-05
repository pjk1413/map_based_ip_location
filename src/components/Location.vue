<template>
    <div>
        <h6 class="font-weight-light text-muted">{{ this.location.country }}</h6>
        <h6 class="font-weight-light text-muted">{{ this.location.region }}</h6>
        <h6 class="font-weight-light text-muted">{{ this.location.city }}</h6>
        <h6 class="font-weight-light text-muted">{{ this.location.postalCode }}</h6>
        <h6 class="font-weight-light text-muted">{{ this.lat }} : {{ this.long }}</h6>
    </div>
</template>

<script>
export default {
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
}
</script>

<style>

</style>