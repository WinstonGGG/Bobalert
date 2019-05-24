<template>
  <div class="fund">
    <Fundraiser :fundID="'VSA'"/>
    <br>
    <Fundraiser :fundID="'CKI'"/>
    <br>
    <Fundraiser :fundID="'CSA'"/>
  </div>
</template>

<script>
import Fundraiser from '../components/Fundraiser.vue'

export default {
  name: 'MainContent',
  props: {
    fundID: String
  },
  components: {
    Fundraiser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
