import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: "true",
    },
    {
      path: "/details/:slug",
      name: "DestinationDetails",
      props: "true",
      component: () =>
        import(
          /* webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"
        ),
    },
  ],
});

export default router;
