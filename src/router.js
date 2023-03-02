import Vue from "vue";
import VueRouter from "vue-router";
import MenuSider from "./views/MenuSider";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MenuSider",
    component: MenuSider,
    children: [
      {
        path: "/button",
        name: "learn-button",
        component: () =>
          import(/* webpackChunkName: "about" */ "./views/Button"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
