<template>
  <div id="app">
    <NavBar />
    <div class="border">
      <img v-if="getFundraiserInfo(this.$route.query.fundID).img != undefined"
        class="fund_post" 
        :src="require('../../assets/' + getFundraiserInfo(this.$route.query.fundID).img)"
      />
      <h2>{{getFundraiserInfo(this.$route.query.fundID).name}}</h2>
      <!-- <h2>Fund Event</h2> -->
      <h3>{{'Organization Name: ' + getFundraiserInfo(this.$route.query.fundID).org}}</h3>
      <h3>{{'Location: ' + getFundraiserInfo(this.$route.query.fundID).location}}</h3>
      <h3>{{'Time: ' + getFundraiserInfo(this.$route.query.fundID).time}}</h3>
      <img v-if="getFundraiserInfo(this.$route.query.fundID).org_img != undefined"
        class="org_logo" 
        :src="require('../../assets/' + getFundraiserInfo(this.$route.query.fundID).org_img)"
      />
      <div class="contact">
        <h3>Contact Info: </h3>
        <h3>Joseph Yuan</h3>
        <h3>(408) 678-9999</h3>
      </div>
      <h3 class="additional">Additional Info: We accept Venmo and Cash!</h3>
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
          time: 'Time: June 6 at 12 PM – 6 PM',
          img: 'cool_tea_bar.jpeg',
          org_img: 'vsa.jpg'
        }
      } else if (fundID === 2) {
        return {
          name: 'KBBQ Fundraiser',
          org: 'Korean American Student Association',
          location: 'Quarry Plaza',
          time: 'Time: June 7 at 12 PM – 3 PM',
          img: 'bbq.jpg',
          org_img: 'kasa.png'
        }
      } else if (fundID === 3) {
        return {
          name: 'Pekoe Boba Fundraiser',
          org: 'Model United Nation',
          location: 'Quarry Plaza',
          time: 'Time: Today at 12 PM – 6 PM',
          img: 'pekoe.jpg',
          org_img: 'mun.png'
        }
      } else if (fundID === 4) {
        return {
            name: 'Spam Musubi Fundraiser',
            org: 'Santa Cruz Dragon Boat',
            location: 'SNE Library',
            time: 'Time: Today at 12 PM – 6 PM',
            img: 'spam.jpg'
          }
      } else if (fundID === 5) {
        return {
            name: 'Pekoe Boba Fundraiser',
            org: 'Model United Nation',
            location: 'Quarry Plaza',
            time: 'Time: June 7th at 12 PM – 6 PM',
            img: 'pekoe.jpg',
            org_img: 'mun.png'
          }
      }  else if (fundID === 6) {
        return {
            name: 'Happy Lemon Fundraiser',
            org: 'Chinese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 6 PM',
            img: 'lemon.jpg',
            org_img: 'csa.jpg'
          }
      } else if (fundID === 7) {
        return {
            name: 'Braised Pork Rice Fundraiser',
            org: 'Taiwanese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: June 10th at 12 PM – 6 PM',
            img: 'pork.jpg',
            org_img: 'tsa.jpg'
          }
      } else if (fundID === 8) {
        return {
            name: 'Dry Pot Fundraiser',
            org: 'Peach Perfect',
            location: 'Quarry Plaza',
            time: 'Time: Today at 12 PM – 2 PM',
            img: 'pot.jpg'
          }
      } else if (fundID === 9) {
        return {
            name: 'Poke House Fundraiser',
            org: 'Vietnamese Student Association',
            location: 'Quarry Plaza',
            time: 'Time: June 10th at 12 PM – 2 PM',
            org_img: 'vsa.jpg'
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
  font-size: 14px;
  border: 1px solid #bbbb;
  border-radius: 3px;
  padding-bottom: 10px;
  background-color: #EEEEEE;
  width: 60%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px #bbbb;
}
.fund_post {
  margin-top: 20px;
  width: 80%;
}
.border h3{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.org_logo {
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.contact {
  margin-left: auto;
  margin-right: auto;
}
.additional {
  clear: left;
  clear: right;
}
</style>
