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
      path: "/brazil",
      name: "brazil",
      component: () => import(/* webpackChunkName: "Brazil"*/ "./views/Brazil"),
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () => import(/* webpackChunkName: "Hawaii"*/ "./views/Hawaii"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () =>
        import(/* webpackChunkName: "Jamaica"*/ "./views/Jamaica"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () => import(/* webpackChunkName: "Panama"*/ "./views/Panama"),
    },
    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"
        ),
    },
  ],
});

export default router;
