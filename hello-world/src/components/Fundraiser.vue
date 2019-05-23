<template>
  <div class="fund">
    <div class="border">
      <div id="fundraiserTitle">
        <h2>Cool Tea Bar Boba Fundraiser</h2>
      </div>
      <h3>Vietnamese Student Association</h3>
      <h3>Location: Science n Engineering Library</h3>
      <h3>Time: Today at 12 PM – 6 PM </h3>
    </div>
    <br>
    <div class="border">
      <div id="fundraiserTitle">
        <h2>TPUMPS Boba Fundraiser</h2>
      </div>
      <h3>Circle K International</h3>
      <h3>Location: Quarry Plaza</h3>
      <h3>Time: Today at 10 AM - 3 PM </h3>
    </div>
    <br>
    <div class="border">
      <div id="fundraiserTitle">
        <h2>Quicklys Boba Fundraiser</h2>
      </div>
      <h3>Chinese Student Association </h3>
      <h3>Location: Science n Engineering Library </h3>
      <h3>Time: Today at 11 AM - 4 PM </h3>
    </div>
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
#fundraiserTitle {
  font-family: "Times New Roman", Times, sans-serif;
  font-size: 15px;
}

.border {
  font-family: "Lucida Console", Monaco, monospace;
  line-height: 0.5;
  font-size: 12px;
  border: 1px solid #bbbb;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  background-color: #EEEEEE;
  width: 60%;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px #bbbb;
}
</style>
