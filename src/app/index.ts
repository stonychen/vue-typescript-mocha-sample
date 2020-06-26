import Vue from 'vue'
import App from './counter'

Vue.config.productionTip = false

new Vue({ render: h => h(App), })
  .$mount('#app')
