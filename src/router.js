import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Brazil from "./views/Brazil.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: Home,
    },
    {
      path: "/brazil",
      name: "brazil",
      component: Brazil,
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: Brazil,
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: Brazil,
    },
    {
      path: "/panama",
      name: "panama",
      component: Brazil,
    },
  ],
});

export default router;
