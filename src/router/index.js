import Vue from "vue";
import VueRouter from "vue-router";
import Items from "../views/Items.vue";
import favItems from "../views/favItems.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Items",
    component: Items
  },
  {
    path: "/favorite",
    name: "favorit",
    component: favItems,
    props: true
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
