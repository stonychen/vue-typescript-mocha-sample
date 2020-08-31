import Vue from 'vue'
import App from './counter/index'

Vue.config.productionTip = false

window.vm = new Vue({ render: h => h(App) }).$mount('#app')

