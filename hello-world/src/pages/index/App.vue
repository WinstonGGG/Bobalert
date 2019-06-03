<template>
  <div id="app">
    <!-- <center> <img id="nameTitle" src="../../assets/bobalertlogo.png"> </center>
    <div class="topNavigation">
      <DropdownList class="link"/>
      <a class="active link" href="../"><div class="menu">Today</div></a>
      <a class="link" href="upcoming"><div class="menu">Upcoming</div></a>
      <FilterComponent class="link"/>
    </div> -->
    <router-view></router-view>
    <br>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import MainContent from '../../components/MainContent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainContent
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

</style>
