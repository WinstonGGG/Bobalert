<template>
  <div id="app">
    <h2>{{this.$route.query.fundID}}</h2>
    <!-- <h2>Fund Event</h2> -->
    <!-- <h3>{{'Organization Name: ' + getFundraiserInfo(this.$route.query.fundID).Org}}</h3>
    <h3>{{'Location: ' + getFundraiserInfo(this.$route.query.fundID).Location}}</h3> -->
    <h3>Time: May 29(Wed), 11:30AM-2:30PM</h3>
    <h3>Contact Info: </h3>
    <h4>Joseph Yuan</h4>
    <h4>(408)678-9999</h4>
    <h3>Additional Info: </h3>
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
      if (fundID === 'CSSA Boba Fundraiser') {
        return {
          Org: 'CSSA',
          Location: 'Quarry Plaza'
        }
      } else {
        return {
          Org: 'NULL',
          Location: 'Quarry Plaza'
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
