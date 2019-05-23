<template>
  <div class="fund">
    <h2>{{fundID}}</h2>
    <h3>{{'Organization Name: ' + getFundraiserInfo(fundraiserName).Org}}</h3>
    <h3>{{'Location: ' + getFundraiserInfo(fundraiserName).Org}}</h3>
    <h3>Time: May 29(Wed), 11:30AM-2:30PM</h3>
    <h3>Contact Info: </h3>
    <h4>Joseph Yuan</h4>
    <h4>(408)678-9999</h4>
    <h3>Additional Info: </h3>
  </div>
</template>

<script>
export default {
  name: 'Fundrasier',
  props: ['fundID'], 
  methods: {
    getFundraiserInfo(fundID) {
      if (fundID == 'CSSA Boba Fundraiser'){
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
