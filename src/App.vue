<template>
  <v-app>
    <router-view :key="nowKey"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  computed: {
    nowKey() {
      return this.$route.name;
    }
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
</style>