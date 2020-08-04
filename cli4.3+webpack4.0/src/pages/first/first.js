
import Vue from 'vue'
import First from './first.vue'
import router from "../../router/first.js";

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(First)
}).$mount('#first')
