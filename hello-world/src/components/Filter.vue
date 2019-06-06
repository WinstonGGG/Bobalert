<template>
  <div>
    <div v-on:click.prevent="showDropDown=!showDropDown">
      <div class="menu">Filters</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown" class="dropdown-content">
      <h1> Locations: </h1>
      <input type="checkbox" id="location1"/><label for ="location1">Quarry</label><br>
      <input type="checkbox" id="location2"/><label for ="location2">SnE</label><br>
      <div class="buttonStyle">
        <input type="button" onclick="submitFunction()" id="Apply" value="Apply">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    name: String
  },
  data () {
    return {
      showDropDown: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Dropdown content (hidden by default) */
.dropdown-content {
  position: absolute;
  width: 22.1%;
  background-color: #003c6c;
  list-style-type: none;
}
.dropdown-content div {
  padding: 17px;
  font-size: 17px;
  float: none;
  text-decoration: inherit;
  /* display: block; */
}

label {
  color: white;
}

input[type=checkbox] {
  position: relative;
  display: flex;
  margin-left: 50px;
  margin-bottom: -16px;
  margin-top: 20px;
  color: #f2f2f2;

}

input[type=button]{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 7px;
  border-color: #f0b436;
  background-color: #f0b436;
  color: white;
}

h1{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 17px;
  color: #f2f2f2;
}

</style>
