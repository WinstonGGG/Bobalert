<template>
  <div>
    <a href="#" v-on:click.prevent="showDropDown=!showDropDown">
      <div>Boba</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </a>
    <div v-if="showDropDown">
      <ul>
        <li :key="link.id" v-for="link in links">
          <a href="#">{{link.name}}</a>
        </li>
      </ul>
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
