<template>
  <div class="fund">
    <Fundraiser v-if="isThisCategory(1)" :fundID="1" :upcoming="upcoming" />
    <Fundraiser v-if="isThisCategory(2)" :fundID="2" :upcoming="upcoming" />
  </div>
</template>

<script>
import Fundraiser from '../components/Fundraiser.vue'

export default {
  name: 'MainContent',
  components: {
    Fundraiser
  },
  props: {
    category: {
      type: String,
      default: 'all'
    }, 
    upcoming: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isThisCategory (fundID) {
      return this.getFundraiserCategory(fundID) === this.category || this.category === 'all'
    },
    getFundraiserCategory (fundID) {
      if (fundID === 1) {
        return 'drink';
      } else if (fundID === 2) {
        return 'food';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
