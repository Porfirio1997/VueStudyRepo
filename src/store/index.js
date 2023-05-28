import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      persons: [],
    };
  },
  getters: {
    persons(state) {
      return state.persons;
    },
  },
  mutations: {
    setPersons(state, persons) {
      state.persons = persons;
    },
    addPerson(state, person) {
      state.persons = [...state.persons, person];
    },
    updatePerson(state, person) {
      state.persons.filter(el, (index) => {
        if (person.id == el.id) {
          arr.splice(index, 1);
        }
      });
      addPerson(person);
    },
  },
  actions: {
    fetchPersons({ commit }) {
      axios
        .get("/api/person")
        .then((result) => commit("setpersons", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    sendPerson({ commit }, person) {
      axios
        .post("/api/person", person)
        .then((result) => commit("addpersons", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    deletePerson(person) {
      axios
        .delete("/api/person/" + person.id)
        .then(() => {
          return result.data;
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
    updatePerson({ commit }, person) {
      axios
        .put("/api/person/" + person.id, person)
        .then((result) => commit("updatePerson", result.data))
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status + "-" + error.response.data);
          }
        });
    },
  },
});

export default store;
