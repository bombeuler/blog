import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "~store/index";

const Login = () => import("../views/Login.vue");
const Logined = () => import("../views/Logined.vue");
const LearnHome = () => import("~learn/LearnHome.vue");

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
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "注册登录",
    },
  },
  {
    path: "/logined",
    name: "Logined",
    component: Logined,
    meta: {
      title: "已登录",
    },
  },
  {
    path: "/learn",
    name: "LearnHome",
    component: LearnHome,
    meta: {
      title: "学习打卡",
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  if (localStorage.getItem("Token") && !store.state.token) {
    store.commit("setToken", localStorage.getItem("Token"));
  }
  if (store.state.token && Object.keys(store.state.infor).length === 0) {
    store.dispatch("getInfor");
  }
  document.title = to.matched[0].meta.title;
});

export default router;
