import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active-class",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
     } else {
       const position = {};
       if (to.hash) {
         position.selector = to.hash;
         return false;
       }
     }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true,
    },
    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import (
          /*webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"
        ),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(
              /*webpackChunkName: "ExperienceDetails"*/ "./views/ExperienceDetails"
            ),
        },
      ],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          // eslint-disable-next-line prettier/prettier
          destination => destination.slug === to.params.slug
          // eslint-disable-next-line prettier/prettier
        )
        if (exists) {
          next();
        } else {
          next({ name: "notFound " });
        }
      },
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: () =>
        import(/*webpackChunkName: "NotFound"*/ "./views/NotFound"),
    },
  ],
});

export default router;
