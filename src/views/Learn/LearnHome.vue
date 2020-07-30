<template>
  <div>hhhhhh</div>
</template>

<script>
export default {
  name: "LearnHome",
  created() {
    if (!this.$store.state.token) {
      this.$router.replace({
        path: "/login",
        query: {
          fromwhere: this.$route.path,
        },
      });
    }
  },
};
</script>