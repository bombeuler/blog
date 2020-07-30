<template>
  <div class="mx-auto allBox">
    <v-card class="pa-6 mx">
      <v-card-title class="text-h6 mx-auto">提示</v-card-title>
      <v-card-text class="text-h5">你已经登录过了！</v-card-text>
      <v-card-actions>
        <div class="box">
          <v-btn color="#0288D1" @click="returnHome">返回首页</v-btn>
          <v-btn @click="quit">退出登录</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.allBox {
  position: relative;
  top: 30%;
}
.box {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-around;
}
</style>

<script>
export default {
  name: "Logined",
  components: {},
  created() {
    if (!this.$store.state.token) {
      this.$router.replace({ path: "/login" });
    }
  },
  methods: {
    returnHome() {
      this.$router.replace({ path: "/home" });
    },
    quit() {
      localStorage.removeItem("Token");
      this.$store.commit("setToken", "");
      this.$store.commit("setInfor", {});
      this.returnHome();
    },
  },
};
</script>