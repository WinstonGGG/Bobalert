<template>
  <div id="app">
    <DropdownList/>
    <h1>Bobalert</h1>
    <table>
      <tr>
        <th>Boba</th>
        <th>Today</th>
        <th>upcomming</th>
        <th>Filter</th>
      </tr>
    </table>
    <Fundraiser/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Fundraiser from './components/Fundraiser.vue'
import DropdownList from './components/DropdownList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, 
    Fundraiser,
    DropdownList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
