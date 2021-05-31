import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/details/:slug",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"
        ),
    },
  ],
});

export default router;
