<template>
  <div 
    id="app"
  >
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
