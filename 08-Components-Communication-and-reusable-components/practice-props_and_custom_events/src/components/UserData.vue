<template>
  <form @submit.prevent="submitData">
    <div>
      <label>username</label>
      <input type="text" v-model="userName" />
    </div>
    <div>
      <label>age</label>
      <input type="number" v-model="age" />
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      age: 0,
    };
  },
  $emit: ["add-user"],
  methods: {
    submitData() {
      this.$emit("addUser", this.userName, this.age);
    },
  },
};
</script>
