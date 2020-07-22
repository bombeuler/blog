import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    loginBy(state, payload) {
      localStorage.setItem("Token", payload.token);
      state.token = payload.token;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
