<template>
  <the-header :title="theTitle"></the-header>
  <the-resource></the-resource>
</template>
<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learning-resources/TheResources.vue';

export default {
  components: {TheHeader: TheHeader, TheResource: TheResource},
  data() {
    return {
      theTitle: 'Remember Me',
    };
  },
};
</script>

<!-- STYLE FOR WHOLE APPLICATION -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>