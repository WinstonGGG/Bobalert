<template>
  <div class="fund">
    <div class="border">
      <router-link :to="{path: 'fundDetail', query: {fundID: fundID}}">
        <h2 id="fundraiserTitle">{{ getFundraiserInfo (fundID).name }}</h2>
        <h3>{{ getFundraiserInfo (fundID).org }}</h3>
        <h3>{{ getFundraiserInfo (fundID).location }}</h3>
        <h3>{{ getFundraiserInfo (fundID).time }}</h3>
      </router-link>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Fundrasier',
  props: {
    fundID: Number
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
            name: 'Pekoe Boba Fundraiser',
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
  margin: 35px 0 0;
  font-size: 15px;
}
a {
  font-family: sans-serif;
  text-decoration: none;
}
a:link {
  color: #003c6c;
}
a:visited {
  color: #003c6c;
}
a:active {
  color: #f0b436;
}
a:hover {
  color: #0084c2;
}
h2 {
  font-size: 24px;
  margin-top: 30px;
}
.border {
  font-family: "Lucida Console", Monaco, monospace;
  line-height: 0.5;
  font-size: 12px;
  border: 1px solid #bbbb;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: #EEEEEE;
  width: 60%;
  height: 192px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px #bbbb;
}

</style>
