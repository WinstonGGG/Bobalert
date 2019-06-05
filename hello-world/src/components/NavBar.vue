<template>
  <div class="app">
    <center> <img id="nameTitle" src="../assets/bobalertlogo.png"> </center>
    <div class="topNavigation">
      <DropdownList :upcoming="this.upcoming" :category="this.category" class="link"/>
      <a class="link" :class="{ active: !upcoming }" href="../"><div class="menu">Today</div></a>
      <a class="link" :class="{ active: upcoming }" href="upcoming"><div class="menu">Upcoming</div></a>
      <FilterComponent class="link"/>
    </div>
  </div>
</template>

<script>
import DropdownList from './DropdownList.vue'
import FilterComponent from './Filter.vue'

export default {
  name: 'NavBar',
  components: {
    DropdownList,
    FilterComponent
  },
  props: {
    upcoming: {
      type: Boolean,
      default: false
    },
    category: {
      type: String,
      default: 'all'
    }
  }
}
</script>

<style>
/* CSS Section */

.app {
  margin-bottom: 40px;
}

/* Bobalert Logo Title */
#nameTitle {
  align: center;
  width: 175px;
  height: 105px;
}

/* Add a royal blue background color to the top navigation */
.topNavigation {
  background-color: #003c6c;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topNavigation .link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  width: 25%;
}
.topNavigation .link .menu {
  padding: 14px 9.5%;
}
/* Change the color of links on hover */
.topNavigation .link:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topNavigation .link.active {
  background-color: #f0b436;
  color: white;
}
</style>

