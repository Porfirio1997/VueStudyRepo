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
  getters: {
    salesSum(state) {
      let init = 0;
      return state.sales.reduce((acc, curr) => acc + curr.Value, init);
    },
  },
  mutations: {},
  actions: {},
  modules: {
    //adicionar lojas especializadas
  },
});

export default store;
