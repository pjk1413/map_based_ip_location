<template>
    <div>
        <h1 class="display-3">IP ADDRESS: </h1>
        <hr/>
        <span class="display-6">{{ ip }}</span>
    </div>
</template>

<script>
// import store from './../main'

export default {
    computed : {
        ip() {
            return this.$store.state.ip
        }
    },
}
</script>

<style>

</style>