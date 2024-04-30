import { createRouter, createWebHistory } from "vue-router";
import Navbar from "./pages/Navbar.vue";
import Home from "./pages/Home.vue";
import Gallery from "./pages/Gallery.vue";
import Order from "./pages/Order.vue";

const routes = [
  {
    name: "Navbar",
    path: "",
    component: Navbar,
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Order",
    path: "/Order",
    component: Order,
  },
  {
    name: "Gallery",
    path: "/gallery",
    component: Gallery,
  },
];

const router = Router();

export default router;

function Router() {
  return new createRouter({
    history: createWebHistory(),
    routes,
  });
}
