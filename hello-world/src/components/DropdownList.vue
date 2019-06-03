<template>
  <div>
    <div v-on:click.prevent="showDropDown=!showDropDown">
      <div class="menu">Categories</div>
      <!-- <img src="..." alt="avatar"> -->
      <i :class="{ 'fa-caret-up': showDropDown, 'fa-caret-down': !showDropDown }" aria-hidden="true"></i>
    </div>
    <div v-if="showDropDown" class="dropdown-content">
      <div :key="link.id" v-for="link in links">
        <a :href="'/' + getLinkName(link.path)">{{ link.name }}</a>
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
  props: {
    upcoming: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getLinkName (path) {
      if (this.upcoming) {
        return 'upcoming' + path
      } else 
        return path
    }
  },
  data() {
    return {
      showDropDown: false,
      links: [
      {   
          id: 1,
          name: "Drinks",
          path: 'drink'
      },
      {
          id: 2,
          name: "Food",
          path: 'food'
      },
      {
          id: 3,
          name: "All",
          path: ''
      }
      ]
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
