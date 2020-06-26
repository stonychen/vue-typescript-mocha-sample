import Vue from 'vue'
import Counter from './counter'

Vue.config.productionTip = false

new Vue({ render: h => h(Counter), })
  .$mount('#app')
