<template>
  <div 
    class="foot"
  >
    <h3>
      If you want to post your own fundraiser here, please email your fundraiser information to Winston Gao (lgao9@ucsc.edu). 
    </h3>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      height: window.innerHeight
    }
  },
  methods : {
    created() {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.height = window.innerHeight
        });
      })
    }
  },
  computed: {
    footerStyle() {
      return {
        'background-color': '#003c6c',
        position: 'fixed',
        top: '' + (this.height - 60) + 'px',
        height: '60px'
      }
    }
  }
}
</script>

<style>
/* CSS Section */

/* Style the links inside the navigation bar */
#footer {
  background-color: #003c6c;
  /* position: fixed; */
  
}
.foot {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #003c6c;
  
}
</style>

