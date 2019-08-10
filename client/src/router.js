import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/commands",
      name: "commands",
      component: () => import("./views/Commands.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./views/FAQ.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    }
  ]
});
