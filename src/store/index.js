import Vue from "vue";
import Vuex from "vuex";
import { request } from "~network/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "g",
    infor: {},
  },
  mutations: {
    loginBy(state, payload) {
      localStorage.setItem("Token", payload.token);
      state.token = payload.token;
    },
    setToken(state, token) {
      state.token = token;
    },
    setInfor(state, payload) {
      state.infor = payload;
    },
  },
  actions: {
    getInfor(context) {
      request({
        url: "hhh",
        method: "post",
        data: {
          token: context.state.token,
        },
      })
        .then((res) => {
          console.log(res.data.infor);
          if (res.data.status === 1) {
            context.commit("setInfor", res.data.infor);
          }
        })
        .catch((err) => {});
    },
  },
  modules: {},
});
