import Vue from 'vue'
import App from './counter/index'

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
