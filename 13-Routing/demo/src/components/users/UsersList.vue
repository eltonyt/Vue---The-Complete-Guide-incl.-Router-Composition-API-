<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChange">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data() {
    return { changeSaved: false };
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/teams');
    },
    saveChange() {
      this.changeSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.needAuth) {
      console.log('Need Auth');
      next();
    }
    else 
      next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList Cmp beforeLeave');
    console.log(to, from);
    if (this.changeSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('You sure you wanna leave?');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>