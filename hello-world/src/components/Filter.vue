<template>
  <div>
    <div v-on:click.prevent="showDropDown=!showDropDown">
      <div class="menu">Filters</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown" class="dropdown-content">
      <input type="checkbox" name="location1" v-model="quarry">Quarry<br>
      <input type="checkbox" name="location2" v-model="sne">SnE<br>
      <input type="checkbox" name="location3" v-model="others" checked>All<br><br>
      <label for="Apply"</label>
      <input type="button" onclick="submitFunction()" id="Apply" value="Apply">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  props: {
    name: String
  },
  data() {
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
  width: 24.76%;
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

input[type=checkbox] {
  position: relative;
  display: flex;
  margin-left: 100px;
  margin-bottom: -16px;
  margin-top: 20px;
}

input[type=button]{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 17px;
}
</style>