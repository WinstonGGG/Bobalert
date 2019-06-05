<template>
  <div class="fund">
    <NavBar :upcoming="this.upcoming" :category="this.category" />
    <Fundraiser :fundID="1" v-show="isThisCategory(1) && isUpcoming(1)" />
    <Fundraiser :fundID="2" v-show="isThisCategory(2) && isUpcoming(2)" />
    <Fundraiser :fundID="3" v-show="isThisCategory(3) && isUpcoming(3)" />
  </div>
</template>

<script>
import Fundraiser from '../components/Fundraiser.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'MainContent',
  components: {
    Fundraiser,
    NavBar
  },
  props: {
    category: {
      type: String,
      default: ''
    },
    upcoming: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isThisCategory (fundID) {
      return this.getFundraiserCategory(fundID) === this.category || this.category === ''
    },
    getFundraiserCategory (fundID) {
      if (fundID === 1) {
        return 'drink'
      } else if (fundID === 2) {
        return 'food'
      } else if (fundID === 3) {
        return 'drink'
      } else if (fundID === 4) {
        return 'food'
      } else if (fundID === 5) {
        return 'drink'
      }
    },
    isUpcoming (fundID) {
      if (fundID === 1) {
        return this.upcoming === true
      } else if (fundID === 2) {
        return this.upcoming === true
      } else if (fundID === 3) {
        return this.upcoming === false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
