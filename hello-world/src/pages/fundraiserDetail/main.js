import Vue from 'vue'
import FundDetail from './FundraiserEvent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(FundDetail)
}).$mount('#app')
