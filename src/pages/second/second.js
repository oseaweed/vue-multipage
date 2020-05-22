import Vue from "vue";
import Second from "./second.vue";
import router from "./../../router/second";
Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: (h) => h(Second),
}).$mount("#second");
module.exports = function createApp() {
  return app;
};
