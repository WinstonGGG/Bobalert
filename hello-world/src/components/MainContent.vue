<template>
  <div class="content">
    <NavBar :upcoming="this.upcoming" :category="this.category" />
    <table>
      <th class="fund">
        <tr>
          <Fundraiser :fundID="1"
            v-show="isThisCategory(1) && isUpcoming(1)"
          />
          <Fundraiser :fundID="2"
            v-show="isThisCategory(2) && isUpcoming(2)"
          />
          <Fundraiser :fundID="3"
            v-show="isThisCategory(3) && isUpcoming(3)"
          />
          <Fundraiser :fundID="4"
            v-show="isThisCategory(4) && isUpcoming(4)"
          />
          <Fundraiser :fundID="5"
            v-show="isThisCategory(5) && isUpcoming(5)"
          />
          <Fundraiser :fundID="6"
            v-show="isThisCategory(6) && isUpcoming(6)"
          />
          <Fundraiser :fundID="7"
            v-show="isThisCategory(7) && isUpcoming(7)"
          />
          <Fundraiser :fundID="8"
            v-show="isThisCategory(8) && isUpcoming(8)"
          />
          <Fundraiser :fundID="9"
            v-show="isThisCategory(9) && isUpcoming(9)"
          />
        </tr>
      </th>
    </table>
    <div >
     
    </div>
      <Footer />
  </div>
</template>

<script>
import Fundraiser from '../components/Fundraiser.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MainContent',
  components: {
    Fundraiser,
    NavBar,
    Footer
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
      // this.$route.query.fundID
      return (this.getFundraiserCategory(fundID) === this.category 
        || this.category === '') && (!this.$route.query.price || 
        (((this.$route.query.quarry &&
        this.getFundraiserLocation(fundID) == 'quarry') || 
        (this.$route.query.sne && this.getFundraiserLocation(fundID) == 'sne'))
        && (this.$route.query.price == this.getFundraiserPriceRange(fundID)
        || this.$route.query.price == 'all')))
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
      } else if (fundID === 6) {
        return 'drink'
      } else if (fundID === 7) {
        return 'food'
      } else if (fundID === 8) {
        return 'food'
      } else if (fundID === 9) {
        return 'drink'
      }
    },
    getFundraiserLocation (fundID) {
      if (fundID === 1) {
        return 'sne'
      } else if (fundID === 2) {
        return 'quarry'
      } else if (fundID === 3) {
        return 'quarry'
      } else if (fundID === 4) {
        return 'sne'
      } else if (fundID === 5) {
        return 'quarry'
      } else if (fundID === 6) {
        return 'quarry'
      } else if (fundID === 7) {
        return 'quarry'
      } else if (fundID === 8) {
        return 'quarry'
      } else if (fundID === 9) {
        return 'quarry'
      }
    },
    getFundraiserPriceRange (fundID) {
      if (fundID === 1) {
        return 'mid'
      } else if (fundID === 2) {
        return 'high'
      } else if (fundID === 3) {
        return 'mid'
      } else if (fundID === 4) {
        return 'low'
      } else if (fundID === 5) {
        return 'mid'
      } else if (fundID === 6) {
        return 'mid'
      } else if (fundID === 7) {
        return 'high'
      } else if (fundID === 8) {
        return 'high'
      } else if (fundID === 9) {
        return 'high'
      }
    },
    isUpcoming (fundID) {
      if (fundID === 1) {
        return this.upcoming === true
      } else if (fundID === 2) {
        return this.upcoming === true
      } else if (fundID === 3) {
        return this.upcoming === false
      } else if (fundID === 4) {
        return this.upcoming === false
      } else if (fundID === 5) {
        return this.upcoming === true
      } else if (fundID === 6) {
        return this.upcoming === false
      } else if (fundID === 7) {
        return this.upcoming === true
      } else if (fundID === 8) {
        return this.upcoming === false
      } else if (fundID === 9) {
        return this.upcoming === true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fund {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
/* .content {
  position: relative;
} */
</style>
