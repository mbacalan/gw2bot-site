import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Commands from "@/components/Commands.vue";
import FAQ from "@/components/FAQ.vue";
import Login from "@/components/Login.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/faq", component: FAQ },
  { path: "/commands", component: Commands },
  { path: "/login", component: Login }
];

export default new Router({
  routes,
  mode: "history"
});
