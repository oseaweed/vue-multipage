import Vue from "vue";
import Second from "./second.vue";
import router from "../../router/second.js";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(Second),
}).$mount("#second");
