import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      registers: [],
    };
  },
  getters: {
    registers(state) {
      return state.registers;
    },
  },
  mutations: {
    setRegisters(state, registers) {
      state.registers = registers;
    },
    addRegister(state, registro) {
      state.registers = [...state.registers, registro];
    },
  },
  actions: {
    fetchRegisters({ commit }) {
      axios
        .get("/api/register")
        .then((result) => commit("setRegisters", result.data));
    },
    sendRegister({ commit }, register) {
      axios
        .post("/api/register", register)
        .then((result) => commit("addRegisters", result.data));
    },
  },
});

export default store;
