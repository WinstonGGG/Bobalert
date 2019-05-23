<template>
  <div id="app">
    <DropdownList/>
    <h1>Bobalert</h1>
    <div class="topNavigation">
      <a href="#boba">Boba</a>
      <a class="active" href="#today">Today</a>
      <a href="#upcoming">Upcoming Events</a>
      <a href="#filter">Filter</a>
    </div>
    <Filter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Fundraiser from './components/Fundraiser.vue'
import DropdownList from './components/DropdownList.vue'
import Filter from './components/DropdownList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Fundraiser,
    DropdownList,
    Filter
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

/* Add a black background color to the top navigation */
.topNavigation {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topNavigation a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
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
  background-color: #4CAF50;
  color: white;
}
</style>
