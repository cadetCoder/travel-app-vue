import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () => import("./views/Brazil"),
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () => import("./views/Hawaii"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () => import("./views/Jamaica"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () => import("./views/Panama"),
    },
  ],
});

export default router;
