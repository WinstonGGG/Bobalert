<template>
  <div>
    <div v-on:click.prevent="showDropDown=!showDropDown">
      <div class="menu">Filters</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown" class="dropdown-content">
      <input type="checkbox" name="vehicle1" v-model="quarry" checked>Quarry<br>
      <input type="checkbox" name="vehicle2" v-model="sne" checked>SnE<br>
      <input type="checkbox" name="vehicle3" v-model="others" checked>All<br><br>
      <input type="submit" value="Apply">
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
  z-index: 2;
  width: 24.5%;
  background-color: #003c6c;
  list-style-type: none;
  padding: 0;
}
.dropdown-content div {
  padding: 14px 9.5%;
  font-size: 17px;
  float: none;
  text-decoration: none;
  /* display: block; */
}
.dropdown-content div a {
  margin-left: 0;
  width: 84%;
  text-align: center;
  color: #f2f2f2;
}
</style>