
import Vue from 'vue'
import Second from './second.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(Second)
}).$mount('#second')
