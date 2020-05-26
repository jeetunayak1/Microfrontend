import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/", exact: true, redirect: "/application_1" },
{ path: "/application_1", exact: true, redirect: "/application_1" },
{ path: "/application_2", exact: true, redirect: "/application_2" }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
