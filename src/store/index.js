import { createStore } from "vuex";
import products from "../mocks/products";
import sales from "../mocks/sales";
const store = createStore({
  state() {
    return {
      products: [...products],
      sales: [...sales],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    //adicionar lojas especializadas
  },
});

export default store;
