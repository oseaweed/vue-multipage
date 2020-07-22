import Vue from "vue";
import VueRouter from "vue-router";
import first from "../pages/first/first";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "firstView",
    component: first
  },

  {
    path: "/firstview",
    name: "firstView",
    component: () => import(`../views/firstView.vue`)
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
