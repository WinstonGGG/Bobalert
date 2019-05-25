<template>
  <div id="app">
    <center> <img id="nameTitle" src="../../assets/bobalertlogo.png"> </center>
    <div class="topNavigation">
      <DropdownList class="link"/>
      <a class="active link" href="../"><div class="menu">Today</div></a>
      <a class="link" href="#upcoming link"><div class="menu">Upcoming</div></a>
      <FilterComponent class="link"/>
    </div>
    <br>
    <router-view></router-view>
    <br>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import DropdownList from '../../components/DropdownList.vue'
import FilterComponent from '../../components/Filter.vue'
import MainContent from '../../components/MainContent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainContent,
    DropdownList,
    FilterComponent
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
  background-color: #fdc700;
  color: white;
}
</style>
