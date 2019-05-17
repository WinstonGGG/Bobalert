<template>
  <div class="fund">
    <h2>Fundraiser Name</h2>
    <h3>Organization Name</h3>
    <h3>Location; Time</h3>
  </div>
</template>

<script>
export default {
  name: 'Fundrasier',
  props: {
    name: String
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
</style>
