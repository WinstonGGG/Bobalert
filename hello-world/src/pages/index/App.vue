<template>
  <div id="app">
    <center> <img id="nameTitle" src="../../assets/bobalertlogo.png"> </center>
    <div class="topNavigation">
      <DropdownList/>
      <a class="active" href="../">Today</a>
      <a href="#upcoming">Upcoming Events</a>
      <a href="#filter">Filter</a>
    </div>
    <Filter/>
    <br>
    <router-view></router-view>
    <br>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import DropdownList from '../../components/DropdownList.vue'
import Filter from '../../components/Filter.vue'
import MainContent from '../../components/MainContent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainContent,
    DropdownList,
    Filter,
  }
}
</script>

<style>
/* CSS Section */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
.topNavigation a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 9.5%;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topNavigation a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topNavigation a.active {
  background-color: #fdc700;
  color: white;
}
</style>
