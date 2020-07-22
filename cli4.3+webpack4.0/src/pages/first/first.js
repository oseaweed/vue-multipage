
import Vue from 'vue'
import First from './first.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(First)
}).$mount('#first')
