<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your Name" v-model="enteredName" />
      <input type="number" placeholder="Your Age" v-model="enteredAge" />
      <button>Add User</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredAge: 0,
    };
  },
  $emit: ["add-user"],
  methods: {
    submitData() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
