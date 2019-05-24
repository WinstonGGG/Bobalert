import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FundraiserEvent from '../fundraiserDetail/FundraiserEvent.vue'
import MainContent from '../../components/MainContent.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

// console.log("debug" + $route.params.fundID);

const routes = [
  { path: '/', component: MainContent },
  { path: '/fundDetail', component: FundraiserEvent },
  // { path: '/fundDetail', component: FundraiserEvent }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// // Firebase App (the core Firebase SDK) is always required and
// // must be listed before other Firebase SDKs
// var firebase = require("firebase/app");

// // Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

// var firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appID: "app-id",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
