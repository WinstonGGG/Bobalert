<template>
  <div class="dropdown">
    <a href="#" v-on:click.prevent="showDropDown=!showDropDown">
      <div>Boba</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </a>
    <div v-if="showDropDown" class="dropdown-content">
      <div :key="link.id" v-for="link in links">
        <a href="#">{{link.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',
  props: {
    name: String
  },
  data() {
    return {
      showDropDown: true,
      links: [
      {   
          id: 1,
          name: "Account"
      },
      {
          id: 2,
          name: "Profile"
      },
      {
          id: 3,
          name: "Logout"
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  width: 300px;
}
/* Dropdown content (hidden by default) */
.dropdown-content {
  margin-top: 50px;
  position: absolute;
  z-index: 2;
  width: 97px;
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
}
</style>
