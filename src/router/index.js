import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../views/LandingPage.vue";
import SalesPage from "../views/SalesPage.vue";
import CarrinhoPage from "../views/CarrinhoPage.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
  },
  {
    path: "/Vendas",
    name: "Vendas",
    component: SalesPage,
  },
  {
    path: "/Carrinho",
    name: "Carrinho",
    component: CarrinhoPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
