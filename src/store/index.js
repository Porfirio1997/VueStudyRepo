import { createStore } from "vuex";
import products from "../mocks/products";
import sales from "../mocks/sales";
const store = createStore({
  state() {
    return {
      products: [...products],
      sales: [...sales],
      cart: [],
    };
  },
  getters: {
    salesSum(state) {
      let init = 0;
      return state.sales.reduce((acc, curr) => acc + curr.Value, init);
    },
  },
  mutations: {
    addOnetoCart(state, object) {
      let id = object.id;
      if (
        state.cart.length > 0 &&
        state.cart.filter((el) => el.id == id) !== []
      ) {
        let index = state.cart.findIndex((el) => el.id == id);
        if (index != -1) {
          if (state.products[index].quantity > state.cart[index].quantity)
            state.cart[index].quantity++;
          return;
        }
      }

      object.quantity = 1;
      state.cart.push(object);
    },
    removeOneFromCart(state, id) {
      let el = state.cart.filter((el) => el.id == id);
      if (el[0] && el[0].quantity > 1)
        el[0].quantity--; // remove 1 of quantity from cart
      else if (el[0] && el[0].quantity == 1) {
        // remove when equals 1
        const index = state.cart.indexOf(el);
        state.cart.splice(index, 1);
      } else {
      }
    },
  },
  actions: {},
  modules: {
    //adicionar lojas especializadas
  },
});

export default store;
