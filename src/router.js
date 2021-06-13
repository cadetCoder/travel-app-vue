import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "@/store";
Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active-class",
  scrollBehavior(to, from, savedPosition) {
    let position = {};
    if (savedPosition) {
      position = savedPosition;
    } else if (to.hash) {
      if (document.querySelector(to.hash)) {
        position.selector = to.hash;
        if (to.hash === '#experience'){
          position.offset = { y: 140 };
        }
      }
    } else position = { x:0, y:0 };

    return new Promise(resolve => {
      setTimeout(() => {
        resolved(position);
      }, 330);
    });
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
        import(/*webpackChunkName: "DestinationDetails"*/ "./views/DestinationDetails"
        ),
      children: [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: () =>
            import(/*webpackChunkName: "ExperienceDetails"*/ "./views/ExperienceDetails"
            )
        },
      ],
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          // eslint-disable-next-line prettier/prettier
          destination => destination.slug === to.params.slug
          // eslint-disable-next-line prettier/prettier
        );
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
