
<template>
  <div class="main" :style="{'backgroundImage':picBgc}"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      bgcPath: `https://gitee.com/bombeuler/mdpicture/raw/master/blog_home/home${Math.ceil(
        Math.random() * 5
      )}.jpg`
    };
  },
  computed: {
    picBgc() {
      return `url('${this.bgcPath}')`;
    }
  },
  created() {
    console.log(this.picBgc);
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
