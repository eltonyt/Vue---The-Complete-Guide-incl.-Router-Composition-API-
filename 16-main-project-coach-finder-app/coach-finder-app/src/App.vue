<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://./layout/TheHeader.vue=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>