<template>
  <div id="app">
    <h2>{{getFundraiserInfo(this.$route.query.fundID).name}}</h2>
    <!-- <h2>Fund Event</h2> -->
    <h3>{{'Organization Name: ' + getFundraiserInfo(this.$route.query.fundID).org}}</h3>
    <h3>{{'Location: ' + getFundraiserInfo(this.$route.query.fundID).location}}</h3>
    <h3>{{'Time: ' + getFundraiserInfo(this.$route.query.fundID).time}}</h3>
    <h3>Contact Info: </h3>
    <h4>Joseph Yuan</h4>
    <h4>(408)678-9999</h4>
    <h3>Additional Info: No</h3>
  </div>
</template>

<script>
export default {
  name: 'fundDetail',
  props: {
    fundID: {
      type: String,
      default: 'No Fundraiser Fund'
    }
  },
  methods: {
    getFundraiserInfo (fundID) {
      if (fundID === 1) {
        return {
          name: 'Cool Tea Bar Boba Fundraiser',
          org: 'Vietnamese Student Association',
          location: 'SNE Library',
          time: 'Time: Today at 12 PM – 6 PM'
        }
      } else if (fundID === 2) {
        return {
          name: 'KBBQ Fundraiser',
          org: 'Korean American Student Association',
          location: 'Quarry Plaza',
          time: 'Time: Today at 12 PM – 3 PM'
        }
      } else {
        return {
          name: 'No Fundraiser Fund',
          org: '',
          location: '',
          time: ''
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
