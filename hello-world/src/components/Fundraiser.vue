<template>
  <div :style="style" class="border">
    <router-link :to="{path: 'fundDetail', query: {fundID: fundID}}">
      <h2 id="fundraiserTitle">{{ getFundraiserInfo (fundID).name }}</h2>
      <h3>{{ getFundraiserInfo (fundID).org }}</h3>
      <h3>{{ getFundraiserInfo (fundID).location }}</h3>
      <h3>{{ getFundraiserInfo (fundID).time }}</h3>
      <h3>{{ this.width }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Fundrasier',
  props: {
    fundID: Number
  },
  data() {
    return {
      width: window.innerWidth
    }
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.width = window.innerWidth
      });
    })
  },
  computed: {
    style () { 
      if (this.width >= 900){
        return {
          width: '42%',
          'margin-left': '2.5%',
          'margin-right': '2.5%',
        }
      } else {
        return {
          width: '60%',
          'margin-left': '20%',
          'margin-right': '20%',
        }
      }
    }
  },
  methods: {
    getFundraiserInfo (fundID) {
      if (fundID === 1) {
        return {
          name: 'Cool Tea Bar Boba Fundraiser',
          org: 'Vietnamese Student Association',
          location: 'SNE Library',
          time: 'Time: June 6 at 12 PM – 6 PM'
        }
      } else if (fundID === 2) {
        return {
          name: 'KBBQ Fundraiser',
          org: 'Korean American Student Association',
          location: 'Quarry Plaza',
          time: 'Time: June 6 at 12 PM – 3 PM'
        }
      } else if (fundID === 3) {
        return {
            name: 'Pekoe Boba Fundraiser',
            org: 'Model United Nation',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 6 PM'
          }
      } else if (fundID === 4) {
        return {
            name: 'Spam Musubi Fundraiser',
            org: 'Santa Cruz Dragon Boat',
            location: 'SNE Library',
            time: 'Time: Today at 12 PM – 6 PM'
          }
      } else if (fundID === 5) {
        return {
            name: 'Pokoe Boba Fundraiser',
            org: 'Model United Nation',
            location: 'Quarry Plaza',
            time: 'Time: June 7th at 12 PM – 6 PM'
          }
      } else if (fundID === 6) {
        return {
            name: 'Happy Lemon Fundraiser',
            org: 'Chinese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 6 PM'
          }
      } else if (fundID === 7) {
        return {
            name: 'Braised Pork Rice Fundraiser',
            org: 'Taiwanese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: June 10th at 12 PM – 6 PM'
          }
      } else if (fundID === 8) {
        return {
            name: 'Dry Pot Fundraiser',
            org: 'Peach Perfect',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 2 PM'
          }
      } else if (fundID === 9) {
        return {
            name: 'Poke House Fundraiser',
            org: 'Vietnamese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: June 10th at 12 PM – 2 PM'
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
  float: left;
  font-family: "Lucida Console", Monaco, monospace;
  /* line-height: 0.5; */
  font-size: 12px;
  border: 1px solid #bbbb;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: #EEEEEE;
  margin-top: 15px;
  box-shadow: 1px 1px #bbbb;
}

</style>
