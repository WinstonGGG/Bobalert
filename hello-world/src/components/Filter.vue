<template>
  <div>
    <div v-on:click.prevent="showDropDown=!showDropDown">
      <div class="menu">Filters</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown" class="dropdown-content">
      <h1> Locations: </h1>
      <input v-model="quarry" type="checkbox" id="location1"/><label for ="location1">Quarry</label><br>
      <input v-model="sne" type="checkbox" id="location2"/><label for ="location2">SnE</label><br>
      <h2> Price Range: </h2>
      <select v-model="price" value="all">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="mid">Mid</option>
        <option value="high">High</option>
      </select>
      <div class="buttonStyle">
        <!-- <input type="button" onclick="submitFunction()" id="Apply" value="Apply"> -->
        <router-link class="button" :to="{path: '/', query: {quarry, sne, price}}">
          Apply
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    name: String,
    quarry: Boolean,
    sne: Boolean,
    price: {
      type: String,
      default: 'all'
    }
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
  width: 24.5%;
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
  margin-left: 10%;
  margin-bottom: -16px;
  margin-top: 20px;
  color: #f2f2f2;
}

.button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 7px;
  border-color: #f0b436;
  background-color: #f0b436;
  color: white;
  text-decoration: none;
}

h1{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 17px;
  color: #f2f2f2;
}

h2{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 17px;
  color: white;
}

select{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #f2f2f2;
}
</style>
