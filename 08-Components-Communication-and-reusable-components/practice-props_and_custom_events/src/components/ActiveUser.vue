<template>
  <section>
    <div>
      <strong>UserName: </strong> {{ userName }}
      <strong>Age: </strong>
      {{ age }}
      <button @click="edit">Edit</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  methods: {
    edit() {
      this.$emit("edit-employee", this.userName);
    }
  }
};
</script>