<template>
  <div id="app">
    <NavBar />
    <div class="border">
      <h2>{{getFundraiserInfo(this.$route.query.fundID).name}}</h2>
      <!-- <h2>Fund Event</h2> -->
      <h3>{{'Organization Name: ' + getFundraiserInfo(this.$route.query.fundID).org}}</h3>
      <h3>{{'Location: ' + getFundraiserInfo(this.$route.query.fundID).location}}</h3>
      <h3>{{'Time: ' + getFundraiserInfo(this.$route.query.fundID).time}}</h3>
      <h3>Contact Info: </h3>
      <h4>Joseph Yuan</h4>
      <h4>(408) 678-9999</h4>
      <h3>Additional Info: We accept Venmo and Cash!</h3>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue'

export default {
  name: 'fundDetail',
  components: {
    NavBar
  },
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
      } else if (fundID === 3) {
        return {
          name: 'Pokoe Boba Fundraiser',
          org: 'Model United Nation',
          location: 'Quarry Plaza',
          time: 'Time: Today at 12 PM – 6 PM'
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

.border {
  font-family: "Calibri",sans-serif, monospace;
  line-height: 0.5;
  font-size: 14px;
  border: 1px solid #bbbb;
  border-radius: 3px;
  padding-bottom: 5%;
  background-color: #EEEEEE;
  width: 60%;
  height: 2%;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px #bbbb;
}
</style>
