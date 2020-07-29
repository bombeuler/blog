import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "~store/index";
const Login = () => import("../views/Login.vue");
const Logined = () => import("../views/Logined.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logined",
    name: "Logined",
    component: Logined,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("Token") && !store.state.token) {
    store.commit("setToken", localStorage.getItem("Token"));
  }
  if (store.state.token && !!store.state.infor) {
    store.dispatch("getInfor");
  }
  document.title = to.name;
  next();
});

export default router;
