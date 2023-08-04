<template>
  <button @click="login" v-if="!this.$store.getters.userIsAuthenticated">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
        this.$store.dispatch('login');
    },
    logout() {
        this.$store.dispatch('logout');
    },
  },
};
</script>