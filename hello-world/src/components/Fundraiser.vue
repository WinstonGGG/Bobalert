<template>
  <div class="fund">
    <div class="border">
      <router-link :to="{path: 'fundDetail', query: {fundID: fundID}}">
        <div id="fundraiserTitle">
          <h2>{{ getFundraiserInfo (fundID).name }}</h2>
        </div>
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
    fundID: Number,
    upcoming: Boolean
  },
  methods: {
    getFundraiserInfo (fundID) {
      if (fundID === 1) {
        if (this.upcoming == true) {
          return {
            name: 'Cool Tea Bar Boba Fundraiser',
            org: 'Vietnamese Student Association',
            location: 'SNE Library',
            time: 'Time: Today at 12 PM – 6 PM'
          }
        } else {
          return {
            name: 'Pokoe Boba Fundraiser',
            org: 'Model United Nation',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 6 PM'
          }
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
#fundraiserTitle {
  font-family: "Times New Roman", Times, sans-serif;
  font-size: 15px;
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
